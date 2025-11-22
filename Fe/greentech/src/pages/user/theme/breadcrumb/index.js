import { memo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.scss";

import slide1 from "../../../../assets/user/images/banner.jpg";
import slide2 from "../../../../assets/user/images/Slide2.png";
import slide3 from "../../../../assets/user/images/slide3.jpg";

const Breadcrumb = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    const slides = [
        { id: 1, image: slide1, title: "Banner 1" },
        { id: 2, image: slide2, title: "Banner 2" },
        { id: 3, image: slide3, title: "Banner 3" },
    ];

    return (
        <div className="breadcrumb">
            <Carousel
                responsive={responsive}
                autoPlay={true}
                autoPlaySpeed={5000}
                transitionDuration={2500}
                infinite={true}
                showDots={true}
                swipeable={true}
                draggable={true}
                keyBoardControl={true}
                containerClass="carousel-container"
                itemClass="carousel-item-breadcrumb"
            >
                {slides.map((slide) => (
                    <div className="slide-wrapper" key={slide.id}>
                        <img src={slide.image} alt={slide.title} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default memo(Breadcrumb);