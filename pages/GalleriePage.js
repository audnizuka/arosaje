import React, { useState, useEffect } from 'react';
import { View, Image, ScrollView, StyleSheet } from 'react-native';
import {checkAuth} from "../lib/utilFunctions";

const GalleriePage = () => {
  checkAuth({ navigation });
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
//URL de test pour la gallerie
//Après switch Fast API https://cloudinary.com/documentation/advanced_url_delivery_options

    const urls = [
      "https://res.cloudinary.com/dybmmr8ah/image/upload/v1708891601/arosaje/zxszcefxd3lx25ki16rq.jpg",
      "https://res.cloudinary.com/dybmmr8ah/image/upload/v1708891577/arosaje/pn2xgn0zcxh0tugorsrl.jpg",
      "https://res.cloudinary.com/dybmmr8ah/image/upload/v1708880106/arosaje/nou4wfigbpf7muonn1qh.jpg"
    ];

    setImageUrls(urls);
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
