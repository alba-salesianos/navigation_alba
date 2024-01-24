import AsyncStorage from "@react-native-async-storage/async-storage";

const saveFile = async <T>(file: T, keyName: string) => {
  try {
    if (file) {
      await AsyncStorage.setItem(keyName, JSON.stringify(file));
    }
  } catch (error) {
    console.error("Error while saving: " + error);
  }
};

const readFile = async <T>(keyName: string): Promise<T | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem(keyName);
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
