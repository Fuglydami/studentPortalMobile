import AsyncStorage from '@react-native-async-storage/async-storage';

export async function deleteData(key: string) {
  await AsyncStorage.removeItem(key);
}
export async function saveData(key: string, value: any) {
  await AsyncStorage.setItem(key, JSON.stringify(value));
}

export const loadData = async key => {
  const storedUserData = await AsyncStorage.getItem(key);
  const parsedUserData = storedUserData ? JSON.parse(storedUserData) : null;
  return parsedUserData;
};
