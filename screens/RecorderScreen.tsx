import { Pressable, StyleSheet, Text, View } from "react-native";
import { Audio } from "expo-av";
import React from "react";
import { RecordingFile } from "../types/RecordingFile";
import { Ionicons } from "@expo/vector-icons";
import StorageService from "../services/StorageService";
import { ScrollView } from "react-native-gesture-handler";

const RecorderScreen = () => {
  const [allFiles, setAllFiles] = React.useState<RecordingFile[]>([]);
  const [recording, setRecording] = React.useState<Audio.Recording>();

  React.useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const readRecordings = await StorageService.readFile();
        if (isMounted && readRecordings != null) {
          setAllFiles((prevFiles) => [...prevFiles, ...readRecordings]);
        }
      } catch (error) {
        console.error("Error reading from file: " + error);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  const startRecording = async () => {
    try {
      const permission = await Audio.requestPermissionsAsync();

      if (permission.status == "granted") {
        const { recording } = await Audio.Recording.createAsync(
          Audio.RecordingOptionsPresets.HIGH_QUALITY
        );

        setRecording(recording);
      } else {
        console.log("Conceda permisos de micrófono a la aplicación.");
      }
    } catch (error) {
      console.error("Failed to start recording: ", error);
    }
  };

  const stopRecording = async () => {
    try {
      console.log("Stopping recording...");
      setRecording(undefined);

      await recording?.stopAndUnloadAsync();

      let updatedRecordings: RecordingFile[] = [...allFiles];

      const soundFile = await recording?.createNewLoadedSoundAsync();

      if ("durationMillis" in soundFile!.status) {
        let newRecording: RecordingFile = {
          sound: soundFile!.sound,
          duration: getDurationFormatted(soundFile!.status.durationMillis!),
          file: recording!.getURI(),
        };

        updatedRecordings.push(newRecording);

        const recordingExists = allFiles.some(
          (existingRecording) => existingRecording.file === newRecording.file
        );

        if (!recordingExists) {
          setAllFiles([...allFiles, newRecording]);

          await StorageService.saveFile([...allFiles, newRecording]);
        } else {
          console.log("Duplicate recording. Not adding to state.");
        }
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

  const getRecordingLines = (): JSX.Element | JSX.Element[] | undefined => {
    if (allFiles.length > 0) {
      return (
        <ScrollView>
          {allFiles.map((recordingLine: RecordingFile, index) => (
            <View key={index} style={styles.row}>
              <Text style={styles.fill}>
                <Text style={{ fontWeight: "bold" }}>
                  Grabación {index + 1}
                </Text>
                {"\n"} {recordingLine.duration}
              </Text>
              <Pressable
                style={styles.buttonPlay}
                onPress={() => recordingLine.sound.replayAsync()}
              >
                <Ionicons name="play-outline" size={20} color={"white"} />
              </Pressable>
            </View>
          ))}
        </ScrollView>
      );
    }
  };

  const handleDelete = async () => {
    setAllFiles([]);
    await StorageService.saveFile([]);
  };
  return (
    <View>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button}
          onPress={recording ? stopRecording : startRecording}
        >
          <Text style={styles.buttonText}>
            {recording ? "Grabando..." : "Grabar"}
          </Text>
        </Pressable>

        <Pressable style={styles.button} onPress={handleDelete}>
          <Text style={styles.buttonText}>Borrar</Text>
        </Pressable>
      </View>
      {getRecordingLines()}
    </View>
  );
};

export default RecorderScreen;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    alignSelf: "center",
  },
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
