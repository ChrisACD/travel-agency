
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { propTypes } from "react-bootstrap/esm/Image";



function MainContain() {
    

function handleClick(e){
    e.preventDefault();
}


   return(

       <div className="App">

         <div id="main-image" 
             style={{background: "url(" + "../original.jpg" + ")", 
            height:'800px', 
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat' }}>

         <div className="wrapper">
         <h2>Organiser votre <br/> <strong> Voyage sur mesure </strong> </h2>
         <a href="#" className="button-1"> par ici </a>    
         </div>
         </div>
          
          <div id="steps">

              <div className="wrapper">
                  
                  <ul className="stepIn">
                     
                  <li key="id1" id="step-1" style={{background: 'url(../stylo.png) no-repeat top center' }}>
                  <h4> Planifier </h4>
                   <p> Confiez nous vos reves d'evasion : en famille ou entre amis, nous trouverons la formule qui comblera vos attentes</p>
                  </li>

                  <li key="id2" id="step-2" style={{background: 'url(../diplom.png) no-repeat top center' }} >
                  <h4> Organiser </h4>
                  <p> Beneficiez de l'expertise de nos specialites de chaque destinations, il vous accompagnent dans la realisation de votre voyage.</p>
                  </li>

                  <li key="id3" id="step-3" style={{background: 'url(../fusee.png) no-repeat top center ' }} > 
                 <h4> voyager </h4>
                 <p> Nous nous chargeons d'assurer votre securite et de veiller sur votre senerite tout au long de votre voyage</p>
                 </li> 
                  
                 <div className="clear"></div>
                 
                 </ul>
              </div>
          </div>

          <div id="possibilities">
           
          <div className="wrapper">

          <article style={{backgroundImage: "url(../campingCar.jpg)"}}>
          <div className="overlay">
          <h4> Partez en Famille</h4>
          <p> <small>Offrez le meilleur a ceux que vous aimez et partager des moments fabuleux  </small></p>
          <a href="#" className="button-2" onClick={handleClick}  > plus d'infos </a>
          </div> 
          </article>
        
         <article style={{backgroundImage: "url(../montagneBlanche.jpg)"}} >
          <div className="overlay">   
          <h4> Envie de s'evader</h4>
           <p> <small> Parfois un peu d'evasion serait le bienvenue et ferait le plus grand bien ! </small></p>
          <a href="#" className="button-2" onClick={handleClick} > plus d'infos </a>
          </div>
          </article>
          <div className="clear"></div> 
          </div>         
          </div>


      </div>  
   );
}


export default MainContain;