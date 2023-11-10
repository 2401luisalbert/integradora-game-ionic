import {
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import IonCardItems from "../components/items/IonCardItems";
import { dataItems } from "../data/data";

const ItemsPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonTitle>Items</IonTitle>
        </IonToolbar>
      </IonHeader>
     
        <IonContent className="ion-padding">

        <p className="ion-ion-padding-horizontal ion-text-justify">
          En <IonText color="tertiary"><b>"Space Defender"</b></IonText> los jugadores encontrarán tres items esenciales
          para su misión de recopilar pruebas y evidencia de la existencia de
          vida alienígena en el sistema solar. Cada uno de estos items desempeña
          un papel crucial en el desarrollo de la historia y en la exploración
          de los escenarios únicos del juego. A continuación, presentamos los
          tres items clave que los jugadores descubrirán en su emocionante viaje
          espacial:
        </p>

          {dataItems.map((item) => (
            <IonCardItems
              key={item.id}
              id={item.id}
              title={item.title}
              imageURL={item.imageURL}
              description={item.description}
            />
          ))}
        </IonContent>

    </IonPage>
  );
};

export default ItemsPage;
