import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Icon from 'react-native-feather'
import Card from './Card';
import Search from './Search';






const Home = ({navigation}) => {
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Search/>
        
       
    </View>
    )
}

export default Home

const styles = StyleSheet.create({})


