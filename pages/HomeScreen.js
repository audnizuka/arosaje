import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
 

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require('../images/plante.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Bienvenue sur Arosa-je</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.buttonText}>Se Connecter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.buttonText}>S'Inscrire</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MonJardinScreen')}>
          <Text style={styles.buttonText}>Accéder à Mon Jardin</Text>
        
        </TouchableOpacity>
      </View>
      
    </ImageBackground>
    
  );
  
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 34,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowRadius: 5,
    textShadowOffset: { width: 1, height: 1 },
    position: 'absolute',
    top: 80,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  button: {
    backgroundColor: '#00a65a',
    borderRadius: 5,
    padding: 10,
    width: '80%',
    marginBottom: 10,
    opacity: 0.55,
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold'
  },
});


export default HomeScreen;
