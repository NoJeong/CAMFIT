import React, { useState } from "react";
import SelftrainSidebar from "./SelftrainSidebar";
import Jandi from "./Jandi"
import "./train.css";
import "../../pages/page.css"

import { OverlayTrigger, Button, Popover } from "react-bootstrap";
function SelfMain(props) {
  const [Category, setCategory] = useState("팔");
  // const [Vis, setVis] = useState(false);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title><strong>AI 운동 준비사항</strong></Popover.Title>
      <Popover.Content>
        1. <strong>웹 캠</strong>을 준비해주세요.
        <br>
        </br>
        2. 머리부터 발끝까지 <strong>전신을</strong> 웹캠에 담아주세요.
         <br>
        </br>
        3. 스피커를 켜주세요 
        <br>
        </br>
        (AI가 음성으로 자세를 교정해드립니다.)
      </Popover.Content>
    </Popover>
  );
  
  const nickname = window.localStorage.getItem("usernickname");
  return (
    
    <div class="inner2 multi2 myttf">
      {nickname ? (
        <p style={{color:"white"}}>"{nickname}" 님 운동을 시작하시겠습니까?</p>
      ) : (
        <p style={{color:"white"}}>로그인 후 사용해주세요</p>
      )}
      <OverlayTrigger trigger="click" placement="right" overlay={popover}>
        <Button variant="success">AI 운동 가이드</Button>
      </OverlayTrigger>
      <Jandi></Jandi>
       <SelftrainSidebar
        setCategory={setCategory}
        categoryname={Category}
      ></SelftrainSidebar>
      {/* <Col span={12}><Jandi/></Col> */}
    


      {/* <SelftrainCardlist visible={Vis} /> */}
    </div>
    
  );
}

export default SelfMain;
