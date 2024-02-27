import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    StyleSheet,
    Linking,
    FlatList,
    ActivityIndicator
} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import styles from "../assets/style";
import {checkAuth} from "../lib/utilFunctions";

const Profil = ({ navigation }) => {
    checkAuth({ navigation });
    const [isLoading, setLoading] = useState(true);
    const [userData, setUserData] = useState({});
    const getUserData = async () => {
        const token = await SecureStore.getItemAsync('token');
        const userId = await SecureStore.getItemAsync('userId');

        try {
            const response = await fetch(`http://192.168.1.65:3000/api/user/get?user=${userId}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            });
            const json = await response.json();
            setUserData(json.user);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getUserData();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profil</Text>
            {isLoading ? (
                <ActivityIndicator />
                ) : (
                    <View>
                        <Text>Informations personnelles</Text>
                        <View>
                            <Text>Pseudo : {userData.pseudo}</Text>
                            <Text>Email : {userData.mail}</Text>
                            <Text>Membre depuis le : {userData.date_creation}</Text>
                            <Text>Genre : {userData.Genre.sexe}</Text>
                            <Text>Adresse : {userData.Adresse.rue} à {userData.Adresse.Ville.nom_ville} {userData.Adresse.CodePostal.code_postal}</Text>
                        </View>
                    </View>
            )}
        </View>
    );
}

export default Profil;