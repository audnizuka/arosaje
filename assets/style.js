import {StyleSheet} from "react-native";

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

export default styles;