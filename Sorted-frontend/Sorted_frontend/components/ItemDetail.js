import { TabRouter } from '@react-navigation/native'
import React from 'react'
import { FlatList, StyleSheet, Text, View, SectionList } from 'react-native'
import Card from './Card'

const ItemDetail = ({navigation, route}) => {
const item = route.params

console.log(item)
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Text>{item.brand}</Text>
            <Text>{item.model}</Text>
            <Text>SN: {item.serial_number}</Text>
            <Text>Quantity: {item.quantity}</Text>
            <Text>Category: {item.category}</Text>
         

          </View>
        </View>
      </View>
    );
}

export default ItemDetail

const styles = StyleSheet.create({
container:{
    flex:1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,

},
card: {
  borderRadius: 10,
  elevation: 3,
  backgroundColor: '#fff',
  shadowOffset: {width: 1, height: 1},
  shadowColor: '#333',
  shadowOpacity: 0.3,
  shadowRadius: 2,
  height: 200,
  width: 200,
  justifyContent: 'center',
  // borderWidth: 1,
},
cardContent: {
  // marginHorizontal: 20,
  // marginVertical: 10,
  // flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
},
  
})


