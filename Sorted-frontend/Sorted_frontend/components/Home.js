import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Icon from 'react-native-feather';
// import { Card, Button, Header } from 'react-native-elements';
import Card from './Card';


const Home = (props) => {

console.log(props)
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', maxWidth: '100%'}}>
        <View>
          <Text>Categories</Text>
        </View>
      <View style={styles.grid} >
        <Card >
          <Icon.Camera height={50} width={50} stroke={'skyblue'}/>
          {/* <Text>CAMERAS</Text> */}
        </Card>
        <Card >
          <Icon.Aperture height={50} width={50} stroke={'lightgreen'} flex={1}/>
          {/* <Text>LENSES</Text> */}
        </Card>
        <Card >
          <Icon.Mic height={50} width={50} stroke={'lightcoral'}/>
          {/* <Text>SOUND</Text> */}
        </Card>
        <Card >
          <Icon.HardDrive height={50} width={50} stroke={'khaki'}/>
          {/* <Text>DATA</Text> */}
        </Card>
      </View>
      <View style={styles.view2}>

      </View>
      

    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
grid:{
  flex: 1,
  flexDirection: 'row',
  height: 100,
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'Baskerville'
  
  
},
view2:{

  flex: 4,
  width: '100%',

  
}


});

