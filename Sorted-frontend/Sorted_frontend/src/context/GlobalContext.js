import React, {useState, useEffect, useRef, createContext} from 'react';
import * as SecureStore from 'expo-secure-store'


const Context = createContext();


const Provider = ({children}) => {
  const [items, setItems] = useState([]);
  const [kits, setKits] = useState([]);
  const [domain, setDomain] = useState('http://127.0.0.1:8000');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState();

  // const [authToken, setAuthToken] = useState()
  
  
 
    


      const globalContext = {
        items, 
        setItems,
        kits,
        setKits,
        domain,
        isLoggedIn,
        setIsLoggedIn,
        userObj,
        setUserObj,
       
      };
      
      return <Context.Provider value={globalContext}>{children}</Context.Provider>;
    };
    
    export {Context, Provider};

