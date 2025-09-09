import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./ShopSidebar.css";

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

const ShopSidebar = ({ listaDeCategorias, listaDeMarcas }) => {
  const [priceRange, setPriceRange] = useState([0, 500]);

  const aplicarFiltroPreco = () => {
    console.log(
      `Filtro de preço aplicado: R$${priceRange[0]} - R$${priceRange[1]}`
    );
  };

  return (
    <aside className="sidebar">
      <div className="filter-group">
        <h4>Filtrar por categoria</h4>
        <ul>
          {listaDeCategorias.map((categoria) => (
            <li key={categoria.nome} className="checkbox-item">
              <input type="checkbox" id={categoria.nome} />
              <label>{categoria.nome}</label>
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
            styles={{
              track: { backgroundColor: "orange" },
              rail: { backgroundColor: "#ffd8a6" },
              handle: {
                borderColor: "orange",
                backgroundColor: "white",
              },
            }}
          />

          <div className="price-info">
            <span>
              Preço: R${priceRange[0]} - R${priceRange[1]}
            </span>
            <button onClick={() => aplicarFiltroPreco(priceRange)}>
              Aplicar
            </button>
          </div>
        </div>

        <div className="filter-group">
          <h4>Filtrar por Marca</h4>
          <ul>
            {listaDeMarcas.map((marca) => (
              <li key={marca.nome} className="checkbox-item">
                <input type="checkbox" id={marca.nome} />
                <label htmlFor={marca.nome}>{marca.nome}</label>
                <span className="qtd-categoria">{marca.qtd}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default ShopSidebar;
