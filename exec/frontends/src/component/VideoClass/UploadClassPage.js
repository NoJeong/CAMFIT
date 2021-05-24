import React, {useState,useRef} from 'react'
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {Typography, Button, Form, Input} from 'antd'
// import FileUpload from '../utils/FileUpload'
import { videoclasscreate } from "../../_actions/index";
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';


const {Title} = Typography;

// const {TextArea} = Input;


function UploadClassPage(props) {
  const dispatch = useDispatch()
  const history = useHistory();
  const [Name, setName] = useState("")
  const [Description, setDescription] = useState("")
  const [Price, setPrice] = useState(0)
  const [StartDay, setStartDay] = useState(0)
  const [EndDay, setEndDay] = useState(0)
  const [UserLimit, setUserLimit] = useState(0)
  const [NickName, setNickName] = useState("")

  
  // const [Image, setImage] = useState([])
  const editorRef = useRef()
  
  const nameChageHandler = (event) => {
    setName(event.currentTarget.value)
  }

  const discriptionChageHandler = () => {
    const editorInstance = editorRef.current.getInstance()
    // console.log(editorInstance);
    // console.log('마크다운', editorInstance.getMarkdown());
    // console.log('html',editorInstance.getHtml());
    setDescription(editorInstance.getHtml())
    // console.log(Description);
    // setDescription(event.currentTarget.value)
  }

  const priceChageHandler = (event) => {
    setPrice(event.currentTarget.value)
  }
  const StartDayChageHandler = (event) => {
    setStartDay(event.currentTarget.value)
  }
  const EndDayChageHandler = (event) => {
    setEndDay(event.currentTarget.value)
  }
  const UserLimitChageHandler = (event) => {
    setUserLimit(event.currentTarget.value)
  }
  const NickNameChageHandler = (event) => {
    setNickName(event.currentTarget.value)
  }


  const submitHandler = (event) => {
    event.preventDefault();
    if(!Name || !Description || !Price || !NickName || !StartDay || !EndDay || !UserLimit) {
      return alert("모든 값을 넣어주셔야 합니다.")
    }
    const body = {
      // user: , 
      title: Name,
      nickname: NickName,
      content: Description,
      start_day: StartDay,
      end_day: EndDay,
      user_limit : UserLimit,
      price: Price,
      // image: Image
    }
    // 서버에 채운 값들을 request로 보낸다
    dispatch(videoclasscreate(body))
    .then((res) => {
      console.log(res.payload);
      props.history.push('/videoclass')
    })
    
  }
    return (
        <div style={{maxWidth: '700px', margin: '2rem auto'}}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <Title level={2}>클래스 업로드</Title>
            </div>
            <Form >
              {/* drop zone */}

              <div>       
                </div>

              {/* <FileUpload  /> */}

              <br/>
              <br/>
              <label>이름</label>
              <Input onChange={nameChageHandler} value={Name}/>
              <label>트레이너 이름</label>
              <Input onChange={NickNameChageHandler} value={NickName}/>
              <br/><br/>
              <br/>
              <br/>
              <label>설명</label>
              <Editor
                // onChange={descriptionChangeHandler}
                initialValue="내용을 입력해주세요."
                height="600px"
                width="300px"
                // plugins={[chart, codeSyntaxHighlight,colorSyntax,tableMergedCell,uml]}
                usageStatistics={false}
                ref={editorRef}
                onChange={discriptionChageHandler}
                value={Description}
              />
              <br/><br/>
              <br/>
              <br/>
              <label>가격</label>
              <Input type="number" onChange={priceChageHandler} value={Price}/>
              <label>시작일</label>
              <Input value="MMDD" onChange={StartDayChageHandler} value={StartDay}/>
              <label>종료일</label>
              <Input value="MMDD" onChange={EndDayChageHandler} value={EndDay}/>
              <label>수강생 수</label>
              <Input type="number" onChange={UserLimitChageHandler} value={UserLimit}/>
              <br/><br/>
              <br/><br/>
              <div onClick={() => {history.push({
                            pathname: `/videoclass`})}}>
                <Button type="submit" onClick={submitHandler}>확인</Button>
              </div>

            </Form>




        </div>
    )
}

export default UploadClassPage
