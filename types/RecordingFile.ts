import { Sound } from "expo-av/build/Audio";

export type RecordingFile = {
  sound: Sound;
  duration: string;
  file: string | null | undefined;
};
