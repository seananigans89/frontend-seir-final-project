import axios from 'axios';
import React, {useContext, useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import { Context } from '../context/GlobalContext';



const Login = ({ navigation, values, props}) => {

  const globalContext = useContext(Context)
  const { isLoggedIn, setIsLoggedIn, domain, userObj, setUserObj, setToken, token, saveToken, printUserObj } = globalContext




  



  const loginSchema = yup.object().shape({
    email: yup.string().required('Email is Required!'),
    password: yup.string().required('Password is Required!'),
  });
  

  const handleLogin = async (values) => {
    const apiObject = {
      method: 'POST',
      url: `${domain}/sign-in/`,

      data: {
        user:{
        email: values.email,
        password: values.password,
        }
        
      },
    };
    try {
      const response = await axios(apiObject);
      if (response.status === 200) {
        setUserObj(response)
        printUserObj()
        setToken(response.data.user.token)
        // saveToken()
        setIsLoggedIn(true)
        
      } else {
        throw new Error('An error has occurred');
      }
    } catch (error) {
      alert('An error has occurred');
    }
    console.log('login', token)
    
  }
  
    

    return (
      <View style={styles.login}>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={loginSchema}
          onSubmit={(values, actions) => {
            values = {...values};
            handleLogin(values)
            actions.resetForm();
          }}>
          {props => (
            <View>
              <TextInput
                style={styles.input}
                placeholder="Email"
                autoComplete="email"
                autoCorrect={false}
                autoCapitalize='none'
                onChangeText={props.handleChange('email')}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                autoComplete="password"
                autoCorrect={false}
                autoCapitalize='none'
                secureTextEntry={true}
                onChangeText={props.handleChange('password')}
              />
              <Button title="Login!" onPress={props.handleSubmit} />
            </View>
          )}
        </Formik>
      </View>
    );
  
};
export default Login;

const styles = StyleSheet.create({
  login: {
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
  btn: {
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});
