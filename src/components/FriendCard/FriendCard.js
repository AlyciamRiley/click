import React from "react";
import "./FriendCard.css";


{/* <button><img src="./img/google.png" alt="my image" onClick={this.myfunction} /></button> */}


const FriendCard = props => (
   <div className="card">
       <div className="img-container"> 
          <button> 
              
          <img alt={props.name} src={props.image} onClick={() => props.clickCard(props.id)} />
              
              
              
              </button>
       </div>

    
            </div>

);

export default FriendCard;