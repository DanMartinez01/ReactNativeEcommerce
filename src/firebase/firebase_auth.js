import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAv1NL64udEvT0VUfo0El2N-ZvS8qmXDLY",
  authDomain: "rn-coder.firebaseapp.com",
  databaseURL: "https://rn-coder-default-rtdb.firebaseio.com",
  projectId: "rn-coder",
  storageBucket: "rn-coder.appspot.com",
  messagingSenderId: "706357475983",
  appId: "1:706357475983:web:9bdf3a93e856d34fc34efa",
};

const app = initializeApp(firebaseConfig);

export const firebase_auth = getAuth(app);
