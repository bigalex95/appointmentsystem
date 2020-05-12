import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton,
} from "@ionic/react";
import { warning, pencil } from "ionicons/icons";
import "./Tab2.css";

const Tab2: React.FC = () => {
  return (
    <IonPage className="ion-text-center">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard>
          <img src="https://www.jumpstarttech.com/files/2018/08/Network-Profile.png" />
          <IonCardHeader>
            <IonCardSubtitle>Hoca</IonCardSubtitle>
            <IonCardTitle>Alibek Erkabayev</IonCardTitle>
          </IonCardHeader>
        </IonCard>

        <IonCard>
          <IonItem href="#" className="ion-activated">
            <IonIcon icon={pencil} slot="start" />
            <IonLabel color="primary">Bilgileri düzenle</IonLabel>
          </IonItem>

          <IonItem href="/login">
            <IonIcon icon={warning} slot="start" />
            <IonLabel color="danger">Logout</IonLabel>
          </IonItem>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
