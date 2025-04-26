// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2Bg214H3p5eEbxHNrdvwZBFxKioj2Hac",
  authDomain: "boredom-terminator.firebaseapp.com",
  projectId: "boredom-terminator",
  storageBucket: "boredom-terminator.firebasestorage.app",
  messagingSenderId: "892089727161",
  appId: "1:892089727161:web:a5cc6677bf361cb68a4368",
  measurementId: "G-0WW58RSYXZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Create auth instance and provider
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Export using ES modules syntax
export { auth, googleProvider }; 