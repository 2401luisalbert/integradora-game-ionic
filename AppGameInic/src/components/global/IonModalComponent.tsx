import React from "react";
import {
  IonModal,
  IonContent,
  IonButton,
} from "@ionic/react";
import { IModal } from "../../interfaces/IModal";
import styles from "./IonModalComponent.module.css";

const IonModalComponent: React.FC<IModal> = ({ character, isOpen, onClose }) => {
  if (!character) {
    return null;
  }

  return (
    <IonModal isOpen={isOpen} className={styles["custom-modal"]}>
      <IonContent>
        <div className={styles["modal-content"]}>
          <img src={character.imageFull} alt={character.title} className={styles["character-image"]} />
          <p className={styles["character-description"]}>
            {character.descriptionModal}
          </p>
          <IonButton  shape="round" color={"dark"} onClick={onClose}>Cerrar</IonButton>
        </div>
      </IonContent>
    </IonModal>
  );
};

export default IonModalComponent;
