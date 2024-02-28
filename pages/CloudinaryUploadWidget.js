import { createContext, useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

// Create a context to manage the script loading state
const CloudinaryScriptContext = createContext();

function CloudinaryUploadWidget({ uwConfig, setPublicId }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Check if the script is already loaded
    if (!loaded) {
      const uwScript = document.getElementById("uw");
      if (!uwScript) {
        // If not loaded, create and load the script
        const script = document.createElement("script");
        script.setAttribute("async", "");
        script.setAttribute("id", "uw");
        script.src = "https://upload-widget.cloudinary.com/global/all.js";
        script.addEventListener("load", () => setLoaded(true));
        document.body.appendChild(script);
      } else {
        // If already loaded, update the state
        setLoaded(true);
      }
    }
  }, [loaded]);

  const initializeCloudinaryWidget = () => {
    if (loaded) {
      var myWidget = window.cloudinary.createUploadWidget(
        uwConfig,
        (error, result) => {
          if (!error && result && result.event === "success") {
            console.log("Done! Here is the image info: ", result.info);
            setPublicId(result.info.public_id);
          }
        }
      );

      document.getElementById("upload_widget").addEventListener(
        "click",
        function () {
          myWidget.open();
        },
        false
      );
    }
  };

  return (
    <CloudinaryScriptContext.Provider value={{ loaded }}>
      <TouchableOpacity
      style={styles.addButton}
        id="upload_widget"
        className="cloudinary-button"
        onClick={initializeCloudinaryWidget}
      ><Text style={styles.addButtonText}>Ajouter une image</Text>
        
      </TouchableOpacity>
    </CloudinaryScriptContext.Provider>
  );
}


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

export default CloudinaryUploadWidget;
export { CloudinaryScriptContext };
