import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabNavigator from './Navigation/TabNavigator';


export default function App() {

  return (
    <NavigationContainer>
       
       <TabNavigator />
       
    </NavigationContainer>
  );
}


