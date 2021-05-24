import React, {useEffect, useState} from 'react';
import { useDispatch } from "react-redux";
import { videoclasslist } from "../_actions/index";
import { API_BASE_URL } from "../constants";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import {HighlightOutlined} from '@ant-design/icons';
import './VideoClass.css';
function VideoClass() {

    const dispatch = useDispatch();
    const username = window.localStorage.getItem('userid')

    const [Classes, setClasses] = useState([])
    useEffect(() => {
        if (username) {

            dispatch(videoclasslist())
            .then((res) => {
                const class_list = res.payload
                console.log(class_list);
                setClasses(class_list)
            })
        }
    }, [dispatch])



    const renderCards = Classes.map((product, index) => {
        console.log(product.user);
        return <Col lg={3} md={6} xs={12} key={index}>
            <a className="Classes-Wrapper" href={'/videoclass/detail/'+ product.id}>
                <Card className="Classes-Card">
                    <Card.Img className="Classes-Img" src={API_BASE_URL+product.image}/>  
                    <Card.Title className="Classes-Title">{product.title}</Card.Title>
                    <Card.Text className="Classes-Trainer">{product.nickname}</Card.Text>
                    <Card.Text className="Classes-Price">월 {product.price}원 <Badge variant="warning">Free</Badge></Card.Text>            
                </Card>
            </a>
                <br/>
                <br/>   
                <br/>
        </Col>
    })
    

    
    return (
        <div>
            <div className="classmain" style={{ textAlign: 'center'}}>
                <h1>유료 클래스<HighlightOutlined /></h1>
            </div>
            <br/>
            <br/>
            {username ? 
            <Row gutter= {16, 16}>
                {renderCards}
            </Row>
            :
            <h1 style={{textAlign:'center'}}>"로그인후 이용할 수 있습니다."</h1>
            }
            <div className="upload">
                {window.localStorage.getItem('usercategory')=== '2' ?
                <p>클래스를 등록하고 싶으세요? <button className="uploadButton btn btn-outline-dark">
                    <a className="btntext" href="/videoclass/upload">등록</a>
                </button></p>
                : <p></p>
                    }
                
            </div>
        </div>
    )
}

export default VideoClass
