import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
} from "@ionic/react";
import { Route, Redirect } from "react-router";
import {
  homeOutline,
  skullOutline,
  diamondOutline,
  gameControllerOutline,
} from "ionicons/icons";
import HomePage from "../../pages/HomePage";
import CharacterPage from "../../pages/CharacterPage";
import ItemsPage from "../../pages/ItemsPage";
import ControlsPage from "../../pages/ControlsPage";

const IonTabNavigator: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact path="/" to="/home" />
        <Route path="/home" render={() => <HomePage />} exact={true} />
        <Route
          path="/characters"
          render={() => <CharacterPage />}
          exact={true}
        />
        <Route path="/items" render={() => <ItemsPage />} exact={true} />
        <Route path="/controls" render={() => <ControlsPage />} exact={true} />
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/home">
          <IonIcon icon={homeOutline} />
          <IonLabel>Inicio</IonLabel>
        </IonTabButton>

        <IonTabButton tab="characters" href="/characters">
          <IonIcon icon={skullOutline} />
          <IonLabel>Personajes</IonLabel>
        </IonTabButton>

        <IonTabButton tab="items" href="/items">
          <IonIcon icon={diamondOutline} />
          <IonLabel>Items</IonLabel>
        </IonTabButton>

        <IonTabButton tab="controls" href="/controls">
          <IonIcon icon={gameControllerOutline} />
          <IonLabel>Controles</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default IonTabNavigator;
