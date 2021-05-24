import React, { useState, useEffect } from 'react'
import { useDispatch } from "react-redux";
import { createComment } from "../../_actions/index";


function CommentCreate(props) {
  
  const dispatch = useDispatch();

  const [Comment, setComment] = useState("")
  
  const commentChangeHandler = (e) => {
    setComment(e.currentTarget.value)
  }

  const submitComment = (e) => {
    e.preventDefault();
    if (!Comment) {
      return alert("내용을 입력해주셔야 합니다.") 
    }
    const body = {
      content: Comment
    }
    dispatch(createComment(body, props.article))
    .then((res) => {
      // console.log(res.payload);
    });
    setComment("")
  }

  return (
    <div className="CommentCreate">
      <label>댓글</label>
      <textarea onChange={commentChangeHandler} value={Comment}/>
      <button type="submit" onClick={submitComment}>Comment Submit</button>
      <br/>
    </div>
  )
}

export default CommentCreate;
