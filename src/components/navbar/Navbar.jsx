import "./navbar.css";
import { Search, Heart, Cart } from "akar-icons";
import Logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="#" className="logo">
          <img src={Logo} alt="Logo do Petshop" />
        </a>
        <ul className="nav-links">
          {/* 
          <li><a href="#inicio">Início</a></li>
          <li><a href="#comprar">Comprar</a></li>
          <li><a href="#sobrenos">Sobre Nós</a></li>
          <li><a href="#contato">Contato</a></li> 
          */}
          <li>Início</li>
          <li>Comprar</li>
          <li>Sobre Nós</li>
          <li>Contato</li>
        </ul>
        <div className="nav-actions">
          <div className="search-bar">
            <input type="text" placeholder="Pesquise aqui..." />
            <button className="search-icon">
              <Search className="icon" size={20} />
            </button>
          </div>
          <button className="icon-btn">
            <Heart className="black-icon" />
            <span className="badge">0</span>
          </button>
          <button className="icon-btn">
            <Cart />
            <span className="badge">0</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
