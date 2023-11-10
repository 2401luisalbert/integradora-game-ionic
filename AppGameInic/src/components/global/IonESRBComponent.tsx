import styles from "./IonESRBComponent.module.css";

const IonESRBComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.esrb_rating}>
        <div>Everyone</div>
        <div>
          <div>E</div>
        </div>
        <div>content rated by</div>
        <div>esrb</div>
      </div>
      <p></p>
    </div>
  );
};

export default IonESRBComponent;
