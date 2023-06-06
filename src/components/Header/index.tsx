import { Link } from "react-router-dom";
import "./styles.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="header-content-container container">
        <Link to={"/"}>
          <h1 className="site-name">Meu Site</h1>
        </Link>
        <nav className="navBar">
          <NavLink to="/home" className={({isActive}) => isActive ? "menu-item menu-active" : "menu-item" }>
            Inicio
          </NavLink>
          <NavLink to="/promotion" className={({isActive}) => isActive ? "menu-item menu-active" : "menu-item" }>
            Promoção
            </NavLink>
          <NavLink to="/subscription" className={({isActive}) => isActive ? "menu-item menu-active" : "menu-item" }>
            Participar
            </NavLink>
        </nav>
      </div>
    </header>
  );
}

