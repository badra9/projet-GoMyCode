import React, { useEffect, useState } from "react";
import { Link, Route, Redirect } from 'react-router-dom';
// import data from "../../data/data";
import "./Listproducts.css";
import Card from "./card/Card";
import Cart from "./cart/Cart";
// import Panier from "../panier/panier";

// import data from './data/sacs';

function ListProducts(props) {

  // const [products, setProducts] = useState([...data]),
    
    
    const [findArticleName, setFindArticleName] = useState(""),
          [findArticlePrice, setFindArticlePrice] = useState(""),
          [valid, setValid] = useState(false),
          [articlesFiltres, setArticlesFiltres] = useState([]);


  useEffect(() =>{
    setArticlesFiltres(props.data)
  },[]);

  // console.log('data dans le composant listProducts: ', props.data);

// *********************************** //



// *********************************** //
    
    function valider(){

      setValid(true);

      }
     

    

  /*
    méthode: handleChangeName
      attribuer la valeur saisie par user dans le champ 'search' à la variable d'état findArticleName
  */
    function handleChangeName(e) {
      setFindArticleName(e.target.value);
    }
  /*
    méthode: handleChangePrice
      attribuer la valeur saisie par user dans le champ 'number' à la variable d'état findArticlePrice
  */
    function handleChangePrice(e) {
      setFindArticlePrice(e.target.value);
    }

  /*
    méthode: filteredArticles
      filtrer les produits par rapport aux saisies de user
  */
    function filteredArticles() {
      let tab =[];
      tab = props.data.filter((elt) =>   // products est modifié par data
        elt.description.toLowerCase().includes(findArticleName.toLowerCase())
      );
      // setArticlesFiltres([...tab]);
      if (parseInt(findArticlePrice) > 0) {
        tab = tab.filter((elt) => elt.price <= findArticlePrice);
        // setArticlesFiltres([...tab])
      }
      return tab;
      //setArticlesFiltres(tab)
    }

    // console.log('produit aimés: ', props.liked);
    // console.log(this.state.data);
    return (
       
      <>
         
        <div className="global-container" >  {/*className="global-container" */}
      
          {/* <h1 className="title"> Produit: {category} </h1> */}
          <div className="filter">
            <div className="filter-name">
              <label>Nom : </label>
              <input
                name="findArticleName"
                type="search"
                value={findArticleName}
                onChange={handleChangeName}
              />
            </div>
            <div className="filter-price">
              <label>Prix max : </label>
              <input
                min="0"
                name="findArticlePrice"
                type="number"
                value={findArticlePrice}
                onChange={handleChangePrice}
              />
            </div>
          </div>
          <div className="products-container">
            <div
              className={
                "card-container" +
                " " +
                (props.mvt === true ? "card-container-mvt" : "")
              }
            >
              {filteredArticles().length > 0 ? (   //filteredArticles()
                filteredArticles().map((elt) => (   //filteredArticles()
                  <Card
                    key={elt.id}
                    img={elt.img}
                    description={elt.description}
                    price={elt.price}
                    // addToCart={addToCart}
                    addToCart = {() => props.addToCart(elt)}
                    aime={()=>props.aime(elt)}
                    identifiant={elt.id}
                    elt={elt}
                  />
                ))
              ) : (
                <p className="aucun-produit">
                  Désolé, aucun produit correspond à votre recherche
                </p>
              )}
            </div>

            <div
              className={
                "shopping-cart" + " " + (props.mvt === true ? "shopping-cart-mvt" : "")
              }
            >
              <h2 className="panier">Panier</h2>
              <div className="list-item">
                {props.cart.map((elt) => (
                  <Cart
                    key={elt.id}
                    img={elt.img}
                    description={elt.description}
                    price={elt.price * elt.quantity}
                    quantity={elt.quantity}
                    incrementQuantity={() => props.incrementQuantity(elt)}
                    decrementQuantity={() => props.decrementQuantity(elt)}
                    deleteFromCart={() => props.deleteFromCart(elt)}
                    elt={elt}
                  />
                ))}

                  <div className="box-Validation">
                    {/* <Link to="/panier"><button>Valider</button></Link> */}
                    {/* <button ><Link to="/panier" >Valider<Link /></button> */}
                    <button><Link to="/panier" >Valider</Link></button>
                    <p>Montant total : {props.montantTotal()} </p>
                  </div>

              </div>
            </div>
           </div> {/* fin container */}
          
            
        </div>
        
        
         
         
        



      </>  

      
    )
}
export default ListProducts