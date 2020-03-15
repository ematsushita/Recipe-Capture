import React, { useContext } from 'react';
import { ProfileContext } from './ProfileContext';
import { Dropdown } from 'react-native-material-dropdown';
import { StyleSheet} from 'react-native';

const DropDownTimeComponent = ({list,style ,label}) => {
    const [state, setState] = useContext(ProfileContext);
    return(
      <Dropdown 
      label={label}
      data={list} 
      onChangeText={(value)=>{setState(state => ({...state, time:value}));}}
      containerStyle={style}
      />
    )
}
export default DropDownTimeComponent