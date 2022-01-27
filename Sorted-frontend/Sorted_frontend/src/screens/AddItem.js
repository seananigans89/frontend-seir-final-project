import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Alert, Text} from 'react-native';
import {Field, Form, Formik, useField, useFormikContext} from 'formik';
import {Button} from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
import * as yup from 'yup'
import { getItemAsync } from 'expo-secure-store';


const AddItem = ({addItem, navigation, getItems}) => {
 
  const itemSchema = yup.object().shape({
    brand: yup.string().required('Brand is Required!'),
    model: yup.string(),
    serial: yup.string(),
    quantity: yup.number(),
    category: yup.string().required('Category is Required!'),
  })
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Cameras', value: 'cameras'},
    {label: 'Lenses', value: 'lenses'},
    {label: 'Lighting', value: 'lighting'},
    {label: 'Support', value: 'support'},
    {label: 'Sound', value: 'sound'},
    {label: 'Computers', value: 'computers'},
    {label: 'Data Storage', value: 'data'},
    {label: 'Bags & Cases', value: 'bags'},
  ]);

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          brand: '',
          model: '',
          serial: '',
          quantity: '',
          category: '',
        }}
        validationSchema={itemSchema}
        onSubmit={(values, actions) => {
          values = { ...values};
          console.log(values)
          addItem(values);
          actions.resetForm();
          getItems()
        
        }}>
        {props => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Brand"
              placeholderTextColor={'lightgrey'}
              onChangeText={props.handleChange('brand')}
              value={props.values.brand}
            />
            <Text style = {styles.error}>{props.errors.brand}</Text>
            <TextInput
              style={styles.input}
              placeholder="Model"
              placeholderTextColor={'lightgrey'}
              onChangeText={props.handleChange('model')}
              value={props.values.model}
            />
            <TextInput
              style={styles.input}
              placeholder="Serial"
              placeholderTextColor={'lightgrey'}
              onChangeText={props.handleChange('serial')}
              value={props.values.serial}
            />
            <TextInput
              style={styles.input}
              placeholder="Quantity"
              placeholderTextColor={'lightgrey'}
              onChangeText={props.handleChange('quantity')}
              value={props.values.quantity}
              keyboardType="numeric"
            />

              <View style={styles.dropdown}>

                 
                <DropDownPicker

                  onChangeValue={value => {
                     props.setFieldValue('category', value)

                  }}
                  dropDownDirection="TOP"
                  open={open}
                  value={value}
                  items={items}
                  name={'category'}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                  placeholder="Category..."
                  placeholderStyle={{color: 'lightgrey'}}
                  itemSeparator={true}
                />
                <Text style = {styles.error}>{props.errors.category}</Text>
              </View>


            <Button
              style={styles.btn}
              title="Submit"
              color="lightblue"
              onPress={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: 250,
    padding: 8,
    margin: 5,
    borderWidth: 1,
    borderRadius: 10,
  },
  dropdown: {
    width: 250,
    height: 40,
    margin: 5,
  },
  btn: {
    // padding: 9,
    marginTop: 25,
    borderWidth: 1,
    borderRadius: 10,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
  error:{
    textAlign: 'center',
    
  }
});

export default AddItem;
