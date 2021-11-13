import react, { useEffect, useState } from "react";
import "./panier.css";

function Panier(props) {
  // console.log('props de panier' , props.cart);

  const [showModal, setShowModal] = useState(false);

  //   useEffect(() => {
  //     setShowModal(false);
  //   }, []);

  function acheter() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  return (
    <div className="panier-container">
      {props.cart.length > 0 ? (
        <div className="selected-products">
          {props.cart.map((elt) => (
            <div className="box-product" key={elt.id}>
              <div className="img-panier-container">
                <img className="img-respensive" src={elt.img} />
              </div>
              <div className="info-product">
                <p className="description">
                  <span> Description :</span> {elt.description}
                </p>
                <p className="quantité">
                  <span> Quantité : </span> {elt.quantity}
                </p>
              </div>

              <div className="prix-product">
                <p>{elt.quantity * elt.price} &euro;</p>
              </div>
            </div>
          ))}

          {/* {props.cart.length > 0 ? ( */}
          <>
            <div className="prix-Total">
              <p>Montant à Payer : {props.montantTotal()} &euro;</p>
            </div>

            <div className="payement">
              <div className="carte-payement">
                <div>
                  <input type="radio" id="paypal" name="pay" />
                  <label htmlFor="paypal">
                    <i className="fa fa-cc-paypal"></i>
                  </label>
                </div>
                <div>
                  <input type="radio" id="mastercard" name="pay" />
                  <label htmlFor="mastercard">
                    <i className="fa fa-cc-mastercard"></i>
                  </label>
                </div>
                <div>
                  <input type="radio" id="discover" name="pay" />
                  <label htmlFor="discover">
                    <i className="fa fa-cc-discover"></i>
                  </label>
                </div>
                <div>
                  <input type="radio" id="visa" name="pay" />
                  <label htmlFor="visa">
                    <i className="fa fa-cc-visa"></i>
                  </label>
                </div>
              </div>

              <div className="num-carte">
                {/* <div> */}
                {/* <span>Numéro: </span> */}
                <input type="text" placeholder="Numéro de la carte" />
                {/* </div> */}
                <button onClick={() => acheter()} className="payement">
                  Payement
                </button>
              </div>
            </div>
          </>
          {/* ) : '' } */}
        </div>
      ) : (
        <p className="aucun-produit">Veuillez choisir des produits à acheter</p>
      )}

      {/* Modal */}

      <div
        className={"modal-bg" + " " + (showModal === true ? "bg-active" : "")}
      >
        <div className="modal-body">
          <div className="modal-head">
            <span onClick={() => closeModal()} className="modal-close">
              x
            </span>
          </div>
          <div className="msg">
            <h2>operation réussite</h2>
            <h4>vous recevrez vos produits dans les brefs délais</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Panier;
