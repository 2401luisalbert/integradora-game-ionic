import { IonButton, IonPopover, IonContent } from '@ionic/react'
import styles from './IonHeaderComponent.module.css'
import { useHistory } from 'react-router-dom';
import { useRef, useState } from 'react';

const IonHeaderComponent: React.FC = () => {

    const history = useHistory();
    const popover = useRef<HTMLIonPopoverElement>(null);
    const [popoverOpen, setPopoverOpen] = useState(false);
  
    const openPopover = (e: any) => {
      popover.current!.event = e;
      setPopoverOpen(true);
      setTimeout(() => {
        setPopoverOpen(false)
        history.push("/characters");
      }, 2000);
    };

  return (
    <header className={styles.hero}>
          <div className={styles.hero_content}>
            <div className={styles.left_content}>
              <h1>Space Defender</h1>
              <p>
                <b>Space Defender</b> te sumerge en un futuro lejano, donde la
                humanidad ha expandido su presencia por todo el sistema solar,
                colonizando la Luna, Marte y estaciones espaciales distantes. A
                medida que las colonias humanas prosperan, surgen informes
                inquietantes de avistamientos de fenómenos inexplicables y
                actividades sospechosas.
              </p>
              <IonButton  shape="round" color={"dark"} onClick={openPopover}>Ver más</IonButton>
              <IonPopover
                ref={popover}
                isOpen={popoverOpen}
                onDidDismiss={() => setPopoverOpen(false)}
                alignment="center"
              >
                <IonContent class="ion-padding">¡Genial! vamos a allá</IonContent>
              </IonPopover>
            </div>
          </div>
        </header>
  )
}

export default IonHeaderComponent

