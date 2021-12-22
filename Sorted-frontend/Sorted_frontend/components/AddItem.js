import React, {useState} from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import {Formik} from 'formik'
import { Button } from 'react-native-elements';
import { globalStyles } from '../global';

const AddItem = ({addItem}) => {




  return (
   <View>
    <Formik
        initialValues={{brand: '', model: '', serial: '', quantity: '1', category: '',}}
        onSubmit={(values) => {
            console.log(values)
            addItem(values)
        }}
        >
         {(props) => (
             <View>
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
                 <Button style={styles.btn} title='Submit' color='lightblue' onPress={props.handleSubmit}/>
             </View>
         )}
    </Formik>
   </View>
  );
};


const styles = StyleSheet.create({
    input: {
        height: 40,
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