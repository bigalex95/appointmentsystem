import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonItem,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Kullanıcı giriş</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-pading ion-align-items-center ion-justify-content-center">
        <IonItem className="text-center">
          <IonButton routerLink="/login">Login</IonButton>
        </IonItem>
        <IonItem className="text-center">
          <IonButton routerLink="/register" color="secondary">
            Register
          </IonButton>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Home;
