import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonDatetime,
  IonInput,
} from "@ionic/react";
import "./RandevuEkle.css";

const customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];

const customDayShortNames = [
  "s\u00f8n",
  "man",
  "tir",
  "ons",
  "tor",
  "fre",
  "l\u00f8r",
];

const RandevuEkle: React.FC = () => {
  const [hocalar, sethocalar] = useState<string>();
  const [selectedDate, setSelectedDate] = useState<string>(
    "2012-12-15T13:47:20.789"
  );

  async function randevularagit() {
    window.location.href = "/home";
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Yeni Randevu Ekle</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-pading ion-text-center">
        <IonItem>
          <IonLabel>Hocalar</IonLabel>
          <IonSelect
            value={hocalar}
            placeholder="Select One"
            onIonChange={(e) => sethocalar(e.detail.value)}
          >
            <IonSelectOption value="adi">Adi Soyadi</IonSelectOption>
            <IonSelectOption value="alibek">Alibek Erkabayev</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItem>
          <IonInput placeholder="Konu" />
        </IonItem>
        <IonItem>
          <IonLabel>MM DD YY</IonLabel>
          <IonDatetime
            displayFormat="MM DD YY"
            placeholder="Select Date"
            value={selectedDate}
            onIonChange={(e) => setSelectedDate(e.detail.value!)}
          ></IonDatetime>
        </IonItem>
        <IonItem>
          <IonButton onClick={randevularagit} color="primary">
            Ekle
          </IonButton>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default RandevuEkle;
