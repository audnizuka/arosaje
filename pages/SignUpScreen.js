import React, {useEffect, useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import {Picker} from "@react-native-picker/picker";
import {createUser, fetchGenders} from "../lib/fetch/user";
import {capitalize} from "../lib/utilFunctions";

const SignUp = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [pseudo, setPseudo] = useState('');
  const [mail, setEmail] = useState('');
  const [ville, setVille] = useState('');
  const [code_postal, setCode_postal] = useState('');
  const [rue, setRue] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isBotanist, setIsBotanist] = useState(false); // Nouvel état pour indiquer si l'utilisateur est botaniste
  const [gender, setGender] = useState(1);
  const [genders, setGenders] = useState([]);

  const getGenders = async () => {
    try {
      const data = await fetchGenders();
      setGenders(data);
    } catch (e) {
      console.log(e)
    } finally {
        setLoading(false);
    }
  };

  const handleSignUp = async () => {
    const response= await createUser(pseudo, mail, password, rue, ville, code_postal, gender, isBotanist)
    if (response.status !== 200) {
      const data = await response.json();
      alert(data.message)
      return;
    }
    navigation.navigate('LoginScreen')
  };

  useEffect(() => {
    getGenders();
  }, []);

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
          placeholder="Adresse"
          autoCapitalize="none"
          value={rue}
          onChangeText={setRue}
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
      {isLoading ? (
        <Text>Chargement des genres...</Text>
      ) : (
            <View style={styles.pickerContainer}>
              <Text style={styles.pickerLabel}>Genre:</Text>
              <Picker
                style={styles.picker}
                selectedValue={gender}
                onValueChange={(itemValue, itemIndex) => setGender(itemValue)}>
                {genders.map((gender, index) => (
                    <Picker.Item key={index} label={capitalize(gender.sexe)} value={gender.id} />
                ))}
              </Picker>
            </View>
      )}
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
    flex: 0.35,
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
