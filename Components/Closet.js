/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import db, {errorCB} from '../Database/db';

export default function Closet({navigation, route}) {
  const [items = [], setItems] = useState([]);
  const [colors, setColors] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        await getData();
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
            const item = res.rows.item(i);
            if (colors.filter(color => color === item.Colors).length < 1) {
              setColors([...colors, item.Colors]);
              console.log(colors);
            }
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
      <Text
        style={{
          fontSize: 30,
          margin: 20,
        }}>
        My Closet!
      </Text>
      {items.length > 0 ? (
        <ScrollView style={{flexDirection: 'column'}}>
          <Text
            style={{
              fontSize: 18,
              margin: 20,
            }}>
            My Colors
          </Text>
          <ScrollView horizontal={true} style={{flex: 1}}>
            {colors.map(color => {
              console.log('ccc', color);
              const c = color.toLowerCase();
              return (
                <View
                  style={{
                    height: 80,
                    width: 80,
                    margin: 10,
                    borderRadius: 100 / 2,
                    backgroundColor: c,
                  }}
                />
              );
            })}
          </ScrollView>
          <Text
            style={{
              fontSize: 18,
              margin: 20,
            }}>
            My Clothing
          </Text>
          <ScrollView horizontal={true} style={{flex: 1}}>
            {items.map(item => {
              return (
                <Image
                  key={item.ID}
                  style={{
                    width: 120,
                    height: 120,
                    margin: 10,
                  }}
                  source={{uri: item.Img}}
                />
              );
            })}
          </ScrollView>
        </ScrollView>
      ) : (
        <Text>Closet is empty.</Text>
      )}
      <TouchableOpacity
        onPress={() => navigation.navigate('Closet-Outer', {screen: 'AddItem'})}
        style={styles.buttonStyle}>
        <Text style={styles.btnText}>Add Item</Text>
      </TouchableOpacity>
    </View>
  );
}

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
