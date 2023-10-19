import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";
import { IWorld } from "./../../interfaces/IHome";

const IonCardComponent: React.FC<IWorld> = ({
  title,
  imageURL,
  description,
}) => {
  const cardStyle = {
    background: `url(${imageURL}) center/cover`,
    color: "#fff",
  };

  const overlayStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Usar rgba con valores en una cadena
  };

  return (
    <IonCard style={cardStyle}>
      <div style={overlayStyle}>
        <IonCardHeader>
          <IonCardTitle>{title}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>{description}</IonCardContent>
      </div>
    </IonCard>
  );
};

export default IonCardComponent;
