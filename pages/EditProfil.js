import React, {useEffect, useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import {Picker} from "@react-native-picker/picker";
import {editUser, fetchGenders} from "../lib/fetch/user";
import {capitalize} from "../lib/utilFunctions";
import * as SecureStore from "expo-secure-store";

const EditProfil = ({ route, navigation }) => {
    const [isLoading, setLoading] = useState(true);
    const [userData, setUserData] = useState(route.params.userData);
    const [pseudo, setPseudo] = useState(userData.pseudo);
    const [mail, setEmail] = useState(userData.mail);
    const [rue, setRue] = useState(userData.Adresse.rue);
    const [ville, setVille] = useState(userData.Adresse.Ville.nom_ville);
    const [code_postal, setCode_postal] = useState(userData.Adresse.CodePostal.code_postal);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [gender, setGender] = useState(userData.genre_id);
    const [genders, setGenders] = useState([]);

    const getGenders = async () => {
        try {
            const data = await fetchGenders();
            setGenders(data);
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = async () => {
        const token = SecureStore.getItem('token');
        const response= await editUser(token, userData, pseudo, mail, rue, ville, code_postal, gender)
        const data = await response.json();
        if (response.status !== 200) {
            alert(data.message)
            return;
        }
        navigation.navigate('Home', {message: data.message});
    };

    useEffect(() => {
        getGenders();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Modifier le profil</Text>
            <TextInput
                style={styles.input}
                placeholder="Pseudo"
                value={pseudo}
                onChangeText={setPseudo}
            />
            <TextInput
                style={styles.input}
                placeholder="Adresse e-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                value={mail}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Adresse"
                autoCapitalize="none"
                value={rue}
                onChangeText={setRue}
            />
            <TextInput
                style={styles.input}
                placeholder="Ville"
                autoCapitalize="none"
                value={ville}
                onChangeText={setVille}
            />
            <TextInput
                style={styles.input}
                placeholder="Code Postal"
                autoCapitalize="none"
                value={code_postal}
                onChangeText={setCode_postal}
            />
            <TextInput
                style={styles.input}
                placeholder="Mot de passe"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />
            <TextInput
                style={styles.input}
                placeholder="Confirmer le nouveau mot de passe"
                secureTextEntry={true}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
            />
            {isLoading ? (
                <Text>Chargement des genres...</Text>
            ) : (
                <View style={styles.pickerContainer}>
                    <Text style={styles.pickerLabel}>Genre:</Text>
                    <Picker
                        style={styles.picker}
                        selectedValue={gender}
                        onValueChange={(itemValue, itemIndex) => setGender(itemValue)}>
                        {genders.map((gender, index) => (
                            <Picker.Item key={index} label={capitalize(gender.sexe)} value={gender.id} />
                        ))}
                    </Picker>
                </View>
            )}
            <TouchableOpacity style={styles.signUpButton} onPress={handleEdit}>
                <Text style={styles.signUpButtonText}>Modifier</Text>
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
        fontSize: 34,
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
    pickerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    pickerLabel: {
        marginRight: 10,
    },
    picker: {
        flex: 0.35,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    switchLabel: {
        marginRight: 10,
    },
    signUpButton: {
        backgroundColor: '#00a65a',
        borderRadius: 5,
        padding: 10,
        width: '80%',
        marginBottom: 10,
        opacity: 0.55,
    },
    signUpButtonText: {
        color: '#ffffff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

export default EditProfil;
