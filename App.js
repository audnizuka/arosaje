import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Cloudinary} from "@cloudinary/url-gen";
import HomeScreen from './pages/HomeScreen.js';
import AddPlantScreen from './pages/AddPlantScreen.js';
import LoginScreen from './pages/Login.js';
import SignUpScreen from './pages/SignUpScreen.js';
import ForgotPasswordScreen from './pages/ForgotPasswordScreen.js';
import MonJardinScreen from './pages/MonJardinScreen.js';
import GallerieScreen from './pages/GalleriePage.js';
import GalleriePage from './pages/GalleriePage.js';
import Profil from "./pages/Profil";
import * as SecureStore from "expo-secure-store";
import {checkAuth, tokenIsValid} from "./lib/utilFunctions";

const Stack = createStackNavigator();

const App = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{title: 'log in' } }/>
        <Stack.Screen name="Home" component={HomeScreen} options= {{headerShown: false}} />
        <Stack.Screen name="AddPlant" component={AddPlantScreen} options={{ title: 'Ajouter une Plante' }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{title: 'Inscription'}}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{title : 'Mot de passe oublié'}}/>
        <Stack.Screen name="MonJardinScreen" component= {MonJardinScreen} options= {{title: 'Mon jardin'}}/>
        <Stack.Screen name="GalleriePage" component= {GalleriePage} options= {{title: 'Gallerie'}}/>
        <Stack.Screen name="Map" component= {Map} options= {{title: 'Carte des Plantes'}}/>
        <Stack.Screen name="Profil" component= {Profil} options= {{title: 'Profil'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
  
};
export default App;
