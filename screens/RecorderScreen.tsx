import { Pressable, StyleSheet, Text, View } from "react-native";
import { Audio } from "expo-av";
import React from "react";
import { RecordingFile } from "../types/RecordingFile";
import { Ionicons } from "@expo/vector-icons";
import StorageService from "../services/StorageService";
import { ScrollView } from "react-native-gesture-handler";
import Utils from "../utils/Utils";

const RecorderScreen = () => {
  const [allFiles, setAllFiles] = React.useState<RecordingFile[]>([]);
  const [recording, setRecording] = React.useState<Audio.Recording>();

  React.useEffect(() => {
    const fetchFiles = async () => {
      try {
        const readRecordings: RecordingFile[] | null =
          await StorageService.readFile("recKey");

        if (readRecordings != null) {
          setAllFiles((prevFiles) => [...prevFiles, ...readRecordings]);
        }
      } catch (error) {
        console.error("Error reading from file: " + error);
      }
    };

    fetchFiles();
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
        console.log("Grant recording permissions to continue.");
      }
    } catch (error) {
      console.error("Failed to start recording: " + error);
    }
  };

  const stopRecording = async () => {
    try {
      setRecording(undefined);

      await recording?.stopAndUnloadAsync();

      const newRecording = await recording?.createNewLoadedSoundAsync();

      if ("durationMillis" in newRecording!.status) {
        let newAudioFile: RecordingFile = {
          sound: newRecording!.sound,
          duration: Utils.getDurationFormatted(
            newRecording!.status.durationMillis!
          ),
          file: recording!.getURI(),
        };

        setAllFiles((prevFiles) => [...prevFiles, newAudioFile]);
        await StorageService.saveFile([...allFiles, newAudioFile], "recKey");
      }
    } catch (error) {
      console.log("Failed to stop recording: ", error);
    }
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
    await StorageService.saveFile([], "recKey");
  };
  return (
    <View style={styles.container}>
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
  container: {
    flex: 1,
    backgroundColor: "#fce8e6",
  },
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
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "grey",
  },
});
