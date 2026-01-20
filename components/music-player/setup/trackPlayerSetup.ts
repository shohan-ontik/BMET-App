import TrackPlayer, {
  AppKilledPlaybackBehavior,
  Capability,
} from "react-native-track-player";

export async function setupTrackPlayer() {
  await TrackPlayer.setupPlayer();

  await TrackPlayer.updateOptions({
    android: {
      appKilledPlaybackBehavior: AppKilledPlaybackBehavior.ContinuePlayback,
    },
    capabilities: [
      Capability.Play,
      Capability.Pause,
      Capability.SkipToNext,
      Capability.SkipToPrevious,
      Capability.Stop,
    ],
  });
}
