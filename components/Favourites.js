import React, {useContext} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { ProfileContext } from './ProfileContext';

export default function Favourites(props){

  return(
    <View>
      <Text>
        Favourites 
        - map through favourites and display in RECIPELISTCARD component
      </Text>
    </View>
  )

}