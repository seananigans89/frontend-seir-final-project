import React, {useState} from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native'
import {Formik} from 'formik'
import { Button } from 'react-native-elements';
import {Picker} from 'react-native-picker'



const AddItem = ({addItem, navigation}) => {

const itemAddedAlert =() =>{
    Alert.alert(
        "Success!",
        "Your Item Has Been Added",
        [{
            text: 'OK',
            onPress: ()=> console.log("OK Pressed")
        }]
    )
}
const categories =() =>{[
    {name: "Cameras", id: 1},
    {name: "Lenses", id: 2},
    {name: "Lighting", id: 3},
    {name: "Support", id: 4},
    {name: "Sound", id: 5},
    {name: "Computers", id: 6},
    {name: "Data Storage", id: 7},
    {name: "Bags & Cases", id: 8},
]

}
  return (
   <View style={styles.container}>
    <Formik
        initialValues={{brand: '', model: '', serial: '', quantity: '', category: '',}}
        onSubmit={(values, actions) => {
            addItem(values)
            actions.resetForm()
            itemAddedAlert()
        }}
        >
         {(props) => (
             <View >
                 <TextInput
                 style={styles.input}
                 placeholder='Brand'
                 onChangeText={props.handleChange('brand')}
                 value={props.values.brand}
                 />
                 <TextInput
                 style={styles.input}
                 placeholder='Model'
                 onChangeText={props.handleChange('model')}
                 value={props.values.model}
                 />
                 <TextInput
                 style={styles.input}
                 placeholder='Serial'
                 onChangeText={props.handleChange('serial')}
                 value={props.values.serial}
                 />
                 <TextInput
                 style={styles.input}
                 placeholder='Quantity'
                 onChangeText={props.handleChange('quantity')}
                 value={props.values.quantity}
                 keyboardType='numeric'
                 />
                 <TextInput
                 style={styles.input}
                 placeholder='Category'
                 onChangeText={props.handleChange('category')}
                 value={props.values.category}
                 />
                
                 
                 
                 <Button style={styles.btn} title='Submit' color='lightblue' onPress={props.handleSubmit}/>
             </View>
         )}
    </Formik>
   </View>
  );
};


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    input: {
        height: 40,
        width: 250,
        padding: 8,
        margin: 5,
        borderWidth: 1,
        borderRadius: 10
      },
      btn: {
        padding: 9,
        margin: 5,
      },
      btnText: {
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center',
      },
 



})

export default AddItem