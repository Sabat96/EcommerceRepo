import React, { useState } from 'react'
import { useParams } from "react-router";
import { Row, Col, Container, Button, Figure, Accordion } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../features/ProductSlice";


const styles = {
    mediaItem: {
        border: "1px solid black",
        backgroundColor: "#f5f5f5",
        paddingTop: "5px",
        paddingBottom: "5px"
    },
    mediaItemButtons: {
        paddingTop: "5px",
        paddingBottom: "5px"
    }
};

export default function MyCart() {

    const CartDetail = useSelector((state) => state.Product.value);
    const dispatch = useDispatch();

    const total = CartDetail.reduce((prev, cur) => {
        return prev + cur.price;
    }, 0);


    console.log(CartDetail);

    return (
        <div>
            <Container>
                <Row>
                    <Col xs={3}>
                        <Col xs={12}>
                            <Col md={2}>
                                 <h3 > Total: </h3> 
                                 <h2 className="ProductDetail">${total}</h2>
                            </Col>
                        </Col>
                    </Col>
                    <Col xs={9}>
                        {CartDetail.map((product, index) => {
                            return (
                                <div>
                                    
                                    <Figure className={styles.mediaItem}>
                                        <Figure.Image className="AboutImage"
                                            width={100}
                                            height={100}
                                            alt="171x180"
                                            src={product.image}
                                        />
                                        <Figure.Caption>
                                            <Row> <h3 >{product.title}</h3>  </Row>
                                            <Row>
                                                <Col xs={6}>
                                                    <strong >${product.price}</strong>
                                                </Col>
                                                <Col xs={6}>1 piece</Col>
                                            </Row>

                                            <Row style={styles.mediaItemButtons}>
                                                <Col xs={6}>
                                                    <Button variant="secondary" size="sm">
                                                        Details
                                                    </Button>
                                                </Col>
                                                <Col xs={6}>
                                                    <Button variant="danger" size="sm"
                                                        onClick={() => {
                                                            dispatch(removeProduct(product.id));
                                                        }}>
                                                        Remove
                                                    </Button>
                                                </Col>


                                            </Row>
                                        </Figure.Caption>

                                    </Figure>

                                </div>
                            )
                        })}    </Col>
                </Row>  </Container>
        </div>


    )
}
