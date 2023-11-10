import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import styles from './Controls.module.css'
import IonKeyBoardControlComponent from "../components/controls/IonKeyBoardControlComponent";


const ControlsPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonTitle>Controles</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">

      <div className={styles.container}>
        <div>
          <IonKeyBoardControlComponent/>
        </div>
        <div data-aos="fade-right" className={styles.content}>
          <p>
            Teclas <b className="text-primary"> W, A, S y D</b> Utiliza estas teclas para mover a Nick
            Parker por los escenarios de la Luna, Marte y la estación espacial.
            Explora con facilidad mientras buscas pruebas de vida alienígena.
          </p>
          <br />
          <p>
            <b className="text-primary">Barra Espaciadora</b> Utiliza la barra espaciadora para que Nick
            salte en situaciones que lo requieran.
          </p>
        </div>
      </div>
      <h1 className={styles.title}>Controles de Mouse</h1>
      {/* <MouseControlsComponent />
      <ESRBComponent/>  */}
      </IonContent>
    </IonPage>
  );
};

export default ControlsPage;
