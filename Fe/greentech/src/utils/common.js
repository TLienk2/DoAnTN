import cat1Img from "assets/user/images/cat1.jpg";
import cat2Img from "assets/user/images/cat2.jpg";
import cat3Img from "assets/user/images/cat3.jpg";
import cat4Img from "assets/user/images/cat4.jpg";
import cat5Img from "assets/user/images/cat5.jpg";

export const featproducts = {
    all: {
        title: "Toàn bộ sản phẩm",
        products: [
            { img: cat1Img, name: "Rau mồng tơi", sold: 9, price: 50000, oldPrice: 55000 },
            { img: cat2Img, name: "Rau dền", sold: 15, price: 40000, oldPrice: 45000 },
            { img: cat3Img, name: "Thịt bò", sold: 21, price: 120000, oldPrice: 130000 },
            { img: cat4Img, name: "Chôm chôm", sold: 8, price: 60000, oldPrice: 70000 },
            { img: cat5Img, name: "Súp lơ", sold: 5, price: 30000, oldPrice: 35000 },
        ],
    },
    fruit: {
        title: "Trái cây tươi",
        products: [
            {
                img: cat1Img,
                name: "Cam tươi",
                price: 100000,
            },
        ],
    },
};