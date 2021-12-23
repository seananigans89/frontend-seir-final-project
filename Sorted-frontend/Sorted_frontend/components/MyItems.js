import React from 'react';
import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Card from './Card';


const MyItems = ({items, navigation}) => {
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={items}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ItemDetail', item)}>
            <Card>
              <Text numberOfLines={2} style={{width: 90}}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
