import React, { useRef } from "react";
import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonImg,
  IonLabel,
  IonModal,
  IonTitle,
  IonToolbar,
  createAnimation,
} from "@ionic/react";
import { ICardItems } from "../../interfaces/ICardItems";
import styles from "./IonCardItems.module.css";

const IonCardItems: React.FC<ICardItems> = ({
  id,
  title,
  description,
  imageURL,
}) => {
  const modal = useRef<HTMLIonModalElement>(null);
  const modalId = `modal-${id}`;

  function dismiss() {
    modal.current?.dismiss();
  }

  const enterAnimation = (baseEl: HTMLElement) => {
    const root = baseEl.shadowRoot;

    const backdropAnimation = createAnimation()
      .addElement(root?.querySelector("ion-backdrop")!)
      .fromTo("opacity", "0.01", "var(--backdrop-opacity)");

    const wrapperAnimation = createAnimation()
      .addElement(root?.querySelector(".modal-wrapper")!)
      .keyframes([
        { offset: 0, opacity: "0", transform: "scale(0)" },
        { offset: 1, opacity: "0.99", transform: "scale(1)" },
      ]);

    return createAnimation()
      .addElement(baseEl)
      .easing("ease-out")
      .duration(500)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };

  const leaveAnimation = (baseEl: HTMLElement) => {
    return enterAnimation(baseEl).direction("reverse");
  };

  return (
    <IonCard className={styles.card} id={modalId}>
      <IonCardHeader className={styles.header__card}>
        <IonImg className={styles.img__card} src={imageURL} alt={title} />
        <IonCardTitle className={styles.title__card}>{title}</IonCardTitle>
      </IonCardHeader>

      <IonModal
        id="example-modal"
        ref={modal}
        trigger={modalId}
        enterAnimation={enterAnimation}
        leaveAnimation={leaveAnimation}
        className={styles.modal}
      >
        <IonContent>
          <IonToolbar>
            <IonTitle>{title}</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => dismiss()}>Cerrar</IonButton>
            </IonButtons>
          </IonToolbar>
          <IonContent className="ion-padding">
            <div className={styles.modal__content}>
              <IonImg className={styles.img__card} src={imageURL} alt={title} />
            </div>
              <IonLabel>{description}</IonLabel>
          </IonContent>
        </IonContent>
      </IonModal>
    </IonCard>
  );
};

export default IonCardItems;
