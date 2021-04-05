import React from 'react'
import { Button, Descriptions } from 'antd';
import { useDispatch } from 'react-redux';
// import { addToCart } from '../../../../_actions/user_actions';

function ProductInfo(props) {

    const dispatch = useDispatch();


    const clickHandler = () => {
        //필요한 정보를 Cart 필드에다가 넣어 준다.
        // dispatch(addToCart(props.detail._id))

    }
    return (
        <div>
            <Descriptions title="Product Info">
                <Descriptions.Item label="Price">{props.detail.price}</Descriptions.Item>
                <hr/>
                <hr/>
                <Descriptions.Item label="title">{props.detail.title}</Descriptions.Item>
                <hr/>
                <hr/>
                <Descriptions.Item label="start_day">{props.detail.start_day}</Descriptions.Item>
                <hr/>
                <hr/>
                <Descriptions.Item label="end_day">{props.detail.end_day}</Descriptions.Item>
                {/* <Descriptions.Item label="Description">{props.detail.description}</Descriptions.Item> */}
            </Descriptions>

            <br />
            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button size="large" shape="round" type="danger" onClick={clickHandler}>
                    Add to Cart
                </Button>
            </div>


        </div>
    )
}

export default ProductInfo
