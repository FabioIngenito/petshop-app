import { ChevronRight } from "akar-icons";
import "./categoryCard.css";

const CategoryCard = ({ category }) => {
  return (
    <div className="category-card">
      <div className="card-image-wrapper">
        <img
          className="category-image"
          src={category.image}
          alt={category.title}
        />
      </div>
      <div className="card-info">
        <div className="card-text">
          <h3 className="card-title">{category.title}</h3>
          <p className="product-count">{category.productCount}</p>
        </div>
        <div className="arrow-icon">
          <ChevronRight />
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
