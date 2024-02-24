import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './pages/HomeScreen.js';
import AddPlantScreen from './pages/AddPlantScreen.js';
import LoginScreen from './pages/Login.js';
import SignUpScreen from './pages/SignUpScreen.js';
import ForgotPasswordScreen from './pages/ForgotPasswordScreen.js';
import MonJardinScreen from './pages/MonJardinScreen.js';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options= {{headerShown: false}} />
        <Stack.Screen name="AddPlant" component={AddPlantScreen} options={{ title: 'Ajouter une Plante' }} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{title: 'log in' } }/>
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{title: 'Inscription'}}/> 
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{title : 'Mot de passe oublié'}}/>
        <Stack.Screen name="MonJardinScreen" component= {MonJardinScreen} options= {{title: 'Mon jardin'}}/>
       </Stack.Navigator>
    </NavigationContainer>
  );
  
};
export default App;
