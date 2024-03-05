import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SliderCarousel = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "red",
          position: "absolute",
          right: "20px",
          // padding: "20px",
          // marginRight: "50px",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          position: "absolute",
          left: "20px",
          background: "green",
          zIndex: 20,
          // marginLeft: "10px",
        }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    dots: true,
    infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    // autoplaySpeed: 2000,
    // cssEase: "linear",
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className=" relative">
      <Slider {...settings}>
        <div>
          <img
            src="https://staticpages.mngbcn.com/homes/images/ss24/teens/febrero/teen_bannerinterior_NN_1502.jpg?imwidth=1440&imdensity=2"
            alt="womenclothes"
            height={"525px"}
            width={"3000px"}
          />
        </div>
        <div>
          <img
            src="https://static.zara.net/photos///contents/mkt/spots/ss24-north-kids-babygirl/subhome-xmedia-07//w/2880/IMAGE-landscape-default-fill-783d66e4-3b1c-4f1f-b33c-148267cd41d4-default_0.jpg?ts=1708011852372"
            alt="kidsclothes"
            height={"525px"}
            width={"3000px"}
          />
        </div>
        <div>
          <img
            src="https://static.zara.net/photos///contents/mkt/spots/ss24-north-kids-mini-baby/subhome-xmedia-07//w/2880/IMAGE-landscape-default-fill-698d52b8-e9ed-49a2-b4d1-e491e18a8125-default_0.jpg?ts=1708013504850"
            alt="kidsclothes"
            height={"525px"}
            width={"3000px"}
          />
        </div>
        <div>
          <img
            src="https://staticpages.mngbcn.com/homes/images/ss24/he/febrero/he_bannerinterior_NN_1502.jpg?imwidth=1440&imdensity=2"
            alt="menclothes"
            height={"525px"}
            width={"3000px"}
          />
        </div>
        <div>
          <img
            src="https://staticpages.mngbcn.com/homes/images/ss24/teens/enero/teeno_interior_NN_1201.jpg?imwidth=1440&imdensity=2"
            alt="menclothes"
            height={"525px"}
            width={"3000px"}
          />
        </div>
        <div>
          <img
            src="https://images.bestsellerclothing.in/live/image/catalog/brandstore/bestseller/banners/ol_2400x950pxSS24HomepageDesktopBaer_12022024.jpg?width=1920&height=760&mode=fill&fill=blur&format=auto"
            alt="menclothes"
            height={"525px"}
            width={"3000px"}
          />
        </div>
      </Slider>
    </div>
  );
};
