//import liraries
import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './RootStackParams';


type authScreenProp = NativeStackScreenProps<RootStackParamList, 'Auth'>
// create a component
const AuthScreen = () => {
    const navigation = useNavigation<authScreenProp>();
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Auth Screen</Text>
      <Button title="Login" onPress={() => navigation.navigate('Main')} />
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
export default AuthScreen;
