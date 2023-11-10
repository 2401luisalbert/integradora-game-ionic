import {
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import IonKeyBoardControlComponent from "../components/controls/IonKeyBoardControlComponent";
import IonMouseControlComponent from "../components/controls/IonMouseControlComponent";
import IonESRBComponent from "../components/global/IonESRBComponent";


const ControlsPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonTitle>Controles</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
            <IonKeyBoardControlComponent />
          <div data-aos="fade-right">
            <p>
              Teclas
              <IonText color="tertiary">
                <b> W, A, S y D</b>
              </IonText>
              Utiliza estas teclas para mover a Nick Parker por los escenarios
              de la Luna, Marte y la estación espacial. Explora con facilidad
              mientras buscas pruebas de vida alienígena.
            </p>
            <p>
              <IonText color="tertiary">
                <b>Barra Espaciadora</b>
              </IonText>
              Utiliza la barra espaciadora para que Nick salte en situaciones
              que lo requieran.
            </p>
          </div>
        <h1>Controles de Mouse</h1>
        <IonMouseControlComponent />
          <IonESRBComponent/>
      </IonContent>
    </IonPage>
  );
};

export default ControlsPage;
