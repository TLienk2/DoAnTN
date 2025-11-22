import { memo } from "react";
import "./style.scss";
import { Star, ShoppingBag } from "lucide-react";
import { ROUTERS } from "utils/router";
import { generatePath, useNavigate } from "react-router-dom";

const ProductCard = ({
  id,
  img,
  name,
  sold = 0,
  price = 0,
  oldPrice = 0,
  rating = 0,
  reviewCount = 0,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="product-card"
      onClick={() =>
        navigate(generatePath(ROUTERS.USER.PRODUCT_DETAIL, { id: 1 }))
      }
    >
      <div className="product-image">
        <img src={img} alt={name} />
      </div>

      <div className="product-info">
        <h4>{name}</h4>
        <div className="product-rate">
          <p className="purchases">{sold} Lượt mua</p>
          <div className="rating">
            <Star className="star-icon" size={16} />
            <span>
              {rating} ({reviewCount})
            </span>
          </div>
        </div>

        <div className="price">
          <span className="current">{price?.toLocaleString() || "0"}đ</span>
          <span className="old">{oldPrice?.toLocaleString() || "0"}đ</span>
        </div>

        <div className="actions">
          <button className="buy-now" onClick={(e) => e.stopPropagation()}>
            Mua ngay
          </button>
          <button className="cart-btn" onClick={(e) => e.stopPropagation()}>
            <ShoppingBag size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(ProductCard);
