import React from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import { Link } from "react-router-dom";


export default function ProductCard(props) {
    return (
        <div>
            {/* <Container>
                <h2 class="display-4 text-center mt-5 mb-3">Our Products</h2>
                <Row xs={1} md={4} className="g-4"> */}
            {/* {Products.map((product, index) => {
                        return ( */}
            <Col >
                <Card as={Link} to={`/productdetail/${props.id}`} className="hover-zoom">
                    <div >
                        <Card.Img variant="top" src={props.image} />
                    </div>
                    <Card.Body>
                        <Card.Title >{props.name}</Card.Title>
                        <Card.Text>
                            ${props.price}
                        </Card.Text>
                      
                    </Card.Body>
                </Card>
            </Col>
            {/* );
                    })} */}
            {/* </Row>
            </Container> */}
        </div>
    )
}

