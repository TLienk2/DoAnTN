import { memo } from "react";
import "./style.scss";
import { useParams } from "react-router-dom";
import { Star, ShoppingBag } from "lucide-react";
import cat5Img from "assets/user/images/cat5.jpg";
import { ProductCard } from "component";
import { featproducts } from "utils/common"

const ProductDetailPage = () => {
    const { id } = useParams();

    // 🔹 Dữ liệu mẫu (bạn có thể thay bằng API call sau này)
    const product = {
        id: id,
        name: "Chuối tiêu",
        brand: "Đà Lạt",
        origin: "Việt Nam",
        sold: 50000,
        rating: 4.8,
        reviewCount: 150000,
        price: 30000,
        oldPrice: 35000,
        unit: "VND/kg",
        image: cat5Img,
        description:
            "Chuối tiêu - loại quả quen thuộc với vị ngọt thanh, thơm, dẻo, giàu vitamin và khoáng chất. Không chỉ ngon miệng mà còn mang lại nhiều lợi ích cho sức khỏe mỗi ngày."
    };

    const reviews = [
        {
            id: 1,
            name: "Alexander",
            date: "12:00 AM 23/12/2025",
            content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
            rating: 5
        },
        {
            id: 2,
            name: "Alexander",
            date: "12:00 AM 23/12/2025",
            content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
            rating: 5
        },
        {
            id: 3,
            name: "Alexander",
            date: "12:00 AM 23/12/2025",
            content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
            rating: 5
        }
    ];

    return (
        <div className="product-detail container">
            <div className="row product-main">
                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 image-box">
                    <img src={product.image} alt={product.name} />
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 info-box">
                    <h2 className="name">{product.name}</h2>
                    <p>Thương hiệu: {product.brand} | Xuất xứ: {product.origin}</p>
                    <p className="sold">{product.sold.toLocaleString()} lượt mua</p>
                    <div className="rating">
                        <Star size={18} className="star" />
                        <span>{product.rating}</span>
                        <span className="review">({product.reviewCount.toLocaleString()} đánh giá)</span>
                    </div>

                    <div className="price">
                        <span className="current">{product.price.toLocaleString()} {product.unit}</span>
                        <span className="old">{product.oldPrice.toLocaleString()} {product.unit}</span>
                    </div>

                    <div className="quantity">
                        <label>Số lượng:</label>
                        <input type="number" min="1" defaultValue="1" />
                        <span className="price-note">1kg ≈ {product.price.toLocaleString()}đ</span>
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

            <div className="desc-section">
                <div className="section_title">
                    <h4>Đặc điểm:</h4>
                </div>
                <p>{product.description}</p>
            </div>

            <div className="review-section">
                <div className="section_title">
                    <h4>Đánh giá từ khách hàng</h4>
                </div>
                <div className="reviews ">
                    {reviews.map((r) => (
                        <div key={r.id} className="review-card ">
                            <div className="review-header">
                                <div className="avatar">{r.name[0]}</div>
                                <div>
                                    <strong>{r.name}</strong>
                                    <p className="date">{r.date}</p>
                                </div>
                            </div>
                            <div className="review-content">
                                <div className="stars">
                                    {[...Array(r.rating)].map((_, i) => (
                                        <Star key={i} size={14} className="star" />
                                    ))}
                                </div>
                                <p>{r.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="section_title">
                <h4>Sản phẩm liên quan</h4>
            </div>
            <div className="row">
                {featproducts.all.products.map((item, key) => (
                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={key}>
                        <ProductCard img={item.img} name={item.name} sold={item.sold} price={item.price} oldPrice={item.oldPrice} rating={item.rating} reviewCount={item.reviewCount} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default memo(ProductDetailPage);
