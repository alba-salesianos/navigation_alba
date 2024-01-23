import { RecordingFile } from "../types/RecordingFile";
import AsyncStorage from "@react-native-async-storage/async-storage";

const saveFile = async (files: RecordingFile[]) => {
  try {
    if (files) {
      await AsyncStorage.setItem("filesKey", JSON.stringify(files));
    }
  } catch (error) {
    console.error("Error while saving: " + error);
  }
};

const readFile = async (): Promise<RecordingFile[] | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem("filesKey");
    if (jsonValue != null) {
      return JSON.parse(jsonValue);
    }
  } catch (error) {
    console.error("Error while reading file: " + error);
  }
  return null;
};

const StorageService = {
  saveFile,
  readFile,
};

export default StorageService;
