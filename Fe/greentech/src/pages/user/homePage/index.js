import { memo } from "react";
import "react-multi-carousel/lib/styles.css";
import { Star, ShoppingBag } from "lucide-react";
import cat1Img from "assets/user/images/cat1.jpg";
import cat2Img from "assets/user/images/cat2.jpg";
import cat3Img from "assets/user/images/cat3.jpg";
import cat4Img from "assets/user/images/cat4.jpg";
import cat5Img from "assets/user/images/cat5.jpg";
import bannerve from "assets/user/images/banner-vegetable.png";
import banner1 from "assets/user/images/banner1.png";
import banner2 from "assets/user/images/banner2.png";
import banner3 from "assets/user/images/banner3.png";
import "./style.scss";
import { featproducts } from "utils/common"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ProductCard from "component/ProductCard";
export const products = [
    { img: cat1Img, name: "Rau mồng tơi", sold: 9, price: 50000, oldPrice: 55000 },
    { img: cat2Img, name: "Rau dền", sold: 15, price: 40000, oldPrice: 45000 },
    { img: cat3Img, name: "Thịt bò", sold: 21, price: 120000, oldPrice: 130000 },
    { img: cat4Img, name: "Chôm chôm", sold: 8, price: 60000, oldPrice: 70000 },
    { img: cat5Img, name: "Súp lơ", sold: 5, price: 30000, oldPrice: 35000 },
];
const HomePage = () => {
    const responsive = {
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
    };


    const renderFeaturedProducts = (data) => {
        const tabList = [];
        const tabPanels = [];
        Object.keys(data).forEach((key, index) => {
            // Tạo danh sách tab
            tabList.push(<Tab key={index}>{data[key].title}</Tab>);
            // Render danh sách sản phẩm trong từng tab

            const tabPanel = [];
            data[key].products.forEach((item, j) => {
                tabPanel.push(
                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={j}>
                        <ProductCard img={item.img} name={item.name} sold={item.sold} price={item.price} oldPrice={item.oldPrice} rating={item.rating} reviewCount={item.reviewCount} />
                    </div>
                );
            });
            tabPanels.push(tabPanel);
        });

        return (
            <Tabs>
                <TabList>{tabList}</TabList>
                {tabPanels.map((item, key) => (
                    <TabPanel key={key}>
                        <div className="row">{item}</div>
                    </TabPanel>
                ))}
            </Tabs>
        );
    };

    return (
        <>
            {/* Promo Banner Begin */}
            <div className="container promo_banner">
                <div className="promo_content">
                    <div className="promo_image">
                        <img src={bannerve} alt="Fresh food banner" />
                    </div>
                    <div className="promo_text">
                        <h3>Thực phẩm sạch - Giao tận tay</h3>
                        <p>Thực phẩm sạch – Tươi ngon mỗi ngày</p>
                        <span>
                            Chào mừng bạn đến với nền tảng đặt hàng Thực phẩm sạch, nơi chúng tôi mang đến cho bạn những sản phẩm an toàn, tươi ngon và giàu dinh dưỡng, được tuyển chọn kỹ lưỡng từ nông trại đến bàn ăn.
                            <br />
                            Với sứ mệnh chăm sóc sức khỏe từ gốc, chúng tôi cam kết chỉ cung cấp những thực phẩm đạt chuẩn, không hóa chất, không chất bảo quản, để mỗi bữa ăn của gia đình bạn luôn trọn vẹn vị thiên nhiên.
                        </span>
                    </div>
                    <div className="promo_badge">60% OFF</div>

                </div>

                <div className="container promo_banners">
                    <img src={banner1} />
                    <img src={banner2} />
                    <img src={banner3} />
                </div>
                <div className="container container_categories_slider">

                </div>


            </div>
            {/* Promo Banner End */}
            {/* Features Begin */}
            <div className="container">
                <div className="featured">
                    <div className="section_title">
                        <h2>Sản phẩm nổi bật</h2>
                    </div>
                    <div className="products-wrapper">
                        {renderFeaturedProducts(featproducts)}
                    </div>
                </div>

            </div>
            {/* Features End */}

        </>
    );
};

export default memo(HomePage);
