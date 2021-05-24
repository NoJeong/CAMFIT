import React,{useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import { videoclassdetail, videoclasslist } from "../../_actions/index"
import ProductInfo from './ProductInfo';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { API_BASE_URL } from "../../constants";
import './ClassDetailPage.css';
import Image from 'react-bootstrap/Image';
// import OtherclassesBackground from './images/Abract01.png';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';


function ClassDetailPage(props) {

    const dispatch = useDispatch();        
    const classId = props.match.params.classId
    const [Classs, setClasss] = useState({})
    const [Classes, setClasses] = useState(null)
    const [MyClass, setMyClass] = useState(null)
    // console.log(Classs.desc_image);
    
    let renderCards = null;
    if(Classes) {
        renderCards = Classes.map((product, index) => {
            return (<a className="Class-atag" href={'/videoclass/detail/'+ product.id } key={index}>
                <Card className="owl-theme Other-Class">
                    <Card.Img className="Other-Class-Image" src={API_BASE_URL+product.image}/>  
                    <Card.Title className="Other-Class-Title">{product.title}</Card.Title>
                    <Card.Text className="Other-Class-Trainer">{product.nickname}</Card.Text>
                    <Card.Text className="Other-Class-Price">월 {product.price}원 <Badge variant="warning">Free</Badge></Card.Text>            
                </Card>
            </a>
            
        );})
    } else {
        dispatch(videoclasslist())
        .then((res) => {
            const class_list = res.payload
            setClasses(class_list)
        })

    }

    

    // useEffect(() => {
        
    // }, [dispatch])

    useEffect(() => {
        dispatch(videoclassdetail(classId))
        .then((res) => {
            // console.log(res.payload);
            setClasss(res.payload)            
            // console.log(res.payload.content);
            
            if (res.payload.guests.some(e=> e.username==window.localStorage.getItem('useremail'))) {
                setMyClass(true);
                console.log('나옴')
            } else {
                console.log('안나옴')
            }
        })
    }, [dispatch])


    


    
    return (    
        <div className="detail-board">
            <Row>
                <Col className="imagespace" lg={5} xs={12}>
                    {/* desc-image */}
                    <Image className="img-fluid" src={API_BASE_URL + Classs.desc_image}/>
                    <br/>
                    <br/>
                    <div className="contenttext">
                        {Classs.content}
                    </div>
                </Col>
                <Col className="imagespace" lg={5} xs={12}>
                    {/* ProductInfo */}
                    <ProductInfo detail={Classs} Myclass={MyClass} setMyclass={setMyClass} />
                </Col>                            
            </Row>
            <br/><br/><br/>
                    <h1> 다른 클래스들</h1>
            <Row className="Other-Classes-Row">
                <OwlCarousel className="Other-Classes" margin={0} loop items={4} autoplay ={true}>
                    { renderCards }
                </OwlCarousel>
            </Row>
            <br/>
        </div>       
    )   
}


export default ClassDetailPage
