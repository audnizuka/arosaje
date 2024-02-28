import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
//import PlantCard from '../components/PlantCard'; // Supposons que vous avez un composant PlantCard pour afficher les détails d'une plante
//import { plantsData } from '../data/plantsData'; // Supposons que vous avez des données de plantes à afficher

const DashboardScreen = ({ navigation }) => {
  const [plants, setPlants] = useState(plantsData); // Supposons que plantsData est un tableau de plantes

  const renderPlantItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('PlantDetails', { plant: item })}
    >
      <PlantCard plant={item} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Plantes à Faire Garder</Text>

      {/* Liste des plantes */}
      <FlatList
        data={plants}
        renderItem={renderPlantItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
      />

      {/* Boutons de navigation */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('AddPlant')}
        >
          <Text style={styles.buttonText}>Ajouter une Plante</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('BotanistList')}
        >
          <Text style={styles.buttonText}>Liste des Botanistes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Chat')}
        >
          <Text style={styles.buttonText}>Chat</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={styles.buttonText}>Profil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  list: {
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#008080',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '48%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default DashboardScreen;
