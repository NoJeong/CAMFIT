import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import InfoCardList from "./InfoCardList";

import { useDispatch } from "react-redux";
import { infolist } from "../../_actions/index";
// import {ACCESS_TOKEN} from '../../constants'

import "../../pages/page.css"

function InfoCard(props) {
  const dispatch = useDispatch();
  const [FirstInfo, setFirstInfo] = useState([]);

  useEffect(() => {
    dispatch(infolist()).then((res) => {
      // console.log(res.payload, "payload");
      const infoinfo = res.payload;
      setFirstInfo(infoinfo);
      // console.log(FirstInfo, "firstinfo");
      // console.log(typeof FirstInfo);
    });
  }, []);

  const infocard = FirstInfo.map((info, index) => (
    <div>
      {FirstInfo ? (
        <InfoCardList
          content={info.content}
          title={info.title}
          imgg={info.image}
          id={info.id}
          updated={info.updated_at}
          key={index}
        />
      ) : ( 
        <InfoCardList />
      )}
    </div>
  ));

  var settings = {
    dots: true, // 캐러셀의 점을 보여줄 것인지
    infinite: true, // 마지막 장 다음에 첫번째가 나오게 할 것인지
    speed: 500, // 넘어가는 속도는 몇으로 할 것인지
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
      // 반응형 웹 구현 옵션
      {
        breakpoint: 1350, //화면 사이즈 960px
        settings: {
          //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="myttf">
      <Slider {...settings}>{infocard}</Slider>
    </div>
  );
}

export default InfoCard;
