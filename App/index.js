import { StatusBar } from 'expo-status-bar';
import React from 'react';
import NavigationContainer from './routes/index.js';
import { StyleSheet, Text, View } from 'react-native';

export default function App(props) {
  return (
     <>
     <NavigationContainer {...props}/>
      <StatusBar style="auto" />
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
