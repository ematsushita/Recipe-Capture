import {AsyncStorage }from 'react-native';

export const getFavouritesAsync = async () => {
  const item = await AsyncStorage.getItem('favourites')
  const obj = JSON.parse(item);
  return obj;
};
