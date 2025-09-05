import "./ShopSidebar.css";
import Slider from "rc-slider";
import { useState } from "react";

// export function ContadorDeCliques() {
//   const [cliques, setCliques] = useState(0);

//   const quandoClicado = () => {
//     setCliques(cliques + 1);
//   };

//   return (
//     <div>
//       <h3>Exemplo 1: Contador de Cliques</h3>
//       <p>Você clicou {cliques} vezes</p>

//       <button onClick={quandoClicado}>Clique aqui</button>
//     </div>
//   );
// }

// export function AlternadorDeTexto() {
//   const [texto, setTexto] = useState("Texto Inicial");

//   const alternarTexto = () => {
//     setTexto((textoAnterior) =>
//       textoAnterior === "Texto Inicial" ? "Texto Alterado" : "Texto Inicial"
//     );
//   };

//   return (
//     <div>
//       <h3>Exemplo 2: Alternador de Texto</h3>
//       <p>{texto}</p>

//       <button onClick={alternarTexto}>Clique aqui</button>
//     </div>
//   );
// }

const ShopSidebar = ({ listaDeCategorias }) => {
  const [priceRange, setPriceRange] = useState([0, 500]);

  return (
    <aside className="sidebar">
      <div className="filter-group">
        <h4>Filtrar por categoria</h4>
        <ul>
          {listaDeCategorias.map((categoria) => (
            <li key={categoria.nome} className="check-box-item">
              <input type="checkbox" id={categoria.nome} />
              <span>{categoria.nome}</span>
              <span className="qtd-categoria">{categoria.qtd}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="filter-group">
        <div className="price-filter-container">
          <h4>Filtrar por preço</h4>
          <Slider
            range
            min={0}
            max={500}
            defaultValue={priceRange}
            onChange={(newRange) => setPriceRange(newRange)}
          />
        </div>
      </div>
    </aside>
  );
};

export default ShopSidebar;
