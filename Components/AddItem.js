/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {useCameraRoll} from '@react-native-camera-roll/camera-roll';
import {ScrollView} from 'react-native-gesture-handler';

export default function AddItem({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F1FFBB',
      }}>
      <TouchableOpacity
        onPress={() => navigation.navigate('AddItem')}
        style={styles.buttonStyle}>
        <Text style={styles.btnText}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Closet-Outer', {screen: 'CameraRoll'})
        }
        style={styles.buttonStyle}>
        <Text style={styles.btnText}>Upload from Gallery</Text>
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
    width: 160,
    padding: 10,
    margin: 5,
    alignItems: 'center',
    borderRadius: 25,
    display: 'flex',
    justifyContent: 'center',
  },
});
