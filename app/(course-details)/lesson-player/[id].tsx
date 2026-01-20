import MusicPlayer from "@/components/music-player/MusicPlayer";
import StartFlashCard from "@/components/screens/courses/lesson-player/StartFlashCard";
import { ThemedView } from "@/components/ui/basics/themed-view";
import CommonSheet from "@/components/ui/bottom-sheet/CommonSheet";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import TrackPlayer, {
  State,
  usePlaybackState,
  useProgress,
} from "react-native-track-player";

export default function LessonPlayer() {
  const { id } = useLocalSearchParams();
  const bottomsheetRef = useRef<BottomSheetModal>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(true);
  const playbackState = usePlaybackState();
  const { position, duration } = useProgress(250);

  const isPlaying = playbackState.state === State.Playing;

  const playPauseTrack = async () => {
    const currentTrack = await TrackPlayer.getActiveTrack();

    if (currentTrack) {
      if (isPlaying) {
        await TrackPlayer.pause();
      } else {
        await TrackPlayer.play();
      }
    } else {
      await TrackPlayer.add({
        id: "1",
        url: "https://s3.amazonaws.com/kargopolov/kukushka.mp3",
        title: "Avaritia",
        artist: "deadmau5",
        artwork: "http://example.com/cover.png",
      });

      await TrackPlayer.play();
    }
  };

  useEffect(() => {
    bottomsheetRef.current?.present();
  }, []);

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
