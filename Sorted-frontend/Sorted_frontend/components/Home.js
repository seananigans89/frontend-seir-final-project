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
            <Icon.Mic height={50} width={50} stroke={'lightcoral'} />
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
          </View>
        </View>

        <Text style={styles.label}>Cameras</Text>
      </View>
      <View style={styles.section5Tiles}>
        <Card>
          <Icon.Video height={50} width={50} stroke={'skyblue'} />
        </Card>
        <Text style={styles.label}>Cameras</Text>
      </View>
      <View style={styles.section5Tiles}>
        <Card>
          <Icon.Video height={50} width={50} stroke={'skyblue'} />
        </Card>
        <Text style={styles.label}>Cameras</Text>
      </View>
      <View style={styles.section5Tiles}>
        <Card>
          <Icon.Video height={50} width={50} stroke={'skyblue'} />
        </Card>
        <Text style={styles.label}>Cameras</Text>
      </View>

      <View style={styles.section5Tiles}>
        <Card>
          <Icon.Aperture height={50} width={50} stroke={'lightgreen'} />
        </Card>
        <Text style={styles.label}>Lenses</Text>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',

    // borderWidth: 1,
  },
  section1: {
    height: 90,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    borderWidth: 1,
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
    borderWidth: 1,
    height: 60,
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    borderWidth: 1,
    height: 150,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
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
    borderWidth: 1,
    height: 60,
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  section5: {
    borderWidth: 1,
    height: 250,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  // section5Tiles:{
  //     alignItems: 'center',
  //     justifyContent: 'space-around',
  //     height: 50,
  //     width: 50,
  //     borderWidth: 1,
  //     flexDirection:'row',
  //     flex: 1,

  // }

  card5: {
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    margin: 5,
    alignContent: 'center',
    justifyContent: 'center',
  },
  cardContent5: {
    marginHorizontal: 15,
    marginVertical: 15,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  //   kitGrid: {
  //     // flex: 1,
  //     flexDirection: 'row',
  //     height: 100,
  //     width: 100,
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //     // borderWidth:1,
  //   },

  //   catContainer: {
  //     flexDirection: 'row',
  //     justifyContent: 'space-between',
  //     width: '100%',
  //     alignItems: 'baseline',
  //   },
  //   kitContainer: {
  //     flexDirection: 'row',
  //     justifyContent: 'space-between',
  //     width: 10,
  //     alignItems: 'baseline',
  //     // marginBottom: 80,
  //     marginTop: 30,
  //     borderWidth: 1,
  //   },
  //   title: {
  //     fontSize: 25,
  //     marginLeft: 20,
  //     fontWeight: 'bold',
  //     color: 'navy',
  //   },
  //   seeAll: {
  //     marginRight: 22,
  //     color: 'navy',
  //   },
  //   label: {
  //     marginTop: 5,
  //     color: 'navy',
  //     fontSize: 10,
  //   },
  //   greeting: {
  //     width: '100%',
  //     flexDirection: 'row',
  //     justifyContent: 'space-between',
  //     marginTop: 30,
  //   },
  //   tile: {
  //     // marginTop: -40,
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //     height: 100,
  //     // marginBottom: 30,
  //   },
  //   kitTile: {
  //     // marginTop: -30,
  //     // marginBottom: 50,
  //     alignItems: 'center',
  //     // justifyContent: 'center',
  //     height: 150,
  //     width: 250,
  //     // width: '100%',
  //     borderWidth: 1,
  //   },
  //   name: {
  //     fontSize: 25,
  //     marginLeft: 50,
  //     fontWeight: 'bold',
  //     color: 'navy',
  //   },
  //   welcome: {
  //     marginLeft: 40,
  //     marginBottom: -20,
  //     marginTop: 20,
  //     color: 'navy',
  //     width: '100%',
  //   },
  //   user: {
  //     borderWidth: 2,
  //     borderRadius: 50,
  //     marginRight: 40,
  //     marginTop: -20,
  //     padding: 2,
  //   },

  //   searchbar: {
  //     borderRadius: 15,
  //     width: 300,
  //     flexDirection: 'row',
  //     marginBottom: 50,
  //     marginTop: 40,
  //   },
});
