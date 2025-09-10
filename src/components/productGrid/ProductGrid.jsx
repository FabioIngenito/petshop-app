import React from "react";
import ProductCard from "../productCard/ProductCard";
import ShopSidebar from "../shopSidebar/ShopSidebar";
import Pagination from "../pagination/Pagination";
import "./ProductGrid.css";

const todosProdutos = [
  { id: 1, name: "Camiseta", price: 29.99 },
  { id: 2, name: "Calça Jeans", price: 79.99 },
  { id: 3, name: "Tênis", price: 120.0 },
  { id: 4, name: "Boné", price: 19.99 },
  { id: 5, name: "Mochila", price: 150.5 },
  { id: 6, name: "Relógio", price: 250.0 },
  { id: 7, name: "Óculos de Sol", price: 180.75 },
  { id: 8, name: "Jaqueta", price: 300.0 },
  { id: 9, name: "Meias", price: 12.5 },
  { id: 10, name: "Tênis de Corrida", price: 130.0 },
  { id: 11, name: "Camisa Social", price: 45.0 },
  { id: 12, name: "Cinto", price: 35.0 },
  { id: 13, name: "Carteira", price: 60.0 },
  { id: 14, name: "Luvas", price: 25.0 },
  { id: 15, name: "Gorro", price: 20.0 },
  { id: 16, name: "Blusa de Frio", price: 100.0 },
  { id: 17, name: "Shorts", price: 40.0 },
  { id: 18, name: "Chinelo", price: 15.0 },
  { id: 19, name: "Sandália", price: 50.0 },
  { id: 20, name: "Bolsa", price: 200.0 },
  { id: 21, name: "Pulseira", price: 45.5 },
  { id: 22, name: "Brinco", price: 60.0 },
  { id: 23, name: "Colar", price: 80.0 },
  { id: 24, name: "Camiseta Regata", price: 25.0 },
  { id: 25, name: "Calça Legging", price: 70.0 },
  { id: 26, name: "Jaqueta Corta Vento", price: 150.0 },
  { id: 27, name: "Moletom", price: 90.0 },
  { id: 28, name: "Tênis Casual", price: 110.0 },
  { id: 29, name: "Relógio Digital", price: 300.0 },
  { id: 30, name: "Carteira Masculina", price: 55.0 },
];

const listaDeCategorias = [
  { nome: "Brinquedos", qtd: 32 },
  { nome: "Roupas", qtd: 30 },
  { nome: "Comidas", qtd: 100 },
];

const listaDeMarcas = [
  { nome: "Royal Canin", qtd: 30 },
  { nome: "K9 Spirit", qtd: 20 },
  { nome: "Premier", qtd: 10 },
];

const ProductGrid = () => {
  const [paginaAtual, setPaginaAtual] = React.useState(1);
  const produtosPorPagina = 6;
  // O ceil serve para arredondar para cima
  // todosProdutos.length é o comprimento da lista de produtos
  const totalDePaginas = Math.ceil(todosProdutos.length / produtosPorPagina);
  const indiceUltimoProduto = paginaAtual * produtosPorPagina;
  const indicePrimeiroProduto = indiceUltimoProduto - produtosPorPagina;
  const produtosAtuais = todosProdutos.slice(
    indicePrimeiroProduto,
    indiceUltimoProduto
  );

  const mudarPaginaAtual = (numeroDaPagina) => {
    setPaginaAtual(numeroDaPagina);
  };

  return (
    <div className="product-grid-container">
      <ShopSidebar
        listaDeCategorias={listaDeCategorias}
        listaDeMarcas={listaDeMarcas}
      />
      <main className="product-list-section">
        <header className="product-list-header">
          <p>
            Mostrando {indicePrimeiroProduto + 1} até{" "}
            {Math.min(indicePrimeiroProduto, todosProdutos.length)} de{" "}
            {todosProdutos.length} resultados.
          </p>

          <div className="sort-by">
            <label htmlFor="sort">Ordenar por: </label>
            <select name="sort" id="sort">
              <option value="default">Mais recente</option>
              <option value="price-asc">Preço: menor ao maior</option>
              <option value="price-desc">Preço: maior ao menor</option>
              <option value="name-asc">Nome: A-Z</option>
            </select>
          </div>
        </header>

        <div className="products-grid">
          {produtosAtuais.length === 0 ? (
            <p>Nenhum produto encontrado.</p>
          ) : (
            produtosAtuais.map((produto) => (
              <ProductCard key={produto.id} product={produto} />
            ))
          )}
        </div>

        <Pagination
          totalDePaginas={totalDePaginas}
          paginaAtual={paginaAtual}
          mudarPaginaAtual={mudarPaginaAtual}
        />
      </main>
    </div>
  );
};

export default ProductGrid;
