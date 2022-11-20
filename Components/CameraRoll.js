/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {useCameraRoll} from '@react-native-camera-roll/camera-roll';
import {FlatList, ScrollView} from 'react-native-gesture-handler';

export default function CameraRoll({navigation}) {
  const [photos, getPhotos, save] = useCameraRoll();
  useEffect(() => {
    getPhotos({first: 21, assetType: 'Photos'});
  });
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F1FFBB',
      }}>
      <ScrollView>
        {photos.edges.map((photo, index) => {
          return (
            <Image
              key={index}
              style={{
                width: 300,
                height: 300,
              }}
              source={{uri: photo.node.image.uri}}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}
