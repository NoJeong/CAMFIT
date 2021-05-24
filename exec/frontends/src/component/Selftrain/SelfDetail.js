// import React, { Component} from 'react';
import { Carousel, Button, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import { Layout } from "antd";
import { useStore } from "react-redux";
import { API_BASE_URL } from "../../constants";

import "../../pages/page.css";

function SelfDetail(props) {
  const store = useStore();
  const TrainInfo = store.getState().selftrainlist.list;
  const [tmp, setTmp] = useState("");
  const changeStore = () => {
    setTmp(1);
  };
  const unsubscribe = store.subscribe(changeStore);
  const { Content } = Layout;
  const login = window.localStorage.getItem("token");
  let trainId = null;
  if (props.trainId["id"] === "1") {
    trainId = "shoulder";
  } else if (props.trainId["id"] === "2") {
    trainId = "core-";
  } else if (props.trainId["id"] === "3") {
    trainId = "arm";
  } else {
    trainId = "leg";
  }
  var detail = null;
  if (TrainInfo) {
    detail = (
      <Col>
        <Content
          style={{
            padding: "0 24px",
            minHeight: 280,
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Row
            style={{
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Col>
              <Carousel
                className="my-auto"
                style={{
                  background: "#E0ECEA",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
              >
                <Carousel.Item>
                  <img
                    className="d-block"
                    // width="500px"
                    height="500px"
                    src={API_BASE_URL + TrainInfo[props.id].thumbnail}
                    alt="First slide"
                    style={{ margin: "auto" }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block"
                    // width="500px"
                    height="500px"
                    src={API_BASE_URL + TrainInfo[props.id].thumbnail2}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block"
                    // width="500px"
                    height="500px"
                    src={API_BASE_URL + TrainInfo[props.id].thumbnail3}
                    alt="First slide"
                  />

                  {/* <Carousel.Caption>
                          <h3 style={{color:'black'}}>Third slide label</h3>
                          <p style={{color:'black'}}>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                      </Carousel.Caption> */}
                </Carousel.Item>
              </Carousel>
            </Col>
            <Col>
              <div
                className="col text-align-center exborder myttf"
                style={{ weight: "400px", height: "500px" }}
              >
                <h1 className="myttf">{TrainInfo[props.id].title}</h1>
                <h2 className="myttf">{TrainInfo[props.id].content}</h2>

                {TrainInfo[props.id].id == "9" ||
                TrainInfo[props.id].id == "12" ||
                TrainInfo[props.id].id == "13" ||
                TrainInfo[props.id].id == "14" ? (
                  <Button
                    className="myttf"
                    href={"/selftrain/exercise/" + trainId}
                  >
                    운동 시작 하기
                  </Button>
                ) : (
                  <Button className="myttf">준비중인 서비스 입니다!</Button>
                )}
              </div>
            </Col>
          </Row>
        </Content>
      </Col>
    );
  }
  return detail;
}

export default SelfDetail;
