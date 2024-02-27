import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Picker, Switch } from 'react-native';

const SignUp = ({ navigation }) => {
  const [pseudo, setPseudo] = useState('');
  const [mail, setEmail] = useState('');
  const [ville, setVille] = useState('');
  const [code_postal, setCode_postal] = useState('');
  const [rue, setRue] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isBotanist, setIsBotanist] = useState(false); // Nouvel état pour indiquer si l'utilisateur est botaniste
  const [gender, setGender] = useState('Non précisé');

  const handleSignUp = () => {
    // Logique pour traiter l'inscription de l'utilisateur
    console.log('Pseudo:', pseudo);
    console.log('Email:', mail);
    console.log('Ville:', ville);
    console.log('Code Postal:', code_postal);
    console.log('Adresse:', rue);
    console.log('Mot de passe:', password);
    console.log('Confirmer le nouveau mot de passe:', confirmPassword);
    console.log('Est botaniste:', isBotanist);
    console.log('Genre:', gender);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inscription</Text>
      <TextInput
        style={styles.input}
        placeholder="Pseudo"
        value={pseudo}
        onChangeText={setPseudo}
      />
      <TextInput
        style={styles.input}
        placeholder="Adresse e-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        value={mail}
        onChangeText={setEmail}
      />
            <TextInput
        style={styles.input}
        placeholder="Ville"
        autoCapitalize="none"
        value={ville}
        onChangeText={setVille}
      />
            <TextInput
        style={styles.input}
        placeholder="Code Postal"
        autoCapitalize="none"
        value={code_postal}
        onChangeText={setCode_postal}
      />
            <TextInput
        style={styles.input}
        placeholder="Adresse"
        autoCapitalize="none"
        value={rue}
        onChangeText={setRue}
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmer le nouveau mot de passe"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <View style={styles.pickerContainer}>
        <Text style={styles.pickerLabel}>Genre:</Text>
        <Picker
          style={styles.picker}
          selectedValue={gender}
          onValueChange={(itemValue, itemIndex) => setGender(itemValue)}>
          <Picker.Item label="Homme" value="Homme" />
          <Picker.Item label="Femme" value="Femme" />
          <Picker.Item label="Non précisé" value="Non précisé" />
        </Picker>
      </View>
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Êtes-vous botaniste ?</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isBotanist ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setIsBotanist(!isBotanist)}
          value={isBotanist}
        />
      </View>
      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpButtonText}>S'inscrire</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 34,
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  pickerLabel: {
    marginRight: 10,
  },
  picker: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  switchLabel: {
    marginRight: 10,
  },
  signUpButton: {
    backgroundColor: '#00a65a',
    borderRadius: 5,
    padding: 10,
    width: '80%',
    marginBottom: 10,
    opacity: 0.55,
  },
  signUpButtonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default SignUp;
