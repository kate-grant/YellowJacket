/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  NativeModules,
} from 'react-native';
import {useCameraRoll} from '@react-native-camera-roll/camera-roll';
import {ScrollView} from 'react-native-gesture-handler';
import db, {errorCB} from '../Database/db';

export default function ItemForm({navigation, route}) {
  const [articleType, setArticleType] = useState('');
  const [color, setColor] = useState('');

  const setData = () => {
    try {
      db.transaction(tx => {
        console.log('in set', articleType);
        tx.executeSql(
          'INSERT INTO Clothing (ArticleType, Colors, Img) VALUES (?, ?, ?)',
          [articleType, color, route.params.image],
          (tx, res) => {
            console.log('success');
            const length = res.rows.length;
            if (length > 0) {
              console.log('length', length);
              res.rows.forEach(row => {
                console.log(`inserted ${row.ID}`);
              });
            }
          },
        );
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
        backgroundColor: '#F1FFBB',
      }}>
      <Text>Add Item</Text>
      <Image
        style={{
          width: 300,
          height: 300,
        }}
        source={{uri: route.params.image}}
      />
      <TextInput
        placeholder="Article (ie. Jacket)"
        onChangeText={setArticleType}
        style={styles.inputStyle}
        value={articleType}
      />
      <TextInput
        placeholder="Color (ie. Yellow)"
        onChangeText={setColor}
        style={styles.inputStyle}
        value={color}
      />
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={async () => {
          setData();
          navigation.navigate('Closet');
        }}>
        <Text style={styles.btnText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    marginTop: 20,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: '#E9E8E0',
  },
  btnText: {
    color: '#F1FFBB',
    textAlign: 'center',
  },
  buttonStyle: {
    backgroundColor: '#D3BAF2',
    height: 40,
    width: 300,
    padding: 10,
    marginTop: 40,
    alignItems: 'center',
    borderRadius: 25,
    display: 'flex',
    justifyContent: 'center',
  },
});
