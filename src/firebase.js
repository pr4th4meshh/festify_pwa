import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCzM_sSlHSKvAy0CeCDIwVtBD0rkssHKuU",
  authDomain: "blackops-224a4.firebaseapp.com",
  projectId: "blackops-224a4",
  storageBucket: "blackops-224a4.appspot.com",
  messagingSenderId: "761507279048",
  appId: "1:761507279048:web:614b1f426033773a9935fd",
  measurementId: "G-2DFVQQKC88",
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
