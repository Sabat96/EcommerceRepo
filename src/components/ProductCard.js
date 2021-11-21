import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'

const Products =
    [{
        title: "Vintage Handbag",
        text: "This is a longer card with supporting text below as a naturallead-in to additional content. This content is a little bit longer. ",
        image: "https://cdn.shopify.com/s/files/1/0010/0915/6143/products/il_fullxfull.1167161057_289w_a5645c40-0283-4949-a130-532db9c7609a_1200x.jpg?v=1572126883"
    },
    {
        title: "formal Handbag",
        text: "This is a longer card with supporting text below as a naturallead-in to additional content. This content is a little bit longer. ",
        image: "https://cdn.shopify.com/s/files/1/0010/0915/6143/products/il_fullxfull.1167161057_289w_a5645c40-0283-4949-a130-532db9c7609a_1200x.jpg?v=1572126883"
    },
    {
        title: "classic Handbag",
        text: "This is a longer card with supporting text below as a naturallead-in to additional content. This content is a little bit longer. ",
        image: "https://cdn.shopify.com/s/files/1/0010/0915/6143/products/il_fullxfull.1167161057_289w_a5645c40-0283-4949-a130-532db9c7609a_1200x.jpg?v=1572126883"
    },
    {
        title: "classic Handbag",
        text: "This is a longer card with supporting text below as a naturallead-in to additional content. This content is a little bit longer. ",
        image: "https://cdn.shopify.com/s/files/1/0010/0915/6143/products/il_fullxfull.1167161057_289w_a5645c40-0283-4949-a130-532db9c7609a_1200x.jpg?v=1572126883"
    }
]


export default function ProductCard() {
    return (
        <div>
            <Container> 
            <h2 class="display-4 text-center mt-5 mb-3">Our Products</h2>        
                <Row xs={1} md={4} className="g-4">
                {Products.map((product, index) => {
                    return ( 
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={product.image} />
                                <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Text>
                                    {product.text}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ); 
                 })} 
            </Row>
            </Container>
        </div>
    )
}

