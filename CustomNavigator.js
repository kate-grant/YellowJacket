import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Closet from './Components/Closet';
import AddItem from './Components/AddItem';

const Stack = createStackNavigator();

const AddItemsNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Closet" component={Closet} />
      <Stack.Screen name="AddItem" component={AddItem} />
    </Stack.Navigator>
  );
};

export {AddItemsNavigator};
