import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAASoUuXdF9FSW2NmUrgnjOA_glDFEtYws",
  authDomain: "instacool-b199e.firebaseapp.com",
  databaseURL: "https://instacool-b199e.firebaseio.com",
  projectId: "instacool-b199e",
  storageBucket: "instacool-b199e.appspot.com",
  messagingSenderId: "911352638218",
  appId: "1:911352638218:web:99aef5d4792b2eac43e8f3",
  measurementId: "G-BPTXSDXVD6",
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

export const auth = firebase.auth();
export const db = firestore;
export const storage = firebase.storage();
