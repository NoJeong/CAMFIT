import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import './page.css';
import ArticleSearch from '../component/Community/ArticleSearch';
import { ArticleList } from "../_actions/index";
import ListGroup from 'react-bootstrap/ListGroup';

function Community() {

    const dispatch = useDispatch();
    const [Articles, setArticles] = useState([])
    
    useEffect(() => {
        dispatch(ArticleList())
        .then((res) => {
          const article_list = res.payload
        //   console.log(res.payload)
          setArticles(article_list)
        })
      }, [dispatch])

    const [SearchTerm, setSearchTerm] = useState("")

    const updateSearchTerm = (newSearchTerm) => {
        setSearchTerm(newSearchTerm)
    }

    const renderLists = Articles.map((article, index) => {
        return <ListGroup 
                horizontal
            >
                <ListGroup.Item>{article.id}</ListGroup.Item>
                <ListGroup.Item>{article.user.username}</ListGroup.Item>
                <ListGroup.Item><a href={'/community/'+ article.id + '/detail'}>{article.title}</a></ListGroup.Item>
                <ListGroup.Item>{article.updated_at}</ListGroup.Item>
            </ListGroup>
    })

    return (
        <div className="Community">
            자유게시판
            <br/>
            {/* Create */}
            <button>
              <a href="/community/create">작성하기</a>
            </button>

            {/* Search */}
            <ArticleSearch
                refreshFunction={updateSearchTerm}
            />

            {/* Read */}
            {renderLists}
        </div>
    )
}


export default Community;