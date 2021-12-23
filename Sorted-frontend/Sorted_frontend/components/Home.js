import React, {useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView, FlatList} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Icon from 'react-native-feather';
// import { Card, Button, Header } from 'react-native-elements';
import Card from './Card';
import {NavigationEvents} from 'react-navigation';
import {Searchbar} from 'react-native-paper';

const Home = props => {
  console.log(props);
  return (
    <View style={styles.container}>
      <View style={styles.section1}>
        {/* <Text style={styles.welcome}>Welcome,</Text> */}
        <View style={styles.greeting}>
          <Text style={styles.name}>Sean</Text>
          <View style={styles.user}>
            <Icon.User height={50} width={50} color={'navy'} />
          </View>
        </View>
      </View>
      <Searchbar
        style={styles.searchbar}
        icon={Icon.Search}
        placeholder="Search"
      />

      <View style={styles.section2}>
        <Text style={styles.title}>Categories</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>

      <View style={styles.section3}>
        <View style={styles.tile}>
          <Card>
            <Icon.Camera height={50} width={50} stroke={'skyblue'} />
          </Card>
          <Text style={styles.label}>Cameras</Text>
        </View>
        <View style={styles.tile}>
          <Card>
            <Icon.Aperture height={50} width={50} stroke={'lightgreen'} />
          </Card>
          <Text style={styles.label}>Lenses</Text>
        </View>

        <View style={styles.tile}>
          <Card>
            <Icon.Volume2 height={50} width={50} stroke={'lightcoral'} />
          </Card>
          <Text style={styles.label}>Sound</Text>
        </View>

        <View style={styles.tile}>
          <Card>
            <Icon.HardDrive height={50} width={50} stroke={'khaki'} />
          </Card>
          <Text style={styles.label}>Storage</Text>
        </View>
      </View>

      <View style={styles.section4}>
        <Text style={styles.title}>Kits</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>

      <View style={styles.section5}>
        <View style={styles.card5}>
          <View style={styles.cardContent5}>
            <Icon.Video height={50} width={50} stroke={'skyblue'} />
            <Icon.BatteryCharging height={50} width={50} stroke={'skyblue'} />
            <Icon.Monitor height={50} width={50} stroke={'skyblue'} />
            <Icon.Mic height={50} width={50} stroke={'skyblue'} />
          </View>
        </View>
        <View style={styles.card5}>
          <View style={styles.cardContent5}>
            <Icon.Camera height={50} width={50} stroke={'lightgreen'} />
            <Icon.Aperture height={50} width={50} stroke={'lightgreen'} />
            <Icon.Zap height={50} width={50} stroke={'lightgreen'} />
            <Icon.Image height={50} width={50} stroke={'lightgreen'} />
          </View>
        </View>
      </View>

      <View style={styles.label5container}>
        <Text style={styles.label5}>Video Packages</Text>
        <Text style={styles.label5}>Photo Packages</Text>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
  },
  section1: {
    height: 90,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  greeting: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 25,
    marginLeft: 40,
    fontWeight: 'bold',
    color: 'navy',
  },
  user: {
    borderWidth: 2,
    borderRadius: 80,
    marginRight: 40,
    height: 60,
    width: 60,
  },
  searchbar: {
    borderRadius: 15,
    height: 50,
    width: 300,
  },
  section2: {
    height: 60,
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: 25,
    marginLeft: 20,
    fontWeight: 'bold',
    color: 'navy',
  },
  seeAll: {
    marginRight: 22,
    color: 'navy',
  },

  section3: {
    marginTop: -15,
    height: 150,
    width: '95%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginBottom: 15,
  },
  tile: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  },
  label: {
    marginTop: 5,
    color: 'navy',
    fontSize: 10,
  },
  section4: {
    height: 60,
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: -15,
  },
  section5: {
    height: 250,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: -40,
    marginBottom: -50,
    // borderWidth: 1,
  },
  label5container: {
    height: 30,
    width: '65%',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  label5: {
    color: 'navy',
    fontSize: 15,
  },
  // section5Tiles:{
  //     alignItems: 'center',
  //     justifyContent: 'space-around',
  //     height: 50,
  //     width: 50,
  //     borderWidth: 1,
  //     flexDirection:'row',
  //     flex: 1,

  // },

  card5: {
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    margin: 5,
    height: 130,
    width: 130,
    justifyContent: 'space-around',
    // borderWidth: 1,
  },
  cardContent5: {
    marginHorizontal: 15,
    marginVertical: 10,
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    // alignItems: 'center',
  },
});
