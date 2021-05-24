import React,{ useEffect, useState} from 'react'
import { useDispatch } from "react-redux";
import { Articledetail, deleteArticle, CommentList, deleteComment } from "../../_actions/index";
import { useHistory } from "react-router";
import CommentCreate from './CommentCreate';
import ListGroup from 'react-bootstrap/esm/ListGroup';

function ArticleDetail(props) {

    const history = useHistory();
    const dispatch = useDispatch();    
    const [Article, setArticle] = useState({})
    const [Comment, setComment] = useState("")
    const [Comments, setComments] = useState([])
    const articleId = props.match.params.articleId
    const commentId = props.match.params.commentId

    const commentChangeHandler = (e) => {
      setComment(e.currentTarget.value)
    }
      
    useEffect(() => {
      dispatch(Articledetail(articleId))
      .then((res) => {
        // console.log('11111');
        setArticle(res.payload)           
      })
    }, [dispatch]);

    dispatch(CommentList(articleId))
    .then((res) => {
      const comment_list = res.payload
      setComments(comment_list)
    })
    

    const removeArticle = () => {
      if (window.confirm("해당 게시물을 삭제하시겠습니까?\n삭제된 데이터는 복구할 수 없습니다.")) {
        dispatch(deleteArticle(articleId))
        .then((res) => {
          setArticle(res.payload)
        })
      alert('게시물이 삭제되었습니다.')
      }
    }

    const renderCommentLists = Comments.map((comment, index) => {
      return <ListGroup
              horizontal
            >
        <ListGroup.Item>{comment.user.username}</ListGroup.Item>
        <ListGroup.Item>{comment.content}</ListGroup.Item>
        <ListGroup.Item>{comment.updated_at}</ListGroup.Item>
        <ListGroup.Item><button onClick={() => removeComment(comment.id)}>X</button></ListGroup.Item>    
      </ListGroup>
    })

    const removeComment = (commentId) => {
      // console.log(commentId);
      // const renderCommentLists = Comments.filter((Comment) => {
      //   return Comments[index] !== Comment
      // })
      if (window.confirm("해당 댓글을 삭제하시겠습니까?\n삭제된 데이터는 복구할 수 없습니다.")) {
        dispatch(deleteComment(commentId))
        .then((res) => {
          setComment(res.payload)
        })
        alert('이 삭제되댓글었습니다.')
        // return window.location.reload();
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
          <br/>
          <br/>
          {/* 댓글 CRUD */}
          <CommentCreate article={Article.id}/>
          <br/>
          {renderCommentLists}
        </div>
    )
}

export default ArticleDetail;
