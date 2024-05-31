// TabNavigator.js
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Foundation, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Home from '../screens/Home';
import Finance from '../screens/Finance';
import Transactions from '../screens/Transactions';
import Account from '../screens/Account';


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
           return <MaterialCommunityIcons name={focused ? 'home' : 'home-outline'} size={size} color={color} />;

          } else if (route.name === 'Finance') {
            return <Foundation name={focused ? "graph-pie" : "graph-pie"} size={size} color={color} />;  

          } else if (route.name === 'Transactions') {
            return <MaterialIcons name={focused ? "insert-chart-outlined" : "insert-chart-outlined"} size={size} color={color} />
            
          } else if (route.name === 'Account') {
            return <Ionicons name={focused ? "person" : 'person'} size={size} color={color} />
            
          }

        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#C1B9F9',
        tabBarStyle: {
            backgroundColor: '#2C14DD',
            border: 'none' 
          },
          headerShown: false,
      })}
    >
    <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Finance" component={Finance} />
      <Tab.Screen name="Transactions" component={Transactions} />
      <Tab.Screen name='Account' component={Account} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
