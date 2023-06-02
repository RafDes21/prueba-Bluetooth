// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const provider = new GoogleAuthProvider();
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "bluetooth-5ef16.firebaseapp.com",
  projectId: "bluetooth-5ef16",
  storageBucket: "bluetooth-5ef16.appspot.com",
  messagingSenderId: "1024353871065",
  appId: "1:1024353871065:web:e5d214c027be2ed8df4ac8",
};


export const signInWithGoogle = () => {

  signInWithPopup(auth, provider)
    .then((result) => {
      // El inicio de sesión con Google se completó exitosamente
      // Aquí puedes realizar acciones adicionales, como guardar información del usuario, redirigir, etc.
      const user = result.user;
      console.log("Usuario:", user);
    })
    .catch((error) => {
      // Ocurrió un error durante el inicio de sesión con Google
      console.error("Error al iniciar sesión con Google:", error);
    });
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
