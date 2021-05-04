import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAR4ihfeR8cwZMELV15bQZIOUcKMJScghQ",
  authDomain: "whatsapp-next-js-9d64c.firebaseapp.com",
  projectId: "whatsapp-next-js-9d64c",
  storageBucket: "whatsapp-next-js-9d64c.appspot.com",
  messagingSenderId: "394154478516",
  appId: "1:394154478516:web:d5383734a33f6869c700e1",
  measurementId: "G-B7GQGLYB1L",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
