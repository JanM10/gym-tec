import React from "react";
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";


export default function ButtonGradient(){

return (
<TouchableOpacity style={styles.button}>
    <LinearGradient 
    Colors={['#4c669f','#3b5998','#192f6a']}>
    <Text style={StyleSheet.text}></Text>

    </LinearGradient>

</TouchableOpacity>

);

}

const styles = StyleSheet.create({
text:{
    fontSize:14,
    color: 'gray',
    marginTop:20

},
button:{
    width: '80%',
    height: 50,
},

})

