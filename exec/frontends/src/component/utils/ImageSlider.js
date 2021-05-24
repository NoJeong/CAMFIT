import React from 'react'
import { Carousel } from 'antd';
import {API_BASE_URL} from '../../constants';

function ImageSlider(props) {
    return (
        <div>
            <Carousel autoplay >
                {props.image.map((image, index) => (
                    <div key={index}>
                        <img style={{ width: '100%', maxHeight: '150px' }}
                            src={`${API_BASE_URL}/${image}`} />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default ImageSlider