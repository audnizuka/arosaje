import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator
} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import {fetchUserData} from "../lib/fetch/user";

const Profil = ({ navigation }) => {
    const [isLoading, setLoading] = useState(true);
    const [userData, setUserData] = useState({});
    const getUserData = async () => {
        try {
            const token = await SecureStore.getItemAsync('token');
            const userId = await SecureStore.getItemAsync('userId');
            const data = await fetchUserData(token, userId);
            setUserData(data.user);
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getUserData();
        console.log(userData);
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

const styles = StyleSheet.create({
    background: {
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
    forgotPassword: {
        textAlign: 'right',
        marginBottom: 10,
        color: '#007bff', // Couleur du lien "Mot de passe oublié ?"
    },
    button: {

        backgroundColor: '#00a65a',
        borderRadius: 5,
        padding: 10,
        width: '80%',
        marginBottom: 10,
        opacity: 0.55,
    },
    buttonText: {
        color: '#ffffff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    signUpLink: {
        color: '#007bff', // Couleur du lien "Pas encore inscrit ? S'inscrire"
        textAlign: 'center',
        marginTop: 10,
    },
});