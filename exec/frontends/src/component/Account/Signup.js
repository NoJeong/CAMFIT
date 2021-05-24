import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {signup, emailcheck} from '../../_actions/index';
import { Form, Button, Row, Col } from "react-bootstrap";
import './Signup.css';

function Signup(props) {
  
  const dispatch = useDispatch();
  const [Email,setEmail] = useState("");
  const [EmailCheck,setEmailCheck] = useState(false);
  const [Password, setPassword] = useState("");
  const [PasswordCheck, setPasswordCheck] = useState("");
  const [Nickname, setNickname] = useState("");
  const [Category, setCategory] = useState(1);


  const onEmailHandler = (event) => {
    setEmailCheck(false);
    setEmail(event.currentTarget.value);
  }

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  }

  const onPasswordCheckHandler = (event) => {
    setPasswordCheck(event.currentTarget.value);
  }
  const onNicknameHandler = (event) => {
    setNickname(event.currentTarget.value);
  }
  const onCategoryFirstHandler = () => {
    setCategory(2);
  }
  const onCategorySecondHandler = () => {
    setCategory(1);
  }

  const emailCheck = (event) => {
    event.preventDefault();
    if (!Email) {
      return alert('이메일을 입력하세요')
    }
    dispatch(emailcheck({username:Email}))
      .then((res) => {
        if (res.payload[0]==="있음") {
          alert('이미 계정이 있습니다')
        } else {
          alert('사용해도 좋습니다')
          setEmailCheck(true);
        }

      })
  }

  const onSubmitHandler = (event) => {
    // console.log('클릭됨')
    // page refresh를 막아준다
    event.preventDefault();
    if (!Email) {
      return alert('이메일을 입력하세요')
    }
    if (!Nickname) {
      return alert('닉네임을 입력하세요')
    }
    if (!EmailCheck) {
      return alert('이메일 중복 확인을 하세요')
    } else {
    }
    if (!Password) {
      return alert('비밀번호를 입력하세요')
    }
    if (!PasswordCheck) {
      return alert('비밀번호를 입력하세요')
    }
    if (Password !== PasswordCheck) {
      return alert('비밀번호가 일치하지 않습니다.')
    }

    let body = {
      username : Email,
      password : Password,
      passwordcheck : PasswordCheck,
      category : Category,
      first_name : Nickname,

    };
    // console.log(body);
    dispatch(signup(body))
      .then((res) => {
        // console.log(res);
        if (res.payload.username) {
          // console.log('signup success')
          props.history.push('/')
          alert('가입성공')

        } else {
          // console.log('signup fail')
          alert(res.payload.message)
        }
      })
      .catch((err) => {
        alert('가입실패')
        // console.log(err);
      });
  };

  return (
    <div>
      <div className="Signup-Ment">
        <h2 className="Signup-Ment">전문 트레이너와 AI가 함께 당신의 홈트를 도와줍니다.</h2>
        <h2 className="Signup-Ment">CamFit과 함께 하세요!</h2>
      </div>
      <Form className="Signup-Form">
        {/* Email */}
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="Signup-Form-Label">Email</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Email" 
            value={Email} 
            onChange={onEmailHandler}
          />
        </Form.Group>
        <Button className="Signup-Emailcheck-Button" type="submit" onClick={emailCheck}>Check for duplicate emails</Button>

        {/* Password */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label className="Signup-Form-Label">Password</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Password" 
            value={Password} 
            onChange={onPasswordHandler}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPasswordCheck">
          <Form.Label className="Signup-Form-Label">Confirm Password</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="PasswordCheck" 
            value={PasswordCheck} 
            onChange={onPasswordCheckHandler} 
          />
        </Form.Group>

        {/* Nickname */}
        <Form.Group controlId="formBasicNickname">
          <Form.Label className="Signup-Form-Label">Nickname</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Nickname" 
              value={Nickname} 
              onChange={onNicknameHandler}
            />
        </Form.Group>
        <Col sm={10}>
        {/* <Form.Label className="Signup-Form-Label">Identity</Form.Label> */}
        <br/>
        <Form.Check
          type="radio"
          label="트레이너"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          onClick={onCategoryFirstHandler}
        />
        <br/>
        <br/>
        <Form.Check
          type="radio"
          label="일반회원"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
          onClick={onCategorySecondHandler}
        />
      </Col>
      <br/>
      <br/>
        <Button className="Signup-Button" type="submit" onClick={onSubmitHandler}>Sign up</Button>
      </Form>
    </div>
  );
}

export default Signup;
