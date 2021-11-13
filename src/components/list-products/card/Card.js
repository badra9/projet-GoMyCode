import React from "react";
import "./card.css";

function Card(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img
          className="img-respensive"
          src={props.img}
          alt={props.description}
        />
      </div>
      <div className="card-icons">
        <div className="like-product">
          <input type="checkbox" className="heart" id={props.identifiant} />
          <label htmlFor={props.identifiant}><i 
          className="fas fa-heart"
          onClick={() => props.aime(props.elt)}
          ></i></label>
        </div>
        <div className="add-to-cart">
          <i
            className="fas fa-shopping-cart"
            onClick={() => props.addToCart(props.elt)}
          ></i>
        </div>
      </div>
      <div className="card-text">
        <h4>{props.description}</h4>
        <span>{props.price} &euro;</span>
      </div>
    </div>
  );
}
export default Card;
