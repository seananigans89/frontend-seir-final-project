// import React, {useState} from 'react';
// import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import Settings from './Settings';
// import Home from './Home';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import MyItems from './MyItems';
// import AddItem from './AddItem';
// import * as Icon from 'react-native-feather';
// import {NavigationContainer} from '@react-navigation/native';
// import TestScreen from '../screens/MyItemsScreen';
// import Test from './Test';
// import MyItemsScreen from '../screens/MyItemsScreen';

// // const Stack = createNativeStackNavigator();

// const Tab = createBottomTabNavigator();

// const TabBar = ({navigation}) => {
//   const [items, setItems] = useState([
//     {
//       id: 1,
//       brand: 'Sony',
//       model: 'A7iii',
//       serial_number: 'jkdsfdsl98',
//       quantity: 1,
//       owner: 2,
//     },
//     {
//       id: 2,
//       brand: 'Canon',
//       model: '5D4',
//       serial_number: 'sdfds',
//       quantity: 1,
//       owner: 2,
//     },
//     {
//       id: 3,
//       brand: 'Sony',
//       model: 'A7riv',
//       serial_number: 'fewrfew',
//       quantity: 2,
//       owner: 2,
//     },
//     {
//       id: 4,
//       brand: 'Sony',
//       model: 'A7siii',
//       serial_number: 'kuyuyk',
//       quantity: 1,
//       owner: 3,
//     },
//   ]);

//   const addItem = item => {
//     console.log(items);
//     item.key = item.id;
//     setItems(currentItems => {
//       return [item, ...currentItems];
//     });
//   };

//   return (
//     <Tab.Navigator
//       initialRouteName="Home"
//       shifting={true}
//       labeled={false}
//       activeColor="black"
//       screenOptions={{
//         tabBarShowLabel: false,
//         tabBarActiveTintColor: 'blue',
//         tabBarInactiveTintColor: 'black',
//       }}>
//       <Tab.Screen
//         name="Home"
//         component={Home}
//         options={{
//           tabBarIcon: ({focused, color, size}) => {
//             return <Icon.Home name={Icon} color={color} size={size} />;
//           },
//         }}
//       />
//       <Tab.Screen
//         name="MyItems"
//         options={{
//           tabBarIcon: ({focused, color, size}) => {
//             return <Icon.Grid name={Icon} color={color} size={size} />;
//           },
//         }}>
//         {props => <MyItems items={items} navigation={props.navigation} />}
//       </Tab.Screen>

//       <Tab.Screen
//         name="Add Item"
//         options={{
//           tabBarIcon: ({focused, color, size}) => {
//             return <Icon.PlusCircle name={Icon} color={color} size={size} />;
//           },
//         }}>
//         {props => (
//           <AddItem items={items} setItems={setItems} addItem={addItem} />
//         )}
//       </Tab.Screen>

//       <Tab.Screen
//         name="Settings"
//         component={Settings}
//         options={{
//           tabBarIcon: ({focused, color, size}) => {
//             return <Icon.Settings name={Icon} color={color} size={size} />;
//           },
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default TabBar;

// const styles = StyleSheet.create({});
