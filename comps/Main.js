import React from 'react';
import {View,Text} from 'react-native';
import styles from '../styles/mainSty';
import Top from './Top';
import Mid from './Mid';
import Bot from './Bot';

function Main(){

    return(
        <View style={styles.main} >
            <View style={styles.divs}><Top/></View>
            <View style={styles.divs}><Mid /></View>
            <View style={styles.divs}><Bot/></View>
            
        </View>

    )
}

export default Main;
