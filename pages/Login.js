import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Linking } from 'react-native';
/*
const LoginScreen = ({ navigation }) => {
  const handleGoogleLogin = () => {
    // Insérer ici le lien de redirection vers la page de connexion avec Google
    Linking.openURL('https://example.com/google-login');
  };

  return (
    
    <View style={styles.container}>
      <View style={styles.formContainer}>
      
        <Text style={styles.title}>Connexion</Text>
        <TextInput
          style={styles.input}
          placeholder="Adresse e-mail"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgotPassword}>Mot de passe oublié ?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Se connecter</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signUpLink}>Pas encore inscrit ? S'inscrire</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.googleContainer} onPress={handleGoogleLogin}>
        <Image
          source={require('../assets/google-logo.png')} // Assurez-vous d'avoir ajouté l'emoji Google dans le dossier assets
          style={styles.googleLogo}
        />
        <Text style={styles.googleText}>Connectez-vous avec Google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 34,
    color: 'black',
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
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  forgotPassword: {
    fontSize: 14,
    color: 'gray',
    marginTop: 10,
  },
  loginButton: {
  backgroundColor: '#00a65a',
  borderRadius: 5,
  padding: 10,
  width: '80%',
  marginBottom: 10,
  opacity: 0.55,
  },

  loginButtonText: {
      color: '#ffffff',
      textAlign: 'center',
      fontWeight: 'bold'
    },
  signUpLink: { 
    fontSize: 14,
    color: 'gray',
    marginTop: 10,
  },
  googleContainer: {
    width: '80%',
    height: 40,
   
    alignItems: 'center',
  },
  /*const styles = StyleSheet.create({
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
      top: 10,
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
    },<Image source={require('../assets/logoapp.png')} style={styles.logo} />




*//*
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    
    backgroundColor: '#00a65a',
    borderRadius: 5,
    padding: 10,
    width: '80%',
    marginBottom: 10,
    opacity: 0.55,
  },
  buttonText: {color: '#ffffff',
  textAlign: 'center',
  fontWeight: 'bold'
  },
});
export default LoginScreen;*/
const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
         
        <Text style={styles.title}>Connexion</Text>
        <TextInput
          style={styles.input}
          placeholder="Adresse e-mail"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgotPassword}>Mot de passe oublié ?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Se connecter</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signUpLink}>Pas encore inscrit ? S'inscrire</Text>
        </TouchableOpacity>
      </View>
      
    </View>
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
    backgroundColor: '#fff', // Changer la couleur de fond au besoin
  },
  formContainer: {
    width: '80%',
    alignItems: 'center',
  },
  logo: {
    width: 150, // Ajuster la taille du logo au besoin
    height: 150, // Ajuster la taille du logo au besoin
    marginBottom: 20,
  },
  title: {
    fontSize: 34,
    color: '#000', // Couleur du texte
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc', // Couleur de la bordure
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  forgotPassword: {
    textAlign: 'right',
    marginBottom: 10,
    color: '#007bff', // Couleur du lien "Mot de passe oublié ?"
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
  fontWeight: 'bold',
  },
  signUpLink: {
    color: '#007bff', // Couleur du lien "Pas encore inscrit ? S'inscrire"
    textAlign: 'center',
    marginTop: 10,
  },
});
export default LoginScreen; 


