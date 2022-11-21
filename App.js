/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {Text, Image, View, TouchableOpacity, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AddItemsNavigator} from './CustomNavigator';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
MaterialCommunityIcons.loadFont();
import SQLite from 'react-native-sqlite-storage';
import db, {errorCB} from './Database/db';
import {ScrollView} from 'react-native-gesture-handler';

// COMPONENTS
function Home() {
  console.log('Home');
  const [items = [], setItems] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        await getData();
        console.log('in fetch', items);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const getData = () => {
    console.log('get');
    try {
      db.transaction(tx => {
        console.log('in get');
        tx.executeSql('SELECT * FROM Clothing ', [], (tx, res) => {
          const temp = [];
          for (let i = 0; i < res.rows.length; ++i) {
            temp.push(res.rows.item(i));
          }
          setItems(temp);
        });
      }, errorCB);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
      }}>
      <Text>Home!</Text>
    </View>
  );
}

function Search() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Search!</Text>
    </View>
  );
}
function Profile() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile!</Text>
    </View>
  );
}

// NAVIGATION
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: '#F1FFBB',
          tabBarInactiveTintColor: '#95978E',
          tabBarStyle: {backgroundColor: '#E9E8E0'},
          tabBarShowLabel: false,
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Closet-Outer"
          component={AddItemsNavigator}
          options={{
            tabBarLabel: 'My Closet',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="tshirt-crew"
                color={color}
                size={size}
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="magnify"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// APP
export default function App() {
  useEffect(() => {
    createTable();
  }, []);

  const createTable = () => {
    try {
      db.transaction(tx => {
        console.log('in create');
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS Clothing (ID INTEGER PRIMARY KEY AUTOINCREMENT, ArticleType TEXT, Colors TEXT, Img BLOB)',
          [],
          (tx, res) => {
            const length = res.rows.length;
            console.log('before if');
            if (length > 0) {
              console.log('created has length');
              return res.rows;
            }
          },
        );
      }, errorCB);
    } catch (error) {
      console.log(error);
    }
  };

  return <MyTabs />;
}

// STYLE
const styles = StyleSheet.create({
  btnText: {
    color: '#F1FFBB',
    textAlign: 'center',
  },
  buttonStyle: {
    backgroundColor: '#D3BAF2',
    height: 40,
    padding: 10,
    margin: 5,
    alignItems: 'center',
    borderRadius: 25,
    display: 'flex',
    justifyContent: 'center',
  },
});
