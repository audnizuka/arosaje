/*import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';



const MonJardinScreen = ({ navigation }) => {
  // Supposons que vous avez une liste de plantes dans cet état
  const [plantes, setPlantes] = React.useState([]);

  // Fonction pour naviguer vers l'écran de détails de la plante
  const navigateToPlantDetails = (plante) => {
    navigation.navigate('Détails de la Plante', { plante });
  };

  // Fonction pour naviguer vers l'écran d'ajout de plante
  const navigateToAddPlant = () => {
    navigation.navigate('Ajouter une Plante');
  };

  // Fonction pour rendre chaque élément de la liste
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.planteItem}
      onPress={() => navigateToPlantDetails(item)}>
      <Text>{item.nom}</Text>
      {/* Vous pouvez ajouter plus d'informations sur la plante ici }
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mon Jardin</Text>
      <FlatList
        data={plantes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.planteList}
      />
      <TouchableOpacity style={styles.addButton} onPress={navigateToAddPlant}>
        <Text style={styles.addButtonText}>Ajouter une Plante</Text>
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
  planteList: {
    flexGrow: 1,
  },
  planteItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  addButton: {
    backgroundColor: '#41B619',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MonJardinScreen;
*/

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import CloudinaryUploadWidget from "./CloudinaryUploadWidget";
import { Cloudinary } from "@cloudinary/url-gen";

const AddPlantScreen = ({ navigation }) => {
  const [plantName, setPlantName] = useState('');
  const [plantType, setPlantType] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [publicId, setPublicId] = useState(''); 


  const [cloudName] = useState("dybmmr8ah");
  const [uploadPreset] = useState("arosaje");


  const [uwConfig] = useState({
    cloudName,
    uploadPreset,
    folder: "arosaje",
  });

  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName
    }
  });

  const myImage = cld.image(publicId);// État pour stocker l'ID public de l'image téléchargée

  const handleAddPlant = () => {
    // Logique pour ajouter une plante
    console.log('Nom de la plante:', plantName);
    console.log('Type de plante:', plantType);
    console.log('Localisation:', location);
    console.log('Description:', description);
    console.log('ID de l\'image téléchargée:', publicId); // Affiche l'ID public de l'image téléchargée
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ajouter une plante</Text>
      <TextInput
        style={styles.input}
        placeholder="Nom de la plante"
        value={plantName}
        onChangeText={setPlantName}
      />
      <TextInput
        style={styles.input}
        placeholder="Type de plante"
        value={plantType}
        onChangeText={setPlantType}
      />
      <TextInput
        style={styles.input}
        placeholder="Localisation"
        value={location}
        onChangeText={setLocation}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        multiline
        numberOfLines={4}
        value={description}
        onChangeText={setDescription}
      />
      {/* CloudinaryUploadWidget pour télécharger l'image */}
      <CloudinaryUploadWidget 
        uwConfig={uwConfig} 
        setPublicId={setPublicId}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddPlant}>
        <Text style={styles.addButtonText}>Ajouter la plante</Text>
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
    fontSize: 24,
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
  addButton: {
    backgroundColor: '#00a65a',
    borderRadius: 5,
    padding: 10,
    width: '80%',
    marginBottom: 10,
    opacity: 0.55,
  },
  addButtonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default AddPlantScreen;
