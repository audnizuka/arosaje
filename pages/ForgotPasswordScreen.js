import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleSendResetEmail = () => {
    // Logique pour envoyer un e-mail de réinitialisation du mot de passe
    console.log("E-mail de réinitialisation envoyé à :", email);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mot de passe oublié</Text>
      <TextInput
        style={styles.input}
        placeholder="Adresse e-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity style={styles.sendResetEmailButton} onPress={handleSendResetEmail}>
        <Text style={styles.sendResetEmailButtonText}>Envoyer l'e-mail de réinitialisation</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF9DC',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 15,
    borderRadius: 10,
    width: '80%',
  },
  sendResetEmailButton: {backgroundColor: '#00a65a',
  borderRadius: 5,
  padding: 10,
  width: '80%',
  marginBottom: 10,
  opacity: 0.55,
  },
  sendResetEmailButtonText: {
    color: '#ffffff',
  textAlign: 'center',
  fontWeight: 'bold',
  },
});

export default ForgotPasswordScreen;
