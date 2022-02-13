import firebase from 'firebase'


const app = firebase.initializeApp({
    apiKey: "AIzaSyB_WoElt0yjJdivym4dRZMIQ72HduHSqF8",
  authDomain: "chat-app-774af.firebaseapp.com",
  projectId: "chat-app-774af",
  storageBucket: "chat-app-774af.appspot.com",
  messagingSenderId: "308199585633",
  appId: "1:308199585633:web:4ba8fd6213daf62fcc3720",
  measurementId: "G-WKF68YNSDE"
})

const db = app.firestore();
const auth = firebase.auth()
export default {db, auth}