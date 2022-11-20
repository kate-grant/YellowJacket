/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import {ScrollView} from 'react-native-gesture-handler';

const fetchPhotos = async () => {
  try {
    const data = await CameraRoll.getPhotos({first: 21, assetType: 'Photos'});
    return data.edges;
  } catch (error) {
    console.log(error);
  }
};

export default function CameraRollView({navigation}) {
  const [images, setImages] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const photos = await fetchPhotos();
      setImages(photos);
    }
    fetchData();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F1FFBB',
      }}>
      <ScrollView>
        {images.map((photo, index) => {
          return (
            <TouchableHighlight
              key={index}
              onPress={() =>
                navigation.navigate('ItemForm', {image: photo.node.image.uri})
              }>
              <Image
                style={{
                  width: 300,
                  height: 300,
                }}
                source={{uri: photo.node.image.uri}}
              />
            </TouchableHighlight>
          );
        })}
      </ScrollView>
    </View>
  );
}

// CameraRollView.defaultProps = {images: []};
