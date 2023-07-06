import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyC9A1erJGfuMp44Ww93_lUt1kweb5yezqc",
    authDomain: "ghost-king-d90ca.firebaseapp.com",
    projectId: "ghost-king-d90ca",
    storageBucket: "ghost-king-d90ca.appspot.com",
    messagingSenderId: "72072543801",
    appId: "1:72072543801:web:b6646a879b6cf759e397e8",
    measurementId: "G-YF1Z9WX6W4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth, provider}
// export const storage = getStorage(app);