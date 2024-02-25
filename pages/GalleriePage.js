import React, { useState, useEffect } from 'react';
import { View, Image, ScrollView, StyleSheet } from 'react-native';

const GalleriePage = () => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const cloudName = 'dybmmr8ah'; // Votre cloud name Cloudinary
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/resources/image/upload/arosaje`;

    fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': 'Basic ' + btoa('413313137164619:imzXlfqV06AkO5GCj5I5BPtHSNA'), 
      }
    })
      .then(response => response.json())
      .then(data => {
        setImageUrls(data.resources.map(resource => resource.secure_url));
      })
      .catch(error => console.error('Erreur lors de la récupération des images:', error));
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {imageUrls.map((url, index) => (
        <Image key={index} source={{ uri: url }} style={styles.image} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 10,
  },
});

export default GalleriePage;
