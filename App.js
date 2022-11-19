import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
MaterialCommunityIcons.loadFont();

function Home() {
  return(
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  )
}
function Closet() {
  return(
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>My Closet!</Text>
    </View>
  )
}
function Search() {
  return(
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Search!</Text>
    </View>
  )
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
