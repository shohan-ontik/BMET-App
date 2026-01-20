import { registerRootComponent } from "expo";
import { ExpoRoot } from "expo-router";
import TrackPlayer from "react-native-track-player";

TrackPlayer.registerPlaybackService(
  () => require("./components/music-player/setup/playbackService").default,
);

registerRootComponent(ExpoRoot);
