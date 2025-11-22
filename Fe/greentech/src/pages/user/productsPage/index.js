import React, { useState } from "react";
import "./style.scss";
import { AiOutlineDown } from "react-icons/ai";
import cat1Img from "assets/user/images/cat1.jpg";
import cat2Img from "assets/user/images/cat2.jpg";
import cat3Img from "assets/user/images/cat3.jpg";
import cat4Img from "assets/user/images/cat4.jpg";
import cat5Img from "assets/user/images/cat5.jpg";
import { ProductCard } from "component";
const products = [
    { img: cat1Img, name: "Rau mồng tơi", sold: 9, price: 50000, oldPrice: 55000 },
    { img: cat2Img, name: "Rau dền", sold: 15, price: 40000, oldPrice: 45000 },
    { img: cat3Img, name: "Thịt bò", sold: 21, price: 120000, oldPrice: 130000 },
    { img: cat4Img, name: "Chôm chôm", sold: 8, price: 60000, oldPrice: 70000 },
    { img: cat5Img, name: "Súp lơ", sold: 5, price: 30000, oldPrice: 35000 },
];

const ProductPage = () => {
    const [showPriceDropdown, setShowPriceDropdown] = useState(false);
    const [selectedPrices, setSelectedPrices] = useState([]);
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("Phân loại");
    const categoryOptions = ["Phân loại", "Trái cây tươi", "Gọt sẵn"];
    const priceOptions = [
        { label: "Dưới 100.000đ", min: 0, max: 100000 },
        { label: "100.000đ - 200.000đ", min: 100000, max: 200000 },
        { label: "200.000đ - 300.000đ", min: 200000, max: 300000 },
        { label: "Trên 400.000đ", min: 400000, max: Infinity },
    ];

    const togglePrice = (label) => {
        setSelectedPrices((prev) =>
            prev.includes(label) ? prev.filter((i) => i !== label) : [...prev, label]
        );
    };

    const applyFilter = () => {
        let filtered = products.filter((p) => {
            let inRange = false;

            if (selectedPrices.length > 0) {
                inRange = selectedPrices.some((label) => {
                    const opt = priceOptions.find((o) => o.label === label);
                    return p.price >= opt.min && p.price <= opt.max;
                });
            } else inRange = true;

            if (minPrice || maxPrice) {
                const min = Number(minPrice) || 0;
                const max = Number(maxPrice) || Infinity;
                inRange = p.price >= min && p.price <= max;
            }

            return inRange;
        });

        setFilteredProducts(filtered);
        setShowPriceDropdown(false);
    };

    const clearFilter = () => {
        setSelectedPrices([]);
        setMinPrice("");
        setMaxPrice("");
        setFilteredProducts(products);
    };

    return (
        <div className="container product-page" >
            <div className="header">
                <div className="info">
                    <h2 className="title">Trái cây</h2>
                    <p className="desc">
                        Thư mục có {filteredProducts.length} sản phẩm
                    </p>
                </div>

                <div className="filter-bar">
                    <div className="filter">
                        <button className="dropdown-btn">
                            Phân loại <AiOutlineDown />
                        </button>
                    </div>

                    <div className="filter price-filter">
                        <button
                            className="dropdown-btn"
                            onClick={() => setShowPriceDropdown(!showPriceDropdown)}
                        >
                            Khoảng giá <AiOutlineDown />
                        </button>

                        {showPriceDropdown && (
                            <div className="dropdown-menu">
                                {priceOptions.map((opt) => (
                                    <label key={opt.label}>
                                        <input
                                            type="checkbox"
                                            checked={selectedPrices.includes(opt.label)}
                                            onChange={() => togglePrice(opt.label)}
                                        />
                                        {opt.label}
                                    </label>
                                ))}
                                <div className="price-inputs">
                                    <input
                                        type="number"
                                        placeholder="Tối thiểu"
                                        min="0"
                                        value={minPrice}
                                        onChange={(e) => setMinPrice(e.target.value)}
                                    />
                                    <input
                                        type="number"
                                        placeholder="Tối đa"
                                        min="0"
                                        value={maxPrice}
                                        onChange={(e) => setMaxPrice(e.target.value)}
                                    />
                                </div>
                                <div className="actions">
                                    <button className="apply" onClick={applyFilter}>Áp dụng</button>
                                    <button className="clear" onClick={clearFilter}>Xóa</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="row">
                {products.map((item, key) => (
                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={key}>
                        <ProductCard img={item.img} name={item.name} sold={item.sold} price={item.price} oldPrice={item.oldPrice} rating={item.rating} reviewCount={item.reviewCount} />
                    </div>
                ))

                }

            </div>
        </div>
    );
};
export default ProductPage;
