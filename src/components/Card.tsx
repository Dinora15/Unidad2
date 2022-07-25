
import { IonButtons, IonCard,  IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar} from "@ionic/react";
import React from "react";


const CardPeli: React.FC = () => {
    
        
        return (
        <IonPage>
        <IonHeader>
         <IonToolbar>
         <IonButtons slot="start">
               <IonMenuButton />
             </IonButtons> 
             <IonTitle> Película </IonTitle> 
                 </IonToolbar>
         </IonHeader> 
         <IonContent>
             <IonCard>
             <IonGrid>
                 <IonRow>
                     <IonCol>
                     <h1>Titulo: </h1>              
                     </IonCol>
                 </IonRow>
             </IonGrid>
             </IonCard>
         </IonContent>
     </IonPage>
 )};
  
  export default CardPeli;