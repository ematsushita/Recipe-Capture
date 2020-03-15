import React, { useContext } from 'react';
import { ProfileContext } from './ProfileContext';
import { Dropdown } from 'react-native-material-dropdown';
import { StyleSheet} from 'react-native';

const DropDownCuisineComponent = ({list, label}) => {
  let styles = StyleSheet.create({
    dropdown:{
      backgroundColor: "white",
      width: '80%',
      alignSelf: "center",
      paddingLeft: 5, 
      paddingRight: 5
    
    }
  });
    const [state, setState] = useContext(ProfileContext);
    //direct setState works
    return(
      <Dropdown 
      label={label}
      data={list} 
      // (() => setState())
      onChangeText={(value)=>{
        setState(state => ({...state, cuisine:value}));

      }}
      containerStyle={styles.dropdown}
      />
    )
}
export default DropDownCuisineComponent