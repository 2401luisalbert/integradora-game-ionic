import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";
import { ICard } from "../../interfaces/ICard";
import styles from './IonCardComponent.module.css'

const IonCardComponent: React.FC<ICard> = ({
  title,
  imageURL,
  description,
  onPress
}) => {
  const cardStyle = {
    backgroundImage: `url(${imageURL})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundColor: "transparent",
    color: "#fff",
    width: "100%",
    margin: "1px",
    marginTop: "1px",
    boxShadow: "0 0 5px 1px #48abe0",
    borderRadius: "15px",
  };

  const openModal = () => {
    if (onPress) {
      onPress();
    }
  };

  const cardContent = (
    <div className={description ? styles.overlayStyle : ""}>
      <IonCardHeader>
        <IonCardTitle className={!description ? styles.ionCardContent : ""}>
          {title}
        </IonCardTitle>
      </IonCardHeader>
      <IonCardContent>{description}</IonCardContent>
    </div>
  );

  return (
    <IonCard style={cardStyle} className={styles.IonCard} onClick={openModal}>
      {cardContent}
    </IonCard>
  );
};

export default IonCardComponent;
