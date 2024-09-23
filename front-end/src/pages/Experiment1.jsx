import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { CardBody, CardContainer, CardItem } from "../components/UI/3d-card";

// Import Swiper styles
import "swiper/css";
import { Link } from "react-router-dom";

import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Mousewheel, FreeMode, Pagination } from "swiper/modules";

export default function App() {
  var data = [
    {
      name: "WorkOut Planning",
      img: "https://i.pinimg.com/564x/bc/d8/28/bcd8283779fa74d1735143974325a30c.jpg",
    },
    {
      name: "Diet Planning",
      img: "https://i.pinimg.com/564x/06/ab/b1/06abb1d19648faebb2ebd29df63af696.jpg",
    },
    {
      name: "YOGA",
      img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_400,q_auto:eco,dpr_2,f_auto,fl_progressive//image/diy/1036dfa9-a6fe-40c6-a3ba-5c537672e357",
    },
    {
      name: "WorkOut Planning",
      img: "https://i.pinimg.com/564x/bc/d8/28/bcd8283779fa74d1735143974325a30c.jpg",
    },
    {
      name: "Diet Planning",
      img: "https://i.pinimg.com/564x/06/ab/b1/06abb1d19648faebb2ebd29df63af696.jpg",
    },
    {
      name: "YOGA",
      img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_400,q_auto:eco,dpr_2,f_auto,fl_progressive//image/diy/1036dfa9-a6fe-40c6-a3ba-5c537672e357",
    },
    {
      name: "WorkOut Planning",
      img: "https://i.pinimg.com/564x/bc/d8/28/bcd8283779fa74d1735143974325a30c.jpg",
    },
    {
      name: "Diet Planning",
      img: "https://i.pinimg.com/564x/06/ab/b1/06abb1d19648faebb2ebd29df63af696.jpg",
    },
    {
      name: "YOGA",
      img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_400,q_auto:eco,dpr_2,f_auto,fl_progressive//image/diy/1036dfa9-a6fe-40c6-a3ba-5c537672e357",
    },
    {
      name: "WorkOut Planning",
      img: "https://i.pinimg.com/564x/bc/d8/28/bcd8283779fa74d1735143974325a30c.jpg",
    },
    {
      name: "Diet Planning",
      img: "https://i.pinimg.com/564x/06/ab/b1/06abb1d19648faebb2ebd29df63af696.jpg",
    },
    {
      name: "YOGA",
      img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_400,q_auto:eco,dpr_2,f_auto,fl_progressive//image/diy/1036dfa9-a6fe-40c6-a3ba-5c537672e357",
    },
  ];
  const [first, setfirst] = useState(data.length);

  return (
    <div className="banner">
      <div className="slider" style={{ "--quantity": 10 }}>
        <div className="item" style={{ "--position": 1 }}>
          <img src="/assests/images/dragon_1.jpg" alt="" />
        </div>
        <div className="item" style={{ "--position": 2 }}>
          <img src="/assests/images/dragon_2.jpg" alt="" />
        </div>
        <div className="item" style={{ "--position": 3 }}>
          <img src="/assests/images/dragon_3.jpg" alt="" />
        </div>
        <div className="item" style={{ "--position": 4 }}>
          <img src="/assests/images/dragon_4.jpg" alt="" />
        </div>
        <div className="item" style={{ "--position": 5 }}>
          <img src="/assests/images/dragon_5.jpg" alt="" />
        </div>
        <div className="item" style={{ "--position": 6 }}>
          <img src="/assests/images/dragon_6.jpg" alt="" />
        </div>
        <div className="item" style={{ "--position": 7 }}>
          <img src="/assests/images/dragon_7.jpg" alt="" />
        </div>
        <div className="item" style={{ "--position": 8 }}>
          <img src="/assests/images/dragon_8.jpg" alt="" />
        </div>
        <div className="item" style={{ "--position": 9 }}>
          <img src="/assests/images/dragon_9.jpg" alt="" />
        </div>
        <div className="item" style={{ "--position": 10 }}>
          <img src="/assests/images/dragon_10.jpg" alt="" />
        </div>
      </div>
      <div className="content">
        <div className="author">
          <div className="model"></div>
        </div>
      </div>
    </div>
  );
}
