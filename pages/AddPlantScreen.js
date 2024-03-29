import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const AjouterPlanteScreen = ({ navigation }) => {
  // États pour stocker les détails de la nouvelle plante
  const [nomPlante, setNomPlante] = useState('');
  const [typePlante, setTypePlante] = useState('');
  const [besoinsEau, setBesoinsEau] = useState('');

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = () => {
    // Enregistrez la plante dans votre base de données ou votre état global ici
    // Ensuite, naviguez vers l'écran "Mon Jardin"
    navigation.navigate('Mon Jardin');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ajouter une Plante</Text>
      <TextInput
        style={styles.input}
        placeholder="Nom de la plante"
        value={nomPlante}
        onChangeText={setNomPlante}
      />
      <TextInput
        style={styles.input}
        placeholder="Type de plante"
        value={typePlante}
        onChangeText={setTypePlante}
      />
      <TextInput
        style={styles.input}
        placeholder="Besoins en eau"
        value={besoinsEau}
        onChangeText={setBesoinsEau}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleSubmit}>
        <Text style={styles.addButtonText}>Ajouter Plante</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#41B619',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AjouterPlanteScreen;
