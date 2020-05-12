import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonItemSliding,
  IonLabel,
  IonAvatar,
  IonItemOptions,
  IonItemOption,
  IonButton,
} from "@ionic/react";
import "./Tab2.css";

const arr = [
  {
    name: "Finn",
    desc: "This guy rocks!",
    time: "12:25 15.Mayis.2020",
  },
  {
    name: "Han",
    desc: "Trust me, I am a programmer",
    time: "13:25 5.Mayis.2020",
  },
  {
    name: "Rey",
    desc: "Konu Konu Konu!",
    time: "9.25 15.Nisan.2020",
  },
  {
    name: "Rey",
    desc: "Konu Konu Konu!",
    time: "9.25 15.Nisan.2020",
  },
  {
    name: "Rey",
    desc: "Konu Konu Konu!",
    time: "9.25 15.Nisan.2020",
  },
];

const Tab1: React.FC = () => {
  async function ekleyegit() {
    window.location.href = "/randevuekle";
  }
  return (
    <IonPage className="ion-text-center">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Randevu Listesi</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          {arr.map((elem) => (
            <IonItemSliding key={elem.name}>
              <IonItem>
                <IonAvatar>
                  <img
                    src={`https://ionicframework.com/docs/demos/api/list/avatar-${elem.name.toLocaleLowerCase()}.png`}
                  />
                </IonAvatar>
                <IonLabel className="ion-paddings ion-text-center">
                  <h2>{elem.name}</h2>
                  <h3>{elem.desc}</h3>
                  <h3>{elem.time}</h3>
                </IonLabel>
              </IonItem>
              <IonItemOptions side="end">
                <IonItemOption color="warning">Ertele</IonItemOption>
              </IonItemOptions>
              <IonItemOptions side="start">
                <IonItemOption color="danger">Sil</IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
          ))}
        </IonList>
        <IonButton
          className="eklebtn"
          color="primary"
          routerLink="/home/randevuekle"
        >
          Randevu Ekle
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
