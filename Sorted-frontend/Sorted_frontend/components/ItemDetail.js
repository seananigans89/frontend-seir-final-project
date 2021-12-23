import { TabRouter } from '@react-navigation/native'
import React from 'react'
import { FlatList, StyleSheet, Text, View, SectionList } from 'react-native'
import Card from './Card'

const ItemDetail = ({navigation, route}) => {
const item = route.params

console.log(item)
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Card >
          <Text>
            {item.brand}
            {'\n'}
            {item.model}
            {'\n'}
            {item.serial_number}
            {'\n'}
            {item.quantity}
        </Text>
        </Card>
      </View>
    );
}

export default ItemDetail

const styles = StyleSheet.create({})


