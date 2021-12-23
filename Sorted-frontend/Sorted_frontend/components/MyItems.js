import React from 'react';
import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Card from './Card';
import { useNavigation } from '@react-navigation/native';
import {withNavigation} from 'react-navigation'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ItemDetail from './ItemDetail';



const MyItems = ({items, navigation}) => {



return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        
      <FlatList
        
        numColumns={2}
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
            <TouchableOpacity 
                onPress={() => navigation.navigate('ItemDetail', item)}
                

            
           
            >
            <Card >
              <Text>
                {item.brand}
                {'\n'}
                {item.model}
              </Text>
            </Card>
          </TouchableOpacity>
        )}
        />

    </View>
  );
};

export default MyItems;

const styles = StyleSheet.create({});