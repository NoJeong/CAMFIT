import React, { useEffect, useState } from "react";
import InfoMain from "../../component/Info/InfoMain";
import "./info.css"
import { useDispatch } from "react-redux";
import { infodetail } from "../../_actions/index";

import "../../pages/page.css"

function InfoDetail(props) {
  const dispatch = useDispatch();
  const [DetailInfo, setDetailInfo] = useState([]);

  useEffect(() => {
    let infoId = props.match.params.id;
    // console.log(infoId, "아이디");
    dispatch(infodetail(infoId)).then((res) => {
      // console.log(res.payload, "payload");
      const infolist = res.payload;
      setDetailInfo(infolist);
      // console.log(DetailInfo);
    });
  }, []);

  return (
    <div className="infodetail myttf">
      <InfoMain
        imgg={DetailInfo.image}
        content={DetailInfo.content}
        title={DetailInfo.title}
        updated={DetailInfo.updated_at}
      />
    </div>
  );
}

export default InfoDetail;
