import React, { useState } from "react";
import { BrowserRouter, Link, Route, Switch, Redirect } from "react-router-dom";
// import Accueil from "./components/Accueil";
import Navbar from "./components/navbar/Navbar";

// import Products from "./components/Products";

import "./App.css";

import data from "./components/data/sacs";
import Aimes from "./components/aimes/Aimes";
import Panier from "./components/panier/Panier";
import ListProducts from "./components/list-products/ListProducts";

function App() {
  const [active, setActive] = useState("products");
  const [cart, setCart] = useState([]),
    [mvt, setMvt] = useState(false),
    [liked, setLiked] = useState([]),
    [totalPrice, setTotalPrice] = useState(0);

  console.log("cart: ", cart);
  // ****** début fonctions ******** //
  /*
  méthode: findIndex
  retourne :
          - la cart
          - l'indice de l'élément recherché dans la carte (found)

  */
  function findIndex(elt) {
    let intermediaire = cart;
    let found = intermediaire.findIndex((produit) => produit.id === elt.id);
    return { found, intermediaire };
  }

  // function findIndex(elt, intermediaire) {
  //   // let intermediaire = cart;
  //   let found = intermediaire.findIndex((produit) => produit.id === elt.id);
  //   return { found, intermediaire };
  // }

  /*
        méthode: cancelMvt
            initialise la variable d'état 'Mvt' à false
      
        */
  function cancelMvt() {
    if (cart.length === 0) {
      setMvt(false);
    }
  }
  /*
          méthode: activeMvt
            initialise la variable d'état 'Mvt' à true
      
        */
  function activeMvt() {
    if (mvt === false) {
      setMvt(true);
    }
  }

  /*
          méthode: addToCart
            ajout un produit à la carte
        */
  function addToCart(elt) {
    // mettre la variable mvt en true
    activeMvt();
    const { found, intermediaire } = findIndex(elt);

    // let intermediare = cart;
    // const { found, intermediare } = findIndex(elt);

    if (found === -1) {
      setCart([...intermediaire, elt]);
      // setCart([...cart, elt]);
    } else {
      intermediaire[found].quantity = intermediaire[found].quantity + 1;
      setCart([...intermediaire]);

      // intermediare[found].quantity = intermediare[found].quantity + 1;
      // setCart([...intermediare]);
    }
  }

  /*
          méthode: aime
            ajout un produit au tableau liked
        */
  function aime(elt) {
    const { found, intermediaire } = findIndex(elt);

    if (found === -1) {
      setLiked([...liked, elt]);
    }
  }

  /*
          méthode: incrementQuantity
            incrementer la quantité d'un produit
        */
  function incrementQuantity(elt) {
    const { found, intermediaire } = findIndex(elt);
    //alert(found);
    intermediaire[found].quantity = intermediaire[found].quantity + 1;

    setCart([...intermediaire]);
  }

  /*
          méthode: decrementQuantity
            décrementer la quantité d'un produit
        */
  function decrementQuantity(elt) {
    const { found, intermediaire } = findIndex(elt);

    if (elt.quantity > 1) {
      elt.quantity = elt.quantity - 1;

      setCart([...intermediaire]);
    } else {
      deleteFromCart(elt);
    }

    cancelMvt();
  }

  /*
          méthode: deleteFromCart
            supprimer un produit
        */
  function deleteFromCart(elt) {
    const { found, intermediaire } = findIndex(elt);
    // supprimer l'elt qui a l'indice found
    intermediaire.splice(found, 1);

    setCart([...intermediaire]);

    cancelMvt();
  }

  function montantTotal() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].price * cart[i].quantity;
    }
    return total;
    // setTotalPrice(total)
  }
  // ****** fin fonctions ******* //

  return (
    // <div className="App">
    <BrowserRouter>
      {/* <div className="global-container"> */}

      {/* <ul className="navBar">
              <Link to="/"><li>Home</li></Link> 
              <Link to="/products"><li>Produits</li></Link>
            </ul> */}
      <Navbar />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <ListProducts
              data={data}
              mvt={mvt}
              addToCart={addToCart}
              cart={cart}
              incrementQuantity={incrementQuantity}
              decrementQuantity={decrementQuantity}
              deleteFromCart={deleteFromCart}
              montantTotal={montantTotal}
              aime={aime}
            />
          )}
        />

        {/* <Route path="/products"  component={Products} />   */}
        {/* <Route path="/aimes"  component={Aimes} />  */}
        <Route path="/aimes" render={() => <Aimes liked={liked} />} />

        <Route
          path="/panier"
          render={() => <Panier cart={cart} montantTotal={montantTotal} />}
        />
      </Switch>

      {/* </div> */}
    </BrowserRouter>
    // </div>
  );
}

export default App;
