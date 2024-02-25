/*import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Picker } from 'react-native';

const SignUp= ({ navigation }) => {   const [pseudo, setPseudo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isBotanist, setIsBotanist] = useState(false);
  const [gender, setGender] = useState('Non précisé');

  const handleSignUp = () => {
    // Logique pour traiter l'inscription de l'utilisateur
    console.log('Pseudo:', pseudo);
    console.log('Email:', email);
    console.log('Mot de passe:', password);
    console.log('Nouveau mot de passe:', newPassword);
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
        value={email}
        onChangeText={setEmail}
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
        placeholder="Nouveau mot de passe"
        secureTextEntry={true}
        value={newPassword}
        onChangeText={setNewPassword}
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
    
      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpButtonText}>S'inscrire</Text>
      </TouchableOpacity>
    </View>
  );
};

  
const styles = StyleSheet.create({
  cbackground: {
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
  signUpButton: {
    backgroundColor: '#00a65a',
    borderRadius: 5,
    padding: 10,
    width: '80%',
    marginBottom: 10,
    opacity: 0.55,
  },
  signUpButtonText: {color: '#ffffff',
  textAlign: 'center',
  fontWeight: 'bold'
  
  },
});
/*
export default SignUp;
const [email, setEmail] = useState('');
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');
const [gender, setGender] = useState(''); // 'male', 'female', or 'other'
const [isBotanist, setIsBotanist] = useState(false);

const handleSignup = () => {
  // Implement your signup logic here
  // Validate input fields, check passwords, etc.
  // You can use a state management library like Redux or MobX for better organization.
  console.log('Signup button pressed!');
};

return (
  <View style={styles.container}>
    <Text style={styles.title}>Inscription</Text>
    <TextInput
      placeholder="Adresse e-mail"
      onChangeText={(text) => setEmail(text)}
      value={email}
      style={styles.input}
    />
    <TextInput
      placeholder="Pseudo"
      onChangeText={(text) => setUsername(text)}
      value={username}
      style={styles.input}
    />
    <TextInput
      placeholder="Nouveau mot de passe"
      onChangeText={(text) => setPassword(text)}
      value={password}
      secureTextEntry
      style={styles.input}
    />
    <TextInput
      placeholder="Confirmer le nouveau mot de passe"
      onChangeText={(text) => setConfirmPassword(text)}
      value={confirmPassword}
      secureTextEntry
      style={styles.input}
    />
    <Picker
      selectedValue={gender}
      onValueChange={(itemValue) => setGender(itemValue)}
      style={styles.picker}
    >
      <Picker.Item label="Genre (non précisé)" value="" />
      <Picker.Item label="Homme" value="male" />
      <Picker.Item label="Femme" value="female" />
      <Picker.Item label="Autre" value="other" />
    </Picker>
    <View style={styles.botanistCheckbox}>
      <Text>Êtes-vous botaniste ?</Text>
      <Switch
        value={isBotanist}
        onValueChange={(value) => setIsBotanist(value)}
      />
    </View>
    <Button title="S'inscrire" onPress={handleSignup} />
  </View>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  padding: 16,
},
title: {
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 16,
},
input: {
  height: 40,
  borderColor: 'gray',
  borderWidth: 1,
  marginBottom: 12,
  paddingHorizontal: 8,
},
picker: {
  marginBottom: 12,
},
botanistCheckbox: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 12,
},
});
/*
export default SignUp*
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Picker, StyleSheet } from 'react-native';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gender, setGender] = useState(''); // 'male', 'female', or 'other'
  const [isBotanist, setIsBotanist] = useState(false);

  const handleSignup = () => {
    // Implement your signup logic here
    // Validate input fields, check passwords, etc.
    // You can use a state management library like Redux or MobX for better organization.
    console.log('Signup button pressed!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inscription</Text>
      <TextInput
        placeholder="Adresse e-mail"
        onChangeText={(text) => setEmail(text)}
        value={email}
        style={styles.input}
      />
      <TextInput
        placeholder="Pseudo"
        onChangeText={(text) => setUsername(text)}
        value={username}
        style={styles.input}
      />
      <TextInput
        placeholder="Nouveau mot de passe"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
        style={styles.input}
      />
      <TextInput
        placeholder="Confirmer le nouveau mot de passe"
        onChangeText={(text) => setConfirmPassword(text)}
        value={confirmPassword}
        secureTextEntry
        style={styles.input}
      />
      <Picker
        selectedValue={gender}
        onValueChange={(itemValue) => setGender(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Genre (non précisé)" value="" />
        <Picker.Item label="Homme" value="male" />
        <Picker.Item label="Femme" value="female" />
        <Picker.Item label="Autre" value="other" />
      </Picker>
      <View style={styles.botanistCheckbox}>
        <Text>Êtes-vous botaniste ?</Text>
        <Switch
          value={isBotanist}
          onValueChange={(value) => setIsBotanist(value)}
        />
      </View>
      <Button title="S'inscrire" onPress={handleSignup} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  picker: {
    marginBottom: 12,
  },
  botanistCheckbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
});

export default SignUp;

*//*
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Switch } from 'react-native';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gender, setGender] = useState('');
  const [isBotanist, setIsBotanist] = useState(false);

  const handleGenderChange = (value) => {
    setGender(value ? 'female' : 'male');
  };

  const handleBotanistChange = (value) => {
    setIsBotanist(value);
  };

  const handleSubmit = () => {
    // handle form submission here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>S'inscrire</Text>
      <TextInput
        style={styles.input}
        placeholder="adresse mail"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="pseudo"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="nouveau mot de passe"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="confirmer le mot de passe"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <Text style={styles.label}>Genre:</Text>
      <Switch
        style={styles.switch}
        value={gender === 'female'}
        onValueChange={handleGenderChange}
      />
      <Text style={styles.text}>Female</Text>
      <Switch
        style={styles.switch}
        value={gender === 'male'}
        onValueChange={handleGenderChange}
      />
      <Text style={styles.text}>Male</Text>
      <Text style={styles.label}>êtes-vous botaniste ?</Text>
      <Switch
        style={styles.switch}
        value={isBotanist}
        onValueChange={handleBotanistChange}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>S'inscrire</Text>
      </TouchableOpacity>
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
    backgroundColor: '#fff',
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
  label: {
    fontSize: 16,
    marginBottom: 6,
  },
  switch: {
    transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }],
  },
  text: {
    fontSize: 16,
    marginBottom: 12,
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

export default SignUp;*/

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Picker, Switch } from 'react-native';

const SignUp = ({ navigation }) => {
  const [pseudo, setPseudo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isBotanist, setIsBotanist] = useState(false); // Nouvel état pour indiquer si l'utilisateur est botaniste
  const [gender, setGender] = useState('Non précisé');

  const handleSignUp = () => {
    // Logique pour traiter l'inscription de l'utilisateur
    console.log('Pseudo:', pseudo);
    console.log('Email:', email);
    console.log('Mot de passe:', password);
    console.log('Nouveau mot de passe:', newPassword);
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
        value={email}
        onChangeText={setEmail}
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
        placeholder="Nouveau mot de passe"
        secureTextEntry={true}
        value={newPassword}
        onChangeText={setNewPassword}
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
