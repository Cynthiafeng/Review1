import React from 'react';
import {View,Text} from 'react-native';
import styles from '../styles/MainStyles';
import Top from './Top';
import Mid from './Mid';
import Bot from './Bot';

function Main(){
    return(
        <View style={styles.main} >
            <View style={styles.boxes}><Top/></View>
            <View style={styles.boxes}><Mid /></View>
            <View style={styles.boxes}></View>
        </View>

    )
}

export default Main;
