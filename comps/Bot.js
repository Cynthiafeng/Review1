import React,{useState} from 'react';
import {
    View,
    TextInput,
    Button,
    Alert
} from 'react-native';
import styles from '../styles/botSty';

function Bot() {
    const [text, setText] = useState('');
    return(
        <View style={styles.bot}>
            <TextInput
            placeholder="Type Here"
            onChangeText={(text) => setText(text)}
            // mytext={mytext}
            />
            <Button
            title="Send"
            onPress={()=>{
                Alert.alert(
                    'Alert',
                    'You sent:'+ text,
                    [
                        {
                        text: 'Done', onPress:()=> console.log("Done")
                        }
                    ],
                    {cancelable: false}
                )
            }} />
        </View>
    )
}

export default Bot;
