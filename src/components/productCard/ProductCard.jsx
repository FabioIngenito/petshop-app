import "./ProductCard.css";
import { Heart } from "akar-icons";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
        <button className="favorite-button">
          {/* ❤️ -&gt; */}
          <Heart size={24} />
        </button>
      </div>
      <div className="product-info">
        <h4 className="product-name">{product.name}</h4>
        <p className="product-price">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
