/*import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Logo et nom de l'application }
      <View style={styles.header}>
        <Image source={require('./assets/logoapp.png')} style={styles.logo} />
        <Text style={styles.appName}>Arosaj</Text>
      </View>

      {/* Menu de navigation }
      <View style={styles.menu}>
        <TouchableOpacity onPress={() => navigation.navigate('MonJardin')} style={styles.navButton}>
          <Text style={styles.navButtonText}>Mon Jardin</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ConseilsBotaniques')} style={styles.navButton}>
          <Text style={styles.navButtonText}>Conseils Botaniques</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profil')} style={styles.navButton}>
          <Text style={styles.navButtonText}>Profil</Text>
        </TouchableOpacity>
      </View>

      {/* Bouton pour ajouter une nouvelle plante }
      <TouchableOpacity onPress={() => navigation.navigate('AjouterPlante')} style={styles.addButton}>
        <Text style={styles.addButtonText}>Ajouter une Plante</Text>
      </TouchableOpacity>

      {/* Miniatures des plantes récemment ajoutées ou gardées }
      {/* Insérez votre code pour afficher les miniatures ici /}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E8B57', // Couleur verte foncée
  },
  menu: {
    marginBottom: 20,
  },
  navButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#D3D3D3', // Couleur gris clair
    borderRadius: 10,
    marginBottom: 10,
  },
  navButtonText: {
    fontSize: 18,
    color: '#2E8B57', // Couleur verte foncée
  },
  addButton: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: '#32CD32', // Couleur vert lime
    borderRadius: 20,
  },
  addButtonText: {
    fontSize: 20,
    color: '#FFFFFF', // Couleur blanche
  },
});

export default HomeScreen;*/
/*import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const AccueilScreen = ({ navigation }) => {
  const handleAddPlant = () => {
    // Navigation vers l'écran d'ajout de plante
    navigation.navigate('AddPlant');
  };

  const handleNavigateTo = (screenName) => {
    // Fonction pour naviguer vers différentes parties de l'application
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/logoapp.png')} style={styles.logo} />
        <Text style={styles.appName}>Nom de l'Application</Text>
      </View>
      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigateTo('MyGarden')}>
          <Text style={styles.menuText}>Mon Jardin</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigateTo('BotanicalTips')}>
          <Text style={styles.menuText}>Conseils Botaniques</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigateTo('Profile')}>
          <Text style={styles.menuText}>Profil</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.addButton} onPress={handleAddPlant}>
        <Text style={styles.addButtonText}>Ajouter une plante</Text>
      </TouchableOpacity>
      <View style={styles.plantThumbnails}>
        {/* Miniatures des plantes récemment ajoutées ou gardées */
        import {checkAuth} from "../lib/utilFunctions";

{/* Vous pouvez remplacer cette partie par vos propres composants */}
      /*  <Text style={styles.thumbnailText}>Miniatures des plantes</Text>
        <Text style={styles.thumbnailText}>récemment ajoutées ou gardées</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  menu: {
    marginBottom: 20,
  },
  menuItem: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderRadius: 5,
  },
  menuText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  addButton: {
    backgroundColor: '#00a65a',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  plantThumbnails: {
    alignItems: 'center',
  },
  thumbnailText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
});

export default AccueilScreen;

*/
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
//import PlantCard from '../components/PlantCard'; // Supposons que vous avez un composant PlantCard pour afficher les détails d'une plante
//import { plantsData } from '../data/plantsData'; // Supposons que vous avez des données de plantes à afficher

const DashboardScreen = ({ navigation }) => {
  checkAuth({ navigation });
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
