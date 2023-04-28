//// burada google firebase ile etkileşime buradan girilecek.
// firebase ile etkileşime geçildi
import { initializeApp } from "firebase/app";
// authentication işlemleri için (kullanıcı kaydı)
import { getAuth } from "firebase/auth";
// firestore database erişimi için
import {getFirestore} from "firebase/firestore";
// storage erişimi için (resim kayıt yeri)
import {getStorage} from "firebase/storage";


// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCAWakmYnWnDTK6B6_BebFJVAbh0ygTpYU",
  authDomain: "e-ticaret-class-6f618.firebaseapp.com",
  projectId: "e-ticaret-class-6f618",
  storageBucket: "e-ticaret-class-6f618.appspot.com",
  messagingSenderId: "378912651024",
  appId: "1:378912651024:web:62647217821db745909795"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage= getStorage(app);

export default app;
