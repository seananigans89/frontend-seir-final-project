import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as Icon from 'react-native-feather'
import {Header} from 'react-native-elements'
import { NavigationContainer, TabRouter } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HeaderScreen = ({navigation, route}) => {
   

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Header backgroundColor='white' 

            />
        </View>
    )
}

export default HeaderScreen

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'grey',
    }
})





