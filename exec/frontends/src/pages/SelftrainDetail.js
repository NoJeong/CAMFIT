
import "./page.css";
import "../component/Selftrain/train.css"
import React, { useState } from "react";
import SelfDetail from "../component/Selftrain/SelfDetail";
import Selfdetailcate from "../component/Selftrain/Selfdetailcate";
import { Layout } from 'antd';



function SelftrainDetail(props) {

  const [id, setId] = useState(0)
  const {Sider } = Layout;

  return (
      <Layout className="trainbgr" >
 
    <Sider className="" width={200}>
      
        <div
          style={{ height: "700px", width: "100%" }}
        >
          <Selfdetailcate setId={setId} trainId={props.match.params}></Selfdetailcate>
        </div>
      
      </Sider>
          <SelfDetail id={id} trainId={props.match.params}></SelfDetail>
    
    </Layout>
  );
}

export default SelftrainDetail;
