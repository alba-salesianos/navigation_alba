import { Pressable, StyleSheet, Text, View } from "react-native";
import { Audio } from "expo-av";
import React from "react";
import { RecordingFile } from "../types/RecordingFile";
import { Ionicons } from "@expo/vector-icons";

const RecorderScreen = () => {
  const [allFiles, setAllFiles] = React.useState<RecordingFile[]>([]);
  const [recording, setRecording] = React.useState<Audio.Recording>();
  const [message, setMessage] = React.useState("");

  const startRecording = async () => {
    try {
      const permission = await Audio.requestPermissionsAsync();

      if (permission.status == "granted") {
        const { recording } = await Audio.Recording.createAsync(
          Audio.RecordingOptionsPresets.HIGH_QUALITY
        );

        setRecording(recording);
      } else {
        setMessage("Conceda permisos de micrófono a la aplicación");
      }
    } catch (error) {
      console.error("Failed to start recording: ", error);
    }
  };

  const stopRecording = async () => {
    try {
      console.log("Stopping recording..,");
      setRecording(undefined);

      await recording?.stopAndUnloadAsync();

      let updatedRecordings = [...allFiles];

      const soundFile = await recording?.createNewLoadedSoundAsync();

      if ("durationMillis" in soundFile!.status) {
        let newRecording: RecordingFile = {
          sound: soundFile!.sound,
          duration: getDurationFormatted(soundFile!.status.durationMillis!),
          file: recording!.getURI(),
        };

        updatedRecordings.push(newRecording);
        setAllFiles(updatedRecordings);
      }
    } catch (error) {
      console.log("Error parando: ", error);
    }
  };

  const getDurationFormatted = (millis: number) => {
    const minutes = millis / 1000 / 60;
    const minutesDisplay = Math.floor(minutes);
    const seconds = Math.round((minutes - minutesDisplay) * 60);
    const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;

    return `${minutesDisplay}:${secondsDisplay}`;
  };

  const getRecordingLines = (): JSX.Element | JSX.Element[] => {
    if (allFiles.length > 0) {
      return allFiles.map((recordingLine: RecordingFile, index) => (
        <View key={index} style={styles.row}>
          <Text style={styles.fill}>
            <Text style={{ fontWeight: "bold" }}>Grabación {index + 1}</Text>
            {"\n"} {recordingLine.duration}
          </Text>
          <Pressable
            style={styles.buttonPlay}
            onPress={() => recordingLine.sound.replayAsync()}
          >
            <Ionicons name="play-outline" size={20} color={"white"} />
          </Pressable>
        </View>
      ));
    } else {
      return (
        <View>
          <Text>No hay grabaciones.</Text>
        </View>
      );
    }
  };
  return (
    <View>
      <Pressable
        style={styles.button}
        onPress={recording ? stopRecording : startRecording}
      >
        <Text style={styles.buttonText}>
          {recording ? "Grabando..." : "Grabar"}
        </Text>
      </Pressable>
      {getRecordingLines()}
    </View>
  );
};

export default RecorderScreen;

const styles = StyleSheet.create({
  button: {
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    backgroundColor: "royalblue",
  },
  buttonPlay: {
    marginRight: 12,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 50,
    backgroundColor: "royalblue",
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  fill: {
    flex: 1,
    margin: 16,
    paddingLeft: 25,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 50,
    backgroundColor: "lightgrey",
  },
});
