import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../component.css';
import {Card, Button} from 'react-bootstrap';

class SelftrainCard extends Component {
    
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.huffingtonpost.com%2Fasset%2F5d6fe0522500008d000314e9.jpeg%3Fops%3Dscalefit_630_noupscale&imgrefurl=https%3A%2F%2Fwww.huffingtonpost.kr%2F2017%2F11%2F02%2Fstory_n_18443558.html&tbnid=UxeFVwso53o7EM&vet=12ahUKEwjAlJu81MbvAhUJdJQKHWjjDU0QMygAegUIARDRAQ..i&docid=73s5Ajz7STuiuM&w=570&h=380&q=%EC%9A%B4%EB%8F%99&ved=2ahUKEwjAlJu81MbvAhUJdJQKHWjjDU0QMygAegUIARDRAQ" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Link to="/">
                        <Button>Shi bar</Button>
                    </Link>
                </Card.Body>
                </Card>
            </div>
        )
    }
}

export default SelftrainCard