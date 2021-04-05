// import React, { Component} from 'react';
import {
  Carousel,
  Button,
  Row,
  Col,
  Container,
  ListGroup,
} from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import { useDispatch, useStore } from "react-redux";
import { API_BASE_URL } from "../../constants";
import { FcStart } from "react-icons/fc";

function SelfDetail(props) {
  const store = useStore();
  const TrainInfo = store.getState().selftrainlist.list;
  const [tmp, setTmp] = useState('');
  const changeStore = () => {setTmp(1)};
  const unsubscribe = store.subscribe(changeStore);
  const { Header, Content, Footer, Sider } = Layout;
  var detail = null;
  if (TrainInfo) {
    detail = (
      <Col>
      <Content style={{ padding: '0 24px', minHeight: 280, height:'100%', 
            alignItems:'center', 
            justifyContent:'center',
            textAlign:'center' }}>
        <Row style={{
            height:'100%', 
            alignItems:'center', 
            justifyContent:'center',
            textAlign:'center'
            }}>
          <Col>
            <Carousel
              className=" my-auto"
              style={{ background: "gray", marginLeft:'10px',marginRight:'10px' }}
            >
              <Carousel.Item>
                <img
                  className="d-block"
                  width="500px"
                  height="500px"
                  src={API_BASE_URL + TrainInfo[props.id].thumbnail}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
              <img
                  className="d-block"
                  width="500px"
                  height="500px"
                  src={API_BASE_URL + TrainInfo[props.id].thumbnail2}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
              <img
                  className="d-block"
                  width="500px"
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
          
            <div className="col text-align-center exborder" style={{weight:"400px", height:"500px"}}>
              <h1>{TrainInfo[props.id].title}</h1>
              <h2>{TrainInfo[props.id].content}</h2>
              <h3> 운동 관련 설명</h3>
              <Button href="/selftrain/exercise">{ FcStart }운동 시작 하기</Button>
            
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
