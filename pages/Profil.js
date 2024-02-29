import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator, TouchableOpacity
} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import {fetchUserData} from "../lib/fetch/user";
import {fetchAnnouncementByUser} from "../lib/fetch/announcement";
import {formatDate} from "../lib/utilFunctions";

const Profil = ({ navigation }) => {
    const [isLoading, setLoading] = useState(true);
    const [userData, setUserData] = useState({});
    const [announcements, setAnnouncements] = useState([{}]);
    const fetchData = async () => {
        try {
            const token = SecureStore.getItem('token');
            const userId = SecureStore.getItem('userId');
            let data = await fetchUserData(token, userId);
            setUserData(data.user);
            data = await fetchAnnouncementByUser(token, userId);
            setAnnouncements(data.annonces);
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
            <Text style={styles.title}>Profil</Text>
            {isLoading ? (
                <ActivityIndicator />
                ) : (
                    <>
                        <View>
                            <Text style={styles.title}>Informations personnelles</Text>
                            <View>
                                <Text>Pseudo : {userData.pseudo}</Text>
                                <Text>Email : {userData.mail}</Text>
                                <Text>Membre depuis le : {formatDate(userData.date_creation)}</Text>
                                <Text>Genre : {userData.Genre.sexe}</Text>
                                <Text>Adresse : {userData.Adresse.rue} à {userData.Adresse.Ville.nom_ville} {userData.Adresse.CodePostal.code_postal}</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.title}>Annonces</Text>
                            <View>
                                {announcements.map((item, index) => {
                                    return (
                                        <View key={index}>
                                            <Text>Plante : {item.Plante.nom_plante}</Text>
                                            <Text>Date début : {formatDate(item.date_debut)}</Text>
                                            <Text>Date fin : {formatDate(item.date_fin)}</Text>
                                            <Text>Entretien : tous les {item.periodicite_entretien} jours</Text>
                                            {item.proprietaire_id === userData.id ? (
                                                <Text>Propriétaire</Text>
                                                ) : (
                                                <Text>Gardien</Text>
                                            )}
                                        </View>
                                    )
                                })}
                            </View>
                        </View>
                    </>
            )}
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('EditProfil', { userData: userData })}
            >
                <Text style={styles.buttonText}>Modifier le profil</Text>
            </TouchableOpacity>
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