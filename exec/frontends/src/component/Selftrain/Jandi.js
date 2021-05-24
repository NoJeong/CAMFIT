import React, { useState } from "react";
import { Steps, Popover } from "antd";
import './train.css'
import { useDispatch } from "react-redux";
import {getjandi} from "../../_actions/index"
function Jandi() {
  const { Step } = Steps;
  const dispatch = useDispatch();
  const [cnt, setCnt] = useState(0);
  const customDot = (dot, { status, index }) => (
    <Popover
      content={ 
          <span>
          힘내세요!
          </span>
  
      }
    >
      {dot}
    </Popover>
    
  );
  
  const jandi = dispatch(getjandi()).then((res) => {
    setCnt(res.payload.length)
  })
  
  
  return (
    <div
      style={{ marginTop: "100px", marginRight: "200px", marginLeft: "80px", justifyContent:'center'}}
    >
      <Steps current={cnt} progressDot={customDot}>
        <Step title="시작" description="운동을 시작해보세요" />
        <Step title="" description="" />
        <Step title="" description="" />
        <Step title="LV.헬린이" description="자주 운동하면 LV.헬창으로!" />
        <Step title="" description="" />
        <Step title="" description="" />
        <Step title="LV.헬스보이" description="이제 슬슬 운동이 재밌나여?" />
        <Step title="" description="" />
        <Step title="" description="" />
        <Step title="LV.헬창" description="꾸준한 당신에게 박수를!" />
      </Steps>
    </div>
  );
}

export default Jandi;
