import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Settings() {

  const Stack = createNativeStackNavigator()


    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings</Text>
    </View>
    )
}

const styles = StyleSheet.create({})
