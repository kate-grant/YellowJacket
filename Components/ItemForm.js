/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {useCameraRoll} from '@react-native-camera-roll/camera-roll';
import {ScrollView} from 'react-native-gesture-handler';

export default function ItemForm({navigation, route}) {
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
      <TextInput placeholder="Article (ie. Jacket)" style={styles.inputStyle} />
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
});
