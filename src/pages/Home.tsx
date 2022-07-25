import {      IonButtons, IonCard,  IonCardHeader,  IonCardTitle, IonCol, IonContent,   IonGrid,   IonHeader, IonItem, IonMenuButton,   IonPage, IonRow,  IonTitle, IonToolbar } from '@ionic/react';
import moviesJason from './../assets/movies.json';



const Home: React.FC = () => {
 
  const movies=moviesJason.slice(0,5);  
  return (
    
    <IonPage>        
       <IonHeader>        
    <IonToolbar>
    <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>         
        <IonTitle>5 Películas </IonTitle> 
        </IonToolbar>                     
            </IonHeader>   
      <IonContent> 
      <IonGrid>
      {movies.map(movie=>{
          const imageUrl="https://image.tmdb.org/t/p/w300" + movie.poster_path;
          return(
        <IonRow key={movie.id}>
          <IonCol className='ion-text-center'> 
        <IonCard>
              <IonCardHeader   >            
            <IonCardTitle>{movie.title}</IonCardTitle>
       <IonItem routerLink="/peliculas"  routerDirection='none'>         
            <img  
  width={230}
  height={345}
  src={imageUrl} alt={movie.title} />       
          </IonItem>
          </IonCardHeader>              
           </IonCard>
           </IonCol>
           </IonRow>
           )})}
           </IonGrid>   
           </IonContent>  
                 
          </IonPage>
          
  );
};

export default Home;
