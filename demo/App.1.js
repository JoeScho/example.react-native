import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import DetailsScreen from './details';

const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <Image
      source={require('./aww.jpg')}
      style={{ height: 200, width: 200 }}
    />
    <Button
      onPress={() => navigation.navigate('Details')}
      title="Go to details"
    />
  </View>
);

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: {
      headerTitle: 'Details',
      headerRight: <Button
        onPress={() => alert('HIII')}
        title="Say hi"
      />
    },
  },
});

export default RootNavigator;