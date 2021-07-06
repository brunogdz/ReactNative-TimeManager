import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { UserIdentification } from './src/pages/UserIdentification';
import Routes from './src/routes/index';
import AppLoading from 'expo-app-loading';
import { firebaseConfig } from './config';
// firebase.initializeApp(firebaseConfig)
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost';
// import { firebase } from '@react-native-firebase/auth';

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  if (!fontsLoaded)
    return <AppLoading />

  return (
    <Routes/>
  );
}
