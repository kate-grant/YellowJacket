/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

export default function Closet({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
      }}>
      <Text>My Closet!</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('AddItem')}
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
