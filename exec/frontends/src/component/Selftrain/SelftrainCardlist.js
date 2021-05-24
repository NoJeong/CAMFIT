import React, { useEffect, useState } from "react";
import "./train.css";
import "../Info/info.css";
import { Card, Col } from "react-bootstrap";
import { Grid } from "semantic-ui-react";
import Slider from "react-slick";
// import { useDispatch } from "react-redux";
import { useDispatch, useStore } from "react-redux";
import { selftrainlist } from "../../_actions/index";
import { API_BASE_URL } from "../../constants";
import ArrowNext from "./ArrowNext";

function SelftrainCardlist(props) {
  const dispatch = useDispatch();
  const store = useStore();
  const [TrainInfo, setTrainInfo] = useState([]);
  useEffect(() => {
    dispatch(selftrainlist(0)).then((res) => {
      const tmp_list = res.payload;
      setTrainInfo(tmp_list);
    });
  }, [dispatch]);

  const changeinfo = () => {
    setTrainInfo(store.getState().selftrainlist.list);
  };
  const unsubscribe = store.subscribe(changeinfo);
  // unsubscribe()
  const infocard = TrainInfo.map((train) => (
    <div className="outer">
      <Grid columns="equal">
        <Grid.Column>
          <Col md="auto">
            <Card
              style={{ width: "18rem", margin: "auto"}}
              className="bg-dark text-white"
              key={train.id}
            >
              <Card.Img
                width="300px"
                height="200px"
                variant="top"
                src={API_BASE_URL + train.thumbnail}
              />
              <Card.ImgOverlay>
                <div class="inner">
                  <Card.Title>
                    <a href={`/selftrain/detail/${train.id}`}>{train.title}</a>
                  </Card.Title>
                </div>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Grid.Column>
      </Grid>
    </div>
  ));
  var settings = {
    arrows: true,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 4,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="site-content2">
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 380 }}
      >
        <Slider {...settings} className="multi2">
          <ArrowNext />
          {infocard}
        </Slider>
      </div>
    </div>
  );
}
export default SelftrainCardlist;
