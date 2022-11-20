import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Closet from './Components/Closet';
import AddItem from './Components/AddItem';
import CameraRollView from './Components/CameraRoll';
import ItemForm from './Components/ItemForm';

const Stack = createStackNavigator();

const AddItemsNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Closet" component={Closet} />
      <Stack.Screen name="AddItem" component={AddItem} />
      <Stack.Screen name="CameraRoll" component={CameraRollView} />
      <Stack.Screen name="ItemForm" component={ItemForm} />
    </Stack.Navigator>
  );
};

export {AddItemsNavigator};
