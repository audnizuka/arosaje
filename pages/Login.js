import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Linking } from 'react-native';
import bcrypt from "react-native-bcrypt";
import isaac from "isaac";

bcrypt.setRandomFallback((len) => {
  const buf = new Uint8Array(len);
  return buf.map(() => Math.floor(isaac.random() * 256));
});

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const hashedPassword = bcrypt.hashSync(password, 10);
    console.log(email, password, hashedPassword);
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
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          secureTextEntry={true}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgotPassword}>Mot de passe oublié ?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={handleLogin}>Se connecter</Text>
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


