import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const ControlsPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonTitle>Controls</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding"></IonContent>
    </IonPage>
  );
};

export default ControlsPage;
