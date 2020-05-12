import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton,
  IonItem,
  IonLoading,
} from "@ionic/react";
import "./Login.css";
import { loginUser } from "../firebaseConfig";
import { toast } from "../toast";
import { Link } from "react-router-dom";

const INITIAL_STATE = {};

const Login: React.FC = () => {
  const [busy, setbusy] = useState<boolean>(false);

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  async function login() {
    setbusy(true);
    const res = await loginUser(username, password);
    if (res) {
      toast("Bilgileriniz dogru!");
      window.location.href = "/home";
    }
    setbusy(false);
  }

  return (
    <IonPage className="ion-text-center">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Giriş</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading message="Please wait..." duration={0} isOpen={busy} />
      <IonContent className="ion-pading">
        <img src="https://egirisim.com/wp-content/uploads/2020/05/kolay-randevu-girisim.jpeg" />
        <IonItem>
          <IonInput
            placeholder="Username"
            onIonChange={(e: any) => setusername(e.target.value)}
          />
        </IonItem>
        <IonItem>
          <IonInput
            type="password"
            placeholder="Password"
            onIonChange={(e: any) => setpassword(e.target.value)}
          />
        </IonItem>
        <IonItem>
          <IonButton onClick={login}>Login</IonButton>
        </IonItem>
        <p>
          New here? <Link to="/register">Register</Link>
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Login;
