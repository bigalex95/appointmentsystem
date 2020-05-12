import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonInput,
  IonButton,
  IonLoading,
} from "@ionic/react";
import "./Register.css";
import { Link } from "react-router-dom";
import { toast } from "../toast";
import { registerUser } from "../firebaseConfig";

const Register: React.FC = () => {
  const [busy, setbusy] = useState<boolean>(false);

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const [Unvan, setUnvan] = useState<string>();

  async function register() {
    setbusy(true);
    // validation
    if (password !== cpassword) {
      return toast("Password do not match!");
    }
    if (username.trim() === "" || password.trim() === "") {
      return toast("Username and password are required!");
    }

    const res = await registerUser(username, password);
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
          <IonTitle>Kayıt Ol</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading message="Please wait..." duration={5} isOpen={busy} />
      <IonContent className="ion-pading">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT3_Lo6XsSSrexmeULupR_PY4Fq9R5wAsjZvcqERb6j5Acrl-4p&usqp=CAU" />
        <IonItem>
          <IonLabel>Unvan</IonLabel>
          <IonSelect
            value={Unvan}
            placeholder="Select One"
            onIonChange={(e) => setUnvan(e.detail.value)}
          >
            <IonSelectOption value="Hoca">Hoca</IonSelectOption>
            <IonSelectOption value="ogrenci">Öğrenci</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItem>
          <IonInput placeholder="Ad" />
        </IonItem>
        <IonItem>
          <IonInput placeholder="Soyad" />
        </IonItem>
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
          <IonInput
            type="password"
            placeholder="Confirm Password"
            onIonChange={(e: any) => setcpassword(e.target.value)}
          />
        </IonItem>
        <IonItem>
          <IonButton onClick={register}>Register</IonButton>
        </IonItem>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Register;
