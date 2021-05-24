import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import {login, getuserinfo} from '../../_actions/index';
import { Form, Button, Modal } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import './login.css'


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
            localStorage.setItem('useremail',res.payload.email)
          })
          setTimeout(function() {
            window.location.replace("/")
          },1000)
        } else {
          // console.log('login fail')
          alert(res.payload.message)
        }
      })
      .catch((err) => {
        alert('로그인실패')
        // console.log(err);
      });
  };
  return (
      <Form className="Login-Form" onSubmit={onSubmitHandler}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="Login-Form-Label">Email address</Form.Label>
          <Form.Control type="email" 
          placeholder="Enter email" 
          onChange={onEmailHandler} 
          value={Email}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label className="Login-Form-Label">Password</Form.Label>
          <Form.Control type="password" 
          placeholder="Password"
          onChange={onPasswordHandler}
          value={Password} 
          />
        </Form.Group>
        <Button type="dark" className="Login-Button" type="submit">
          Login
        </Button>
      </Form>

  );
  
}


export default withRouter(LoginModal)
