import "./Pagination.css";
import { CircleChevronRightFill } from "akar-icons";

const Pagination = ({ totalDePaginas, paginaAtual, mudarPaginaAtual }) => {
  return (
    <div className="pagination">
      {Array.from({ length: totalDePaginas }, (_, i) => i + 1).map(
        (numeroDaPagina) => (
          <button
            key={numeroDaPagina}
            className={`page-button ${
              paginaAtual === numeroDaPagina ? "active" : ""
            }`}
            onClick={() => mudarPaginaAtual(numeroDaPagina)}
          >
            {numeroDaPagina}
          </button>
        )
      )}
      <button
        className="page-button next"
        onClick={() =>
          paginaAtual < totalDePaginas && mudarPaginaAtual(paginaAtual + 1)
        }
        disabled={paginaAtual === totalDePaginas}
      >
        {/* Próximo &gt; */}
        Próximo ➡️
        {/* Próximo <CircleChevronRightFill strokeWidth={2} size={16} /> */}
      </button>
    </div>
  );
};

export default Pagination;
