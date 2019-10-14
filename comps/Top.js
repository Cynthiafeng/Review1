import React, {useState} from 'react';
import {
  View,
  Text,
  Switch
} from 'react-native';
import styles from '../styles/topSty';

function Top(){

    const [switchInp, setSwitchInp] = useState(false);

    var tColour = null

    if (switchInp === true){

        tColour = (
        <View style={[styles.top,{backgroundColor:'#000'}]}>
            <Switch
            value ={switchInp}
            onValueChange ={(itemValue, itemIndex) => setShowTheme(itemValue)}>
            </Switch>
            <Text style={{color: '#fff'}}>Night Mode</Text>
        </View>
    )
}

if (switchInp ===false){

    tColour = (
    <View style={[styles.top,{backgroundColor:'#fff'}]}>
        <Switch
        value ={switchInp}
        onValueChange ={(itemValue, itemIndex) => setShowTheme(itemValue)}>
        </Switch>

        <Text style={{color: '#000'}}>Day Mode</Text>
    </View>
)
}


    return(
        <View>
        {tColour}
        </View>

    )
}



export default Top;
