import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import {login, getuserinfo} from '../../_actions/index';
import { Form,Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
// import axios from 'axios';
function LoginModal(props) {
  const dispatch = useDispatch();
  const [Email,setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  }

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  }
  const onSubmitHandler = (event) => {
    // page refresh를 막아준다
    event.preventDefault();
    let body = {
      username : Email,
      password : Password
    };
 
    dispatch(login(body))
      .then((res) => {
        if (res.payload.token) {
          localStorage.setItem('token',res.payload.token);
          // localStorage.setItem('email',Email);
          dispatch(getuserinfo({email:Email})).then((res)=> {
            localStorage.setItem('userid',res.payload.id)
            localStorage.setItem('usernickname',res.payload.nickname)
            localStorage.setItem('usercategory',res.payload.category)
          })
          window.location.replace("/")
        } else {
          console.log('login fail')
          alert(res.payload.message)
        }
      })
      .catch((err) => {
        alert('로그인실패')
        console.log(err);
      });
  };
  return (
    <Form onSubmit={onSubmitHandler}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" 
        placeholder="Enter email" 
        onChange={onEmailHandler} 
        value={Email}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" 
        placeholder="Password"
        onChange={onPasswordHandler}
        value={Password} 
        />
      </Form.Group>
      {/* <Form.Text className="text-muted">
          비밀번호가 생각이 안나시나요? 그렇다면
        </Form.Text>
      <Button variant="primary" type="submit">
        비밀번호 찾기
      </Button> */}
      <Button variant="primary" type="submit">
        진짜로그인
      </Button>
    </Form>
  );
  
}


export default withRouter(LoginModal)
