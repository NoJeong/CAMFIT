import React from "react";
import "./page.css";
import MainTop from "../component/Mainpage/MainTop";
import mainvd from "../component/Mainpage/images/캠피트.mp4";

import main3 from "./images/main3.jpg";

import "semantic-ui-css/semantic.min.css";
import { Button, Grid, Header, Icon, Segment, } from "semantic-ui-react";


function Mainpage() {
  return (
    <div className="Mainpage">
      <MainTop />

      <div className="myttf">
        <Segment style={{ padding: "8em 0em" }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as="h3" style={{ fontSize: "2em", color: "white" }}>
                  우리는 AI Training을 제공합니다.
                </Header>
                <p style={{ fontSize: "1.33em", color: "white" }}>'Un-Tact' 시대에도 여러분의 건강을 지킬 수 있도록 <br></br>도와드립니다. 캠피트와 함께라면 홈 피트니스도 전문적으로 할 수 있습니다.</p>
                <Header as="h3" style={{ fontSize: "2em", color: "white" }}>
                  우리는 Online Class를 제공합니다.
                </Header>
                <p style={{ fontSize: "1.33em", color: "white" }}>'On-Tact' 시대에 헬트 트레이너와 회원을 Online으로 <br></br>연결시켜드립니다.</p>
              </Grid.Column>
              <Grid.Column floated="right" width={7}>
                <video width="600px" height="100%" controls muted>
                  <source src={mainvd} type="video/mp4" />
                </video>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>

      <div className="row myttf">

        <div className="col">
          <img src={main3} style={{ width: "100%" }}></img>
        </div>

        <div className="col" style={{margin:"auto"}}>

          <div className="row" style={{alignItems:'center', justifyContent:'center'}}>
            <Header as="h3" style={{ fontSize: "2rem", color: "white" }}>
              전문가의 도움이 필요한 "헬린이" 라면
            </Header>
          </div>

          <div>
            <Button size='big' href="/selftrain" animated inverted color="green" style={{margin:"25px",width:"200px",height:"50px"}}>
              <Button.Content visible >
                AI Coaching
              </Button.Content>
              <Button.Content hidden>
                <Icon name="arrow right" />
              </Button.Content>
            </Button>
          </div>
          <br></br>
          <br></br>
          <br></br>

          <div className="row drttf" style={{alignItems:'center', justifyContent:'center'}}>
            <Header as=""  className="drttf" style={{ fontSize: "2rem", color: "white" }}>
              온라인 Class가 필요한 "트레이너" 라면
            </Header>
          </div>

          <div>
            <Button size='big' href="/videoclass" animated inverted color="green" style={{margin:"25px",width:"200px",height:"50px"}}>
              <Button.Content visible >
                Class Open
              </Button.Content>
              <Button.Content hidden>
                <Icon name="arrow right" />
              </Button.Content>
            </Button>
          </div>

        </div>
      </div>

      <div></div>

      {/* <CamFitWhat/>
            <h2>홈 피트니스(Fit)를 하는 동안, 웹 카메라(Cam)를 통해 촬영하면</h2>
            <h2>AI가 사용자의 자세를 음성으로 트레이닝해주는 서비스</h2>
            <CamFitWhy/>
            <CamFitHow/> */}
    </div>
  );
}

export default Mainpage;
