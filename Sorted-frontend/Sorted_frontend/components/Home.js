import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import * as Icon from 'react-native-feather';
import Card from './Card';

import {Searchbar} from 'react-native-paper';

const Home = ({navigation}) => {
  console.log(navigation);
  return (
    <View style={styles.container}>
      <View style={styles.section1}>
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
        <TouchableOpacity onPress={() => navigation.navigate('Cameras')}>
          <View style={styles.tile}>
            <Card>
              <Icon.Camera height={50} width={50} stroke={'skyblue'} />
            </Card>
            <Text style={styles.label}>Cameras</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Lenses')}>
          <View style={styles.tile}>
            <Card>
              <Icon.Aperture height={50} width={50} stroke={'lightgreen'} />
            </Card>
            <Text style={styles.label}>Lenses</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Sound')}>
          <View style={styles.tile}>
            <Card>
              <Icon.Volume2 height={50} width={50} stroke={'lightcoral'} />
            </Card>
            <Text style={styles.label}>Sound</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Storage')}>
          <View style={styles.tile}>
            <Card>
              <Icon.HardDrive height={50} width={50} stroke={'darkkhaki'} />
            </Card>
            <Text style={styles.label}>Storage</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.section4}>
        <Text style={styles.title}>Kits</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>
      <View style={styles.section5}>
        <TouchableOpacity onPress={() => navigation.navigate('Video Kits')}>
          <View style={styles.card5}>
            <View style={styles.cardContent5}>
              <Icon.Video height={45} width={45} stroke={'seagreen'} />
              <Icon.BatteryCharging height={45}width={45}stroke={'turquoise'}/>
                <Icon.Monitor height={45} width={45} stroke={'violet'} />
              <Icon.Mic height={45} width={45} stroke={'sandybrown'} />
            </View>

          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Photo Kits')}>
          <View style={styles.card5}>
            <View style={styles.cardContent5}>
              <Icon.Camera height={45} width={45} stroke={'khaki'} />
              <Icon.Aperture height={45} width={45} stroke={'mediumpurple'} />
              <Icon.Zap height={45} width={45} stroke={'deepskyblue'} />
              <Icon.Image height={45} width={45} stroke={'darkcyan'} />
            </View>
          </View>
        </TouchableOpacity>
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
    marginTop: -30,
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
  },
  label5container: {
    height: 30,
    width: '65%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  label5: {
    color: 'navy',
    fontSize: 15,
  },

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
  },
  cardContent5: {
    marginHorizontal: 20,
    marginVertical: 10,
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
});
