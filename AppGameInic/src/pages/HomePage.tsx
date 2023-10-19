import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import IonHeaderComponent from "../components/home/IonHeaderComponent";
import { dataHomeWorlds } from "../data/data";
import IonCardComponent from "../components/global/IonCardComponent";
import styles from "./Home.module.css"

const HomePage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonTitle>Space Defender</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonContent className="ion-padding">
          <IonHeaderComponent />
          <h2 className="ion-margin-vertical ion-padding-vertical">Mundos</h2>
          <div className="ion-align-items-center">
            <p className="ion-margin-bottom ion-padding-bottom">
              Explora la Luna, Marte y una estación espacial abandonada mientras
              recopilas pistas y muestras de vida alienígena. Encuentra esferas
              bioluminiscentes que brillan en la oscuridad, huevos alienígenas
              que revelan sus estrategias de reproducción y disquetes con datos
              críticos sobre la comunicación de los extraterrestres.
            </p>
            <div>
              {dataHomeWorlds.map((world) => (
                <IonCardComponent
                  imageURL={world.imageURL}
                  title={world.title}
                  description={world.description}
                  id={world.id}
                  key={world.id}
                />
              ))}
            </div>
          </div>
          <h2 className="ion-margin-vertical ion-padding-vertical">GamePlay</h2>
          <div className={styles.video_container}>
            <iframe
              src="https://www.youtube.com/embed/kfYEiTdsyas?si=vbFcZcWEkzL_r8vk"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
