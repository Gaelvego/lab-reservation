import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA6ghHUnSLVgpwkjuKUMg83cgnilBOZzIg",
  authDomain: "servicio-becario-44851.firebaseapp.com",
  projectId: "servicio-becario-44851",
  storageBucket: "servicio-becario-44851.appspot.com",
  messagingSenderId: "339622437151",
  appId: "1:339622437151:web:f1d1281854d280c567102a",
  measurementId: "G-9BJ6K7CN62"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();