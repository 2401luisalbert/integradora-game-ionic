import { IonText } from "@ionic/react";
import styles from "./IonMouseControlComponent.module.css";

const IonMouseControlComponent = () => {
  return (
    <div className={styles.container}>
      <div  className={styles.grid}>
        <figure className={styles.figure}>
          <img
            src="/src/assets/images/clic-mouse.webp"
            alt="mouse"
            className={styles.img1}
          />
        </figure>
        <div className={styles.container__text}>
          <p className={styles.text}>
            {" "}
            <IonText color="tertiary">
              <b>Clic Izquierdo del Ratón </b>
            </IonText>
            Enfrenta a los enemigos alienígenas y a los robots renegados
            utilizando el clic izquierdo del ratón para disparar tu arma.
            Asegúrate de apuntar con precisión para derrotar a tus oponentes y
            mantener a salvo a Nick.
          </p>
        </div>
      </div>
      <div className={styles.grid}>
        <figure className={styles.figure}>
          <img
            src="/src/assets/images/mouse-move.webp"
            alt="mouse"
            className={styles.img2}
          />
        </figure>
        <div className={styles.container__text}>
          <p className={styles.text}>
            <IonText color="tertiary">
              <b>Movimiento del Ratón </b>
            </IonText>
            Gira el ratón para ajustar la dirección de la cámara y apuntar en la
            dirección deseada. Esto te permitirá enfocar tus disparos con
            precisión.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IonMouseControlComponent;
