import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import {
  IonIcon,
  IonLabel,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonPage,
  IonRouterOutlet,
} from "@ionic/react";
import { triangle, listCircleOutline } from "ionicons/icons";
import "./Tabs.css";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";

const Tabs: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/home/tab1" component={Tab1} exact={true} />
        <Route path="/home/tab2" component={Tab2} exact={true} />
        <Route exact path="/home" render={() => <Redirect to="/home/tab1" />} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/home/tab1">
          <IonIcon icon={triangle} />
          <IonLabel>Randevular</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/home/tab2">
          <IonIcon icon={listCircleOutline} />
          <IonLabel>Profil</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
