import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Card = (props) => {
    return (
        <View style={styles.card}>
          <View style={styles.cardContent}>
            { props.children }
          </View>
        </View>
      );
    }
    
    

export default Card


const styles = StyleSheet.create({
      card: {
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
        width: 150,
        alignContent: 'center',
        
      },
      cardContent: {
        marginHorizontal: 15,
        marginVertical: 15,
      }
    });