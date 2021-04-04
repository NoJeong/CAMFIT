import React,{useEffect, useState} from 'react'
import { useDispatch } from "react-redux";
import { Articledetail, deleteArticle } from "../../_actions/index";
import {useHistory} from "react-router";
import Comment from './Comment';

function ArticleDetail(props) {

    const history = useHistory();
    const dispatch = useDispatch();    
    const [Article, setArticle] = useState({})
      
    useEffect(() => {
      const articleId = props.match.params.articleId
      console.log(articleId)
      dispatch(Articledetail(articleId))
      .then((res) => {
        console.log('11111');
        setArticle(res.payload)           
      })
    }, [dispatch]);

    const removeArticle = () => {
      if (window.confirm("해당 게시물을 삭제하시겠습니까?\n삭제된 데이터는 복구할 수 없습니다.")) {
        const articleId = props.match.params.articleId
        dispatch(deleteArticle(articleId))
        .then((res) => {
          setArticle(res.payload)
        })
      alert('게시물이 삭제되었습니다.')
      }
    }

    return (
        <div>       
          <h1>Title : {Article.title}</h1>
          <hr/>
          <h2>Content : {Article.content}</h2>
          <hr/>
          <h2>생성날짜 : {Article.created_at}</h2>
          <hr/>
          <h2>수정날짜 : {Article.updated_at}</h2>
          <hr/>
          {/* image */}   
          {/* <img 
          height='240px'
          src={API_BASE_URL+Articles.image} /> */}
          <br/>

          {/* Update */}
          <button
          // style={{ width: '50px', height: '25px'}}
           onClick={() => {history.push({
            pathname: `/community/${Article.id}` ,
            state: {Article: Article}
          })}}>수정하기</button>

          {/* Delete */}
          <button
            onClick={removeArticle}
          >
            <a href="/community/">삭제하기</a>
          </button>
          {/* 댓글 CRUD */}
          <Comment article={Article.id}/>
        </div>
    )
}

export default ArticleDetail;
