import React from 'react'
import Slider from 'react-slick'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const Sliders = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    cssEase:"linear"
  };
  return (
    <div className="slider_one_area">
<div className="container">
<div class="row res_padd">
<OwlCarousel className='owl-theme'items="2" autoPlay loop margin={10} nav  >

   {/* <Slider {...settings}> */}
   <div className="item">
  <div className="boxx_sg">
    <img src="images/icon08.jpg" alt="" />
    <div className="containtt_two">
      <span>
        <h1>Simply dummy Offer text here</h1>
        <h2>100% Organic Vegetable</h2>
        <a href="#">Call For Enquiry</a>
      </span>
    </div>
  </div>
</div>
<div className="item">
  <div className="boxx_sg">
    <img src="images/icon33.jpg" alt="" />
    <div className="containtt_one">
      <h1>Simply dummy Offer text here</h1>
      <h2>100% Organic Vegetable</h2>
      <span>
        <img src="images/cruve.png" alt="" />
        <a href="#">
          CALL FOR Enquiry <img src="images/icon07.png" alt="" />
        </a>
      </span>
    </div>
  </div>
</div>
<div className="item">
  <div className="boxx_sg">
    <img src="images/icon34.jpg" alt="" />
    <div className="containtt_two">
      <span>
        <h1>Simply dummy Offer text here</h1>
        <h2>100% Organic Vegetable</h2>
        <a href="#">Call For Enquiry</a>
      </span>
    </div>
  </div>
</div>
<div className="item">
  <div className="boxx_sg">
    <img src="images/icon35.jpg" alt="" />
    <div className="containtt_one">
      <h1>Simply dummy Offer text here</h1>
      <h2>100% Organic Vegetable</h2>
      <span>
        <img src="images/cruve.png" alt="" />
        <a href="#">
          CALL FOR Enquiry <img src="images/icon07.png" alt="" />
        </a>
      </span>
    </div>
  </div>
</div>
<div className="item">
  <div className="boxx_sg">
    <img src="images/icon36.jpg" alt="" />
    <div className="containtt_two">
      <span>
        <h1>Simply dummy Offer text here</h1>
        <h2>100% Organic Vegetable</h2>
        <a href="#">Call For Enquiry</a>
      </span>
    </div>
  </div>
</div>


   {/* </Slider> */}
   </OwlCarousel>

  </div>
  </div>
  </div>
  )
}

export default Sliders