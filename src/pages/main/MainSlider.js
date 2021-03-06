import React, { Component } from "react";
import Slider from "react-slick";
import { withRouter, Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "inherit",
        color: "#ffff",
        position: "absolute",
        top: "50%",
        right: "30px",
      }}
      onClick={onClick}
    ></div>
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
        background: "inherit",
        position: "absolute",
        top: "50%",
        left: "30px",
        zIndex: "1",
      }}
      onClick={onClick}
    />
  );
}

class MainSlider extends Component {
  state = {
    slider: {
      firstSlider: [],
    },
  };

  componentDidMount() {
    fetch("http://127.0.0.1:8000/frip?slider=True")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          slider: {
            firstSlider: res.slider.firstSlider,
          },
        });
      });
  }

  render() {
    console.log("first: ", this.state.slider.firstSlider);
    const { slider } = this.state;

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      duration: 1500,
      transitionDuration: 500,
      infinite: true,
      indicators: true,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div>
        <Slider {...settings}>
          {slider.firstSlider.map((item, idx) => {
            return (
              <Link to={idx === 1 ? "/surfing" : ""} key={"item" + idx}>
                <img src={item} alt="" />
              </Link>
            );
          })}
          {/* <Link to="#">
            <img src={imgSrc[0]} alt="" />
          </Link>
          <Link to="#">
            <img src={imgSrc[1]} alt="" />
          </Link>
          <Link to="#">
            <img src={imgSrc[2]} alt="" />
          </Link>
          <Link to="#">
            <img src={imgSrc[3]} alt="" />
          </Link>
          <Link to="#">
            <img src={imgSrc[4]} alt="" />
          </Link>
          <Link to="#">
            <img src={imgSrc[5]} alt="" />
          </Link> */}
        </Slider>
      </div>
    );
  }
}
export default MainSlider;
