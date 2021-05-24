import React, { useState } from "react";
import "../component.css";
import { Row, Col } from "react-bootstrap";
import { Button } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";

import { Image, Reveal } from "semantic-ui-react";

import "../../pages/page.css";

function SelftrainSidebar(props) {
  const login = useState(window.localStorage.getItem('userid'))
  const shoulder = () => {
    if (login) {
      window.location.replace("/selftrain/detail/1");
    } else {
      alert('로그인 후 이용가능합니다.')
    }
  };
  const core = () => {
    window.location.replace("/selftrain/detail/2");
  };
  const arm = () => {
    window.location.replace("/selftrain/detail/3");
  };
  const leg = () => {
    window.location.replace("/selftrain/detail/4");
  };

  return (
    <div className="site-content myttf">
      <Row xs={1} md={4}>
        <Col>
          <Reveal animated="rotate">
            <Reveal.Content visible>
              <Image circular size="medium" src="https://ifh.cc/g/b70G9w.jpg" />
            </Reveal.Content>
            <Reveal.Content hidden>
              <Button
                type="dashed"
                danger
                onClick={shoulder}
                className="mt-2"
                shape="round"
                size={"large"}
                ghost
              >
                어깨운동 시작하기
              </Button>
            </Reveal.Content>
          </Reveal>
        </Col>

        <Col>
          <Reveal animated="rotate">
            <Reveal.Content visible>
              <Image circular size="medium" src="https://ifh.cc/g/uKNRvB.jpg" />
            </Reveal.Content>
            <Reveal.Content hidden>
              <Button
                type="dashed"
                danger
                onClick={core}
                className="mt-2"
                shape="round"
                size={"large"}
                ghost
              >
                코어운동 시작하기
              </Button>
            </Reveal.Content>
          </Reveal>
        </Col>

        <Col>
          <Reveal animated="rotate">
            <Reveal.Content visible>
              <Image circular size="medium" src="https://ifh.cc/g/z85Vm7.jpg" />
            </Reveal.Content>
            <Reveal.Content hidden>
              <Button
                type="dashed"
                danger
                onClick={arm}
                className="mt-2"
                shape="round"
                size={"large"}
                ghost
              >
                팔운동 시작하기
              </Button>
            </Reveal.Content>
          </Reveal>
        </Col>

        <Col>
          <Reveal animated="rotate">
            <Reveal.Content visible>
              <Image circular size="medium" src="https://ifh.cc/g/Q7zSHG.jpg" />
            </Reveal.Content>
            <Reveal.Content hidden>
              <Button
                type="dashed"
                danger
                onClick={leg}
                className="mt-2"
                shape="round"
                size={"large"}
                ghost
              >
                하체운동 시작하기
              </Button>
            </Reveal.Content>
          </Reveal>
        </Col>
      </Row>
    </div>
  );
}

export default SelftrainSidebar;
