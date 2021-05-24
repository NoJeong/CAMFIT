// import React, { Component} from 'react';
import { ListGroup } from "react-bootstrap";
import { selftrainlist } from "../../_actions/index";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./train.css";



function Selfdetailcate(props) {
  const dispatch = useDispatch();

  const [TrainInfo, setTrainInfo] = useState([]);


  useEffect(() => {
    let trainId = props.trainId["id"];
    // console.log(trainId, "카테고리");
    dispatch(selftrainlist(trainId)).then(res => {
      const tmp_list = res.payload;
      setTrainInfo(tmp_list);
      // console.log(TrainInfo);
    });
  }, [dispatch]);

  const category = TrainInfo.map((cate, index) => (
    <ListGroup.Item style={{ height: "80px" }} action key={index} onClick={() => props.setId(index)} className="catecol">
      <h2 align="center" style={{color:"#61D6C1"}}>{cate.title}</h2>
    </ListGroup.Item>
  ));

  return <ListGroup variant="flush" className="catecol">{category}</ListGroup>;
}

export default Selfdetailcate;
