import MusicPlayer from "@/components/music-player/MusicPlayer";
import StartFlashCard from "@/components/screens/courses/lesson-player/StartFlashCard";
import { ThemedView } from "@/components/ui/basics/themed-view";
import CommonSheet from "@/components/ui/bottom-sheet/CommonSheet";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { Audio, AVPlaybackStatus } from "expo-av";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useRef, useState } from "react";

export default function LessonPlayer() {
  const { id } = useLocalSearchParams();
  const bottomsheetRef = useRef<BottomSheetModal>(null);
  const soundRef = useRef<Audio.Sound | null>(null);

  const [isSheetOpen, setIsSheetOpen] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    bottomsheetRef.current?.present();

    return () => {
      // Cleanup audio when leaving screen
      soundRef.current?.unloadAsync();
    };
  }, []);

  const onPlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    if (!status.isLoaded) return;

    setIsPlaying(status.isPlaying);
    setPosition(status.positionMillis / 1000);
    setDuration((status.durationMillis ?? 0) / 1000);
  };

  const playPauseTrack = async () => {
    if (soundRef.current) {
      if (isPlaying) {
        await soundRef.current.pauseAsync();
      } else {
        await soundRef.current.playAsync();
      }
      return;
    }

    // Create sound for the first time
    const { sound } = await Audio.Sound.createAsync(
      {
        uri: "https://s3.amazonaws.com/kargopolov/kukushka.mp3",
      },
      {
        shouldPlay: true,
        progressUpdateIntervalMillis: 250,
      },
      onPlaybackStatusUpdate,
    );

    soundRef.current = sound;
  };

  return (
    <ThemedView>
      <MusicPlayer
        isPlaying={isPlaying}
        onPlayPause={() => playPauseTrack()}
        progress={position}
        duration={duration}
        isSheetOpen={isSheetOpen}
      />

      <CommonSheet
        bottomSheetRef={bottomsheetRef}
        snapPoints={["55%"]}
        index={1}
        onChange={(index) => setIsSheetOpen(index !== -1)}
      >
        <StartFlashCard />
      </CommonSheet>
    </ThemedView>
  );
}
