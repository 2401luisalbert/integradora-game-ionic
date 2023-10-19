import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const ItemsPage: React.FC = () => {
  return (
    <IonPage>
    <IonHeader className="ion-no-border">
      <IonToolbar>
        <IonTitle>Items</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonContent className="ion-padding">
     
      </IonContent>
    </IonContent>
  </IonPage>
  );
};

export default ItemsPage;
