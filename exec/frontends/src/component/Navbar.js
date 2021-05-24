import React, { Component, Fragment } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "antd/dist/antd.css";
import "./Navbar.css";
import { Modal } from "antd";
import LoginModal from "./Account/LoginModal";
import { ACCESS_TOKEN } from "../constants";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      visible: false,
    };
    this.showModal = this.showModal.bind(this);
  }
  modalfunc() {
    this.setState({
      visible: false,
    });
  }

  showModal() {
    this.setState({
      visible: true,
    });
  }

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  logout = () => {
    localStorage.clear();
    window.location.replace("/");
  };

  render() {
    let button;
    if (!ACCESS_TOKEN) {
      // console.log("no token");
      button = (
        <>
          <button onClick={this.showModal} className="signin-btn-links">
            로그인
          </button>
          <Modal
            className="Login-Modal"
            visible={this.state.visible}
            title="Sign in to your account"
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            show={this.visible}
            footer={[
              <p className="Cancel-Button" key="back" onClick={this.handleCancel}>
              </p>,
            ]}
          >
            <LoginModal />
          </Modal>
        </>
      );
    } else {
      button = (
        <Fragment>
          <Nav.Link className="signup-btn-links" href="/">
            {window.localStorage.getItem("usernickname")}님 환영합니다.
          </Nav.Link>
          <Nav.Link className="signup-btn-links" onClick={this.logout}>
            로그아웃
          </Nav.Link>
        </Fragment>
      );
    }
    return (
      <Navbar className="Nav" collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand className="NavLogo" href="/">
          CamFit
        </Navbar.Brand>
        <Navbar.Toggle
          className="fabar"
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="NavbarMenu" as="ul">
            <Nav.Link className="nav-links" href="/selftrain">
              AI트레이닝
            </Nav.Link>
            <Nav.Link className="nav-links" href="/info">
              캠핏꿀팁
            </Nav.Link>
            <Nav.Link className="nav-links" href="/videoclass">
              클래스
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            {button}
            <Nav.Link className="signup-btn-links" href="/signup">
              회원가입
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
