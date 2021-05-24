import React from 'react'
import { Button } from 'antd';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import './ProductInfo.css';
import Badge from 'react-bootstrap/Badge';

import { classReg } from '../../_actions/index';

function ProductInfo(props) {

    const dispatch = useDispatch();
    const history = useHistory();
    
    const get_client = () => {
        dispatch(classReg(props.detail.id)).then((res) => {
            alert('수강신청 되었습니다.')
            props.setMyclass(true);
        })
    }


    return (
        <div >  
            <div className="cardlist">           
                <div className="chart-board" title="Product Info">
                    <p className="chart-title" label="title">{props.detail.title}</p>
                    <p className="chart-item-price" label="Price">가격 : <Badge variant="warning">Free</Badge> </p>
                    <p className="chart-item" label="start_day">시작일 : {props.detail.start_day}</p>
                    <p className="chart-item" label="end_day">마감일 : {props.detail.end_day}</p>
                    <br />
                    <br />
                    <br />
                    {/* <div style={{ display: 'flex', justifyContent: 'center' }} onClick={gotoCart}> */}
                    <div style={{ display: 'flex', justifyContent: 'center' }} >
                        {/* <Button shape="round" type="danger" style={{width:"130px",height:"50px"}} onClick={() => {history.push({
                            pathname: `/videochat`})}}>
                            수강하기
                        </Button> */}
                        {props.Myclass ? 
                        <Button shape="round" type="primary" style={{width:"130px",height:"50px"}} onClick={() => {history.push({
                            pathname: `/videochat`})}}>
                            시작하기
                        </Button>
                        :
                        <Button shape="round" type="danger" style={{width:"130px",height:"50px"}} onClick={get_client}>
                            수강하기
                        </Button>
                        }
                    </div>
                    <br/><br/><br/>
                </div>
            </div>  
        </div>
    )
}

export default ProductInfo
