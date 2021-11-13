import react from "react";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  return (
    <div className="container">
      <header className="header">
        <div className="header-main">
          <div className="logo">
            <p>E-commerce</p>
          </div>

          <input type="checkbox" id="check" />
          <label className="btn-check" htmlFor="check">
            <span className="main-tiret"></span>
          </label>

          <nav className="nav-menu">
            <ul className="menu">
              <li className="menu-item">
                {/* <a href="#">Produits</a> */}
                <Link
                  to="/"
                  className={location.pathname == "/" ? "active" : ""}
                >
                  Produits
                </Link>
              </li>
              <li className="menu-item">
                {/* <a href="#">Aimés</a> */}
                <Link
                  to="/aimes"
                  className={location.pathname == "/aimes" ? "active" : ""}
                >
                  Aimés
                </Link>
              </li>
              <li className="menu-item">
                {/* <a href="#">Panier</a> */}
                <Link
                  to="/panier"
                  className={location.pathname == "/panier" ? "active" : ""}
                >
                  Panier
                </Link>
              </li>
            </ul>

            <div className="box-search">
              <input type="search" placeholder="rechercher ..." />
              <button className="btn-search">OK</button>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
