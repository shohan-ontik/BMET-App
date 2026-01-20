import FeatherIcons from "@expo/vector-icons/Feather";
import Slider from "@react-native-community/slider";
import { router } from "expo-router";
import React from "react";
import {
  ImageBackground,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type MusicPlayerProps = {
  isPlaying?: boolean;
  progress?: number;
  duration?: number;
  artwork?: string;
  onPlayPause?: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
  onSeek?: (value: number) => void;
  isSheetOpen?: boolean;
};

const formatTime = (seconds: number): string => {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s < 10 ? "0" : ""}${s}`;
};

const MusicPlayer: React.FC<MusicPlayerProps> = ({
  isPlaying = true,
  progress = 330,
  duration = 900,
  artwork = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  onPlayPause,
  onNext,
  onPrevious,
  onSeek,
  isSheetOpen = false,
}) => {
  return (
    <View className="h-full overflow-hidden">
      <ImageBackground
        source={require("@/assets/images/onboarding/onboarding1.png")}
        className="flex-1"
        blurRadius={2}
      >
        {/* Overlay */}
        <View className="absolute inset-0 bg-black/40" />
        <SafeAreaView className="flex-1">
          <View className="flex-row items-center justify-between px-4">
            <TouchableOpacity
              className="p-2 rounded-full bg-black/40"
              onPress={() => router.back()}
            >
              <FeatherIcons name="chevron-left" size={20} color="white" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 rounded-full bg-black/40">
              <FeatherIcons name="download" size={20} color="white" />
            </TouchableOpacity>
          </View>
          <View className={`flex-1 ${isSheetOpen ? "" : "justify-center"}`}>
            {/* Controls */}
            <View className="flex-row items-center justify-center gap-6 mb-4 mt-8">
              <TouchableOpacity onPress={onPrevious}>
                <FeatherIcons name="skip-back" size={32} color="white" />
              </TouchableOpacity>

              <Pressable
                onPress={onPlayPause}
                className="p-3 rounded-full bg-blue-700 items-center justify-center"
              >
                <FeatherIcons
                  name={isPlaying ? "pause" : "play-circle"}
                  size={36}
                  color="white"
                />
              </Pressable>

              <TouchableOpacity onPress={onNext}>
                <FeatherIcons name="skip-forward" size={32} color="white" />
              </TouchableOpacity>
            </View>

            {/* Progress */}
            <View className="flex-row items-center px-4 pb-3">
              <Text className="text-white text-xs">{formatTime(progress)}</Text>

              <Slider
                style={{ flex: 1, marginHorizontal: 8 }}
                minimumValue={0}
                maximumValue={duration}
                value={progress}
                minimumTrackTintColor="#1d4ed8"
                maximumTrackTintColor="rgba(255,255,255,0.4)"
                thumbTintColor="#ffffff"
                onSlidingComplete={(value: number) => {
                  onSeek?.(value);
                }}
              />

              <Text className="text-white text-xs">{formatTime(duration)}</Text>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default MusicPlayer;
