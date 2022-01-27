import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Animated,
} from 'react-native';
import Card from '../shared/Card';
import Swipeable from 'react-native-gesture-handler/Swipeable';


const screenWidth = Dimensions.get('window').width;

const MyItems = ({items, navigation, kits}) => {
  
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={items}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ItemDetail', item)}>
               <View style={styles.deleteBox}>

            <Card>
              <Text numberOfLines={2} style={{width: 90}}>
                {item.brand}
                {'\n'}
                {item.model}
              </Text>
            </Card>
          </View>
          </TouchableOpacity>
        )}
      />
      <FlatList
        numColumns={2}
        data={kits}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate('ItemDetail', item)}>
            <Card>
              <Text numberOfLines={2} style={{width: 90}}>
                {item.name}
                {'\n'}
                {item.category}
              </Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default MyItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // deleteBox: {
  //   backgroundColor: 'red',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   width: 100,
  //   height: 80,
  // },
});
