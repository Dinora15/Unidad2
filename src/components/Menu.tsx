import { IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonTitle, IonToolbar } from "@ionic/react";
import {bodyOutline} from 'ionicons/icons';
import {bookOutline} from 'ionicons/icons';
import {homeOutline} from 'ionicons/icons';
interface ContainerProps { }

const Menu: React.FC<ContainerProps> = () => {
  return (
    
    <IonMenu side="start" contentId="first">
    <IonHeader>        
      <IonToolbar color="primary">
        <IonTitle>Inicio Menu</IonTitle>
      </IonToolbar>        
            </IonHeader>
    <IonContent>
      <IonList>
      <IonMenuToggle>
        <IonItem routerLink="/home" routerDirection='none' lines='none'>
          <IonIcon color="medium" slot="start" icon={homeOutline}/>
          <IonLabel>Películas</IonLabel>
        </IonItem>
        </IonMenuToggle>
        <IonMenuToggle>
        <IonItem routerLink="/peliculas" routerDirection='none' lines='none'>
          <IonIcon color="medium" slot="start" icon={bodyOutline}/>
          <IonLabel>Título Película</IonLabel>
        </IonItem>
        </IonMenuToggle>
        <IonMenuToggle>
        <IonItem routerLink="/about" routerDirection='none' lines='none'>
          <IonIcon color="medium" slot="start" icon={bookOutline}/>
          <IonLabel>Agregar Película</IonLabel>
        </IonItem>
        </IonMenuToggle>                   
      </IonList>
    </IonContent>
  </IonMenu>
  );
};

export default Menu;
