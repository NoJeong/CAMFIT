import React, { useState, useRef } from 'react';
// import FileCreate from './FileCreate';
import { useDispatch } from "react-redux";
import { editArticle } from "../../_actions/index";
import { useLocation } from "react-router";
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

function ArticleEdit(props) {
  const dispatch = useDispatch();
  const location = useLocation();
  const Article = location.state.Article;

  const [Title, setTitle] = useState(Article.title)
  const [Description, setDescription] = useState(Article.content)
  const [Category, setCategory] = useState(Article.category)
  // const [Images, setImages] = useState([])

  const titleChangeHandler = (e) => {
    setTitle(e.currentTarget.value)
  }

  const descriptionChangeHandler = (e) => {
    setDescription(e.currentTarget.value)
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
        //로그인 된 사람의 ID 
        // writer: props.user.userData._id,
        title: Title,
        content: Description,
        category: Category
        // images: Images
      }
      
      dispatch(editArticle(body,Article.id))
      .then((res) => {
        // console.log(res.payload);
        props.history.push(`/Community/${Article.id}/detail/`)
      });
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
    <div className="ArticleEdit">
      <form onSubmit={submitHandler}>        
        <label>Title</label>
        <input onChange={titleChangeHandler} value={Title}/>
        <br/>
        <label>Desc</label>
        <Editor
          // onChange={descriptionChangeHandler}
          initialValue={Description}
          height="600px"
          width="300px"
          usageStatistics={false}
          ref={editorRef}
        />
        {/* <textarea onChange={descriptionChangeHandler} value={Description}/> */}
        <br/>
        {/* <FileCreate refreshFunction={updateImages}/> */}
        <button type="submit" onClick={btnClickListener}>Submit</button>
      </form>
    </div>
  )
  }


export default ArticleEdit;