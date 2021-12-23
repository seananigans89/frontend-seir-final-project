import React from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

const Login = ({navigation}) => {
    return (
        <View style={styles.login}>
            <TextInput style={styles.input} placeholder='Username'/>
            <TextInput style={styles.input} placeholder='Password' />
            <Button title='Login!' onPress={() => navigation.navigate('Root')}/>

        </View>
    )
}

export default Login

const styles = StyleSheet.create({

    login:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    input: {
        height: 40,
        width: 250,
        padding: 8,
        margin: 5,
        borderWidth: 1,
        borderRadius: 10
      },
      btn: {
        padding: 9,
        margin: 5,
      },
      btnText: {
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center',
      },
})
