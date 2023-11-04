import React,{useState} from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import { dataCharacters } from "../data/data";
import IonCardComponent from "../components/global/IonCardComponent";
import IonModalComponent from "../components/global/IonModalComponent";

const CharacterPage: React.FC = () => {

  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const openModal = (character: any) => {
    setSelectedCharacter(character);
  };

  const closeModal = () => {
    setSelectedCharacter(null);
  };

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonTitle>Personajes</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-text-justify">
        <p className="ion-padding">
          En <IonText color="primary">"Space Defender"</IonText> te adentrarás en un emocionante viaje a través del espacio mientras asumes el papel del famoso astronauta defensor, Nick Parker. Pero eso no es todo; también te enfrentarás a enemigos alienígenas y robots renegados únicos en cada escenario.
        </p>
        <IonGrid>
          <IonRow>
          {dataCharacters.map((character) => (
              <IonCol size="6"  key={character.id}>
                <IonCardComponent
                  imageURL={character.imageURL}
                  descriptionModal={character.descriptionModal}
                  title={character.title}
                  id={character.id}
                  onPress={() => openModal(character)}
                />
              </IonCol>
          ))}
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonModalComponent character={selectedCharacter} isOpen={!!selectedCharacter} onClose={closeModal} />
    </IonPage>
  );
};

export default CharacterPage;
