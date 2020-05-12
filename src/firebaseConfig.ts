import * as firebase from "firebase";
import { toast } from "./toast";

const config = {
  apiKey: "AIzaSyAJik2s6e-rNocp1dUfChen6OQIeleDf6Q",
  authDomain: "appointmentsystem-45096.firebaseapp.com",
  databaseURL: "https://appointmentsystem-45096.firebaseio.com",
  projectId: "appointmentsystem-45096",
  storageBucket: "appointmentsystem-45096.appspot.com",
  messagingSenderId: "562487629108",
  appId: "1:562487629108:web:9e126c936943f0244a8161",
  measurementId: "G-WW68W7K8M9",
};

firebase.initializeApp(config);

firebase.auth();

export async function loginUser(username: string, password: string) {
  const email = `${username}@codedamn.com`;

  try {
    const res = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);

    console.log(res);
    return true;
  } catch (error) {
    console.log(error);
    toast(error.message);
    return false;
  }

  // authenticate with firebase
  // if present, show dashboard
  // if not, show error
}

export async function registerUser(username: string, password: string) {
  const email = `${username}@codedamn.com`;
  try {
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    console.log(res);
    return true;
  } catch (error) {
    console.log(error);
    toast(error.message);
    return false;
  }
}
