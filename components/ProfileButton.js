import React, { useContext } from 'react'
import { AsyncStorage, View } from 'react-native'
import { Button } from 'galio-framework';
import { StorageContext } from '../contexts/storageContext';

const obj = {

}


const ProfileButton = (props) => {
    const [state, setState] = useContext(StorageContext);
    const stringState = JSON.stringify(state)
    const selected = props.state[0]
    const setSelected = props.state[1];



 const storeData = async () => {
     try {
<<<<<<< HEAD
=======
        console.log(state);
>>>>>>> 9dbbfe7aeace129fb8fee27fc6b6dd0f70f6cd62
       await AsyncStorage.setItem('state',stringState );
     } catch (error) {
        console.log(error);
     }
   };

    return(
        <Button 
        shadowless size="small" 
        iconSize={50} color="error" 
        style={props.style}
        onPress={async () => {
            console.log(state);
            await storeData();
        }}
        >
        Save Settings
      </Button>

    )
}

export default ProfileButton