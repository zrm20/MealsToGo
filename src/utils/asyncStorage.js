import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export async function storeData(key, value) {
  let valueToStore;

  if (typeof value === 'object') {
    valueToStore = JSON.stringify(value);
  } else {
    valueToStore = value;
  };

  try {
    await AsyncStorage.setItem(key, valueToStore)
  } catch (e) {
    Alert.alert('Failed to store data:', key);
    console.error(e);
  };
};

export async function getData(key) {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    if (jsonValue) {
      return JSON.parse(jsonValue);
    } else {
      return null;
    }
  } catch (e) {
    Alert.alert('Failed to read data:', key);
    console.error(e);
  };
};