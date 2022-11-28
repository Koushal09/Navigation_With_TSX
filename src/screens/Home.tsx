//import liraries
import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './RootStackParams';
import {CompositeNavigationProp} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {MainBottomTabParamList} from './MainBottomTabParams'

type HomeScreenProp = CompositeNavigationProp<
NativeStackScreenProps<RootStackParamList,'Main'>,
BottomTabNavigationProp<MainBottomTabParamList, 'Home'>
>
// create a component
const HomeScreen = () => {
    const navigation = useNavigation<HomeScreenProp>();
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <Button title="Login" onPress={() => navigation.navigate('Auth')} />
      </View>
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
export default HomeScreen;
