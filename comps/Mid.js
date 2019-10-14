import React,{useState} from 'react';
import {
  View,
  Text,
  Picker
} from 'react-native';
import styles from '../styles/midSty';

function Mid(){
const [midColour, setMidColour]= useState('#3399ff');

  return (
    <View style={[styles.cont,{backgroundColor:midColour}]}>
        <Picker
            style={styles.picker}
            selectedValue={midColour}
            onValueChange={(itemValue)=>setmidColor(itemValue)}
        >
            <Picker.Item label="Color 1" value="#ffffcc" />
            <Picker.Item label="Color 2" value="#d98cb3" />
            <Picker.Item label="Color 3" value="#993399" />
            <Picker.Item label="Color 4" value="#6b19e6" />
        </Picker>
    </View>
  )
}

export default Mid;
