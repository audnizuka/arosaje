import React, {useEffect, useState} from 'react';
import MapView, {Marker} from 'react-native-maps';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import * as SecureStore from "expo-secure-store";
import {fetchUserData} from "../lib/fetch/user";
import {fetchAllAnnouncements, fetchAnnouncementAddressCoords} from "../lib/fetch/announcement";


const Map = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [userId, setUserId] = useState(SecureStore.getItem('userId'));
  const [announcements, setAnnouncements] = useState([{}]);
  const [markers, setMarkers] = useState([]);

  const fetchData = async () => {
    try {
      const token = SecureStore.getItem('token');
      let data = await fetchAllAnnouncements(token);
      setAnnouncements(data.annonces);
      data = data.annonces.map((item, index) => {
          fetchAnnouncementAddressCoords(item.Proprietaire.Adresse.rue).then((coords) => {
            markers.push(
                {
                    title: item.Plante.nom_plante,
                    description: item.Plante.description,
                    announcement_id: item.id,
                    start_date: item.date_debut,
                    end_date: item.date_fin,
                    latlng: coords,
                }
            )
        });
      });
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
          style={styles.map}
          initialRegion={{
            latitude: 43.625050,
            longitude: 3.862038,
            latitudeDelta: 0.15,
            longitudeDelta: 0.15,
          }}
      />
        {isLoading ? (
            <ActivityIndicator />
        ) : (
            <>
                {markers.map((marker, index) => {
                    console.log(marker)
                    return <Marker
                        key={index}
                        coordinate={marker.latlng}
                    />
                })}
            </>
        )}
    </View>
  );
}

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

