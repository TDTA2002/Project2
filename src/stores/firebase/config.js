import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCiFWKvYmDyxFEMOn-FWg-Q8WW7-wBEbLA",
    authDomain: "product-module2.firebaseapp.com",
    projectId: "product-module2",
    storageBucket: "product-module2.appspot.com",
    messagingSenderId: "52436362502",
    appId: "1:52436362502:web:e117968b9d03a96bddea87",
    measurementId: "G-EMZZP361P6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestores = getFirestore(app)
const provider = new GoogleAuthProvider();
export { auth, provider, app, firestores }
// export const storage = getStorage(app);