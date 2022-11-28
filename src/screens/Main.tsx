//import liraries
import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { RootStackParamList } from './RootStackParams';
import HomeScreen from './Home';
import DetailsScreen from './Details';
import {MainBottomTabParamList} from './MainBottomTabParams';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


const BottomTab = createBottomTabNavigator<MainBottomTabParamList>();
// create a component
const MainScreen = () => {
    // const navigation = useNavigation<mainScreenProp>();
    return (
        <BottomTab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'alert-circle'
                : 'alert-circle-outline';
            } else if (route.name === 'Details') {
              iconName = focused ? 'apps' : 'apps-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
        >
      <BottomTab.Screen name="Home" component={HomeScreen} options={{
          title: 'Home',
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#207398',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            
          },
          
          
        }}/>
      <BottomTab.Screen name="Details" component={DetailsScreen} 
      options={{
        title: 'Details',
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: '#1C8D73',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}/>
    </BottomTab.Navigator>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default MainScreen;
