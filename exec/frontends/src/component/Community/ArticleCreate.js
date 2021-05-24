import React, { useState, useRef } from 'react';
import { useDispatch } from "react-redux";
import { createArticle } from "../../_actions/index";
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

// import { Viewer } from '@toast-ui/editor/dist/toastui-editor-viewer';


function ArticleCreate(props) {
  const dispatch = useDispatch();

  const [Title, setTitle] = useState("")
  const [Description, setDescription] = useState("")
  const [Category, setCategory] = useState(1)
  // const [Images, setImages] = useState([])

  const titleChangeHandler = (e) => {
    setTitle(e.currentTarget.value)
  }

  const descriptionChangeHandler = (e) => {
    setDescription(e.currentTarget.value)
    // console.log('바뀜')
  }

  // const updateImages = (newImages) => {
  //   setImages(newImages)
  // }

  const submitHandler = (e) => {
    e.preventDefault();

    if (!Title) {
      return alert("값을 입력해주셔야 합니다.")
    }

    //서버에 채운 값들을 request로 보낸다.
    const body = {
        title: Title,
        content: Description,
        category: Category
        // images: Images
      }

      dispatch(createArticle(body))
      .then((res) => {
        props.history.push('/Community')
        // console.log(res.payload);
      });
      // Axios.post('/api/product', body)
      //       .then(response => {
      //           if (response.data.success) {
      //               alert('상품 업로드에 성공 했습니다.')
      //               props.history.push('/')
      //           } else {
      //               alert('상품 업로드에 실패 했습니다.')
      //           }
      //       })
    }
    
  const editorRef = useRef();

  const btnClickListener = () => {
    const editorInstance = editorRef.current.getInstance();
    const getContent_md = editorInstance.getMarkdown();
    // console.log('마크다운')
    const getContent_html = editorInstance.getHtml();
    // console.log('HTML')
    setDescription(getContent_md)
  }



  return (
    <div className="ArticleCreate">
      <form onSubmit={submitHandler}>       
        <label>Title</label>
        <input onChange={titleChangeHandler} value={Title}/>
        <br/>
        <label>Desc</label>
        <Editor
          // onChange={descriptionChangeHandler}
          // initialValue={Description}
          height="600px"
          width="300px"
          usageStatistics={false}
          ref={editorRef}
          // getValue={Description}
        />
        <br/>

        {/* <FileCreate refreshFunction={updateImages}/> */}
        <button type="submit" onClick={btnClickListener}>Submit</button>
      </form>
    </div>
  )
  }


export default ArticleCreate;