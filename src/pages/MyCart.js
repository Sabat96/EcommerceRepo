import React, { useState } from 'react'
import { useParams } from "react-router";
import { Row, Col, Container, Button, Figure, Accordion, img } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import { decrementQuantity, incrementQuantity, removeProduct } from "../features/ProductSlice";
import { BsTrash } from "react-icons/bs";

///_________________________________

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
    },
    checkOut: {
        borderTop: "1px solid rgba(0,0,0,.1)",
        padding: " 2vh 0",

    }
};

export default function MyCart() {

    const CartDetail = useSelector((state) => state.Product.value);
    const dispatch = useDispatch();

    const totalPrice = CartDetail.reduce((prev, cur) => {
        return prev + cur.price * cur.count;
    }, 0);

    const totalItems = CartDetail.reduce((prev, cur) => {
        return prev + cur.count;
    }, 0);

    return (
        <div>
            <Container>
                <div className=" shoppingsection">
                    <div className="row">
                        <div className="col-md-9 cart">
                            <div className="title">
                                <div className="row">
                                    <div className="col-md-4">
                                        <h4><b>Shopping Cart</b></h4>
                                    </div>
                                </div>
                            </div>
                            {CartDetail.map((product, index) => {
                                return (
                                    <div className="row border-top border-bottom">
                                        <div className="row main align-items-center">
                                            <div className="col-md-2"><img className="img-fluid" src={product.image} /></div>
                                            <div className="col-md-3">
                                                <div className="row text-muted">{product.name}</div>
                                                {/* <div className="row">{product.name}</div> */}
                                            </div>
                                            <div className="col-md-4">
                                                <Button variant="" size="sm" className="inc" onClick={() => {
                                                    dispatch(incrementQuantity(product._id));
                                                }}> +
                                                </Button> <span>{product.count}</span>
                                                <Button variant="" size="sm" className="dec"
                                                    onClick={() => {
                                                        dispatch(decrementQuantity(product._id));
                                                    }}>
                                                    -
                                                    {/* <BsTrash /> */}
                                                </Button>
                                            </div>
                                            <div className="col-md-2">$ {product.price}</div>
                                            <div className="col-md-1" >


                                                <Button variant="" size="sm" className="removebtn"
                                                    onClick={() => {
                                                        dispatch(removeProduct(product._id));
                                                    }}>
                                                    &#10005;
                                                    {/* <BsTrash /> */}
                                                </Button></div>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                        <div className="col-md-3 summary">
                            <div>
                                <h5><b>Summary</b></h5>
                            </div>
                            {/* <hr> */}
                            <div className="row ITEMS">
                                <div className="col" >ITEMS </div>
                                <div className="col text-right"> {totalItems}</div>
                            </div>
                            <div className="row SHIPPING">
                                <div className="col" > SHIPPING </div>
                                <div className="col text-right "> $ 0.00</div>
                            </div>

                            <div className="row TOTAL" >
                                <div className="col">TOTAL PRICE</div>
                                <div className="col text-right">$ {totalPrice}</div>
                            </div>
                            <div className="row CHECKOUT" >
                                <Button variant="warning" size="sm"> CHECKOUT
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            {/* <Container>
                <Row>
                    <Col xs={5}>
                        <Col xs={12}>
                            <Col md={2}>
                                <h3 > Total: </h3>
                                <h2 classNameNameName="ProductDetail">${total}</h2>
                            </Col>
                        </Col>
                    </Col>
                    <Col xs={7}>
                        {CartDetail.map((product, index) => {
                            return (
                                <div>

                                    <Figure classNameNameName={styles.mediaItem}>
                                        <Figure.Image classNameNameName="AboutImage"
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
                                                <Col xs={6}> {product.count}</Col>
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
                                                        <BsTrash />
                                                    </Button>
                                                </Col>

                                                <Col xs={6}>
                                                    <Button variant="info" size="sm"
                                                        onClick={() => {
                                                            dispatch(incrementQuantity(product._id));
                                                        }}> +
                                                    </Button>
                                                </Col>
                                                <Col xs={6}>
                                                    <Button variant="warning" size="sm"
                                                        onClick={() => {
                                                            dispatch(decrementQuantity(product._id));
                                                        }}> _
                                                    </Button>
                                                </Col>


                                            </Row>
                                        </Figure.Caption>

                                    </Figure>

                                </div>
                            )
                        })}
                    </Col>
                </Row>
            </Container>
             */}


            {/* <div classNameName="px-4 px-lg-0">

                <div classNameName="pb-5">
                    <div classNameName="container">
                        <div classNameName="row">
                            <div classNameName="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">

                                <div classNameName="table-responsive">
                                    <table classNameName="table">
                                        <thead>
                                            <tr>
                                                <th scope="col" classNameName="border-0 bg-light">
                                                    <div classNameName="p-2 px-3 text-uppercase">Product</div>
                                                </th>
                                                <th scope="col" classNameName="border-0 bg-light">
                                                    <div classNameName="py-2 text-uppercase">Price</div>
                                                </th>
                                                <th scope="col" classNameName="border-0 bg-light">
                                                    <div classNameName="py-2 text-uppercase">Quantity</div>
                                                </th>
                                                <th scope="col" classNameName="border-0 bg-light">
                                                    <div classNameName="py-2 text-uppercase">Remove</div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row" classNameName="border-0">
                                                    <div classNameName="p-2">
                                                        <img src="https://bootstrapious.com/i/snippets/sn-cart/product-1.jpg" alt="" width="70" classNameName="img-fluid rounded shadow-sm" />
                                                        <div classNameName="ml-3 d-inline-block align-middle">
                                                            <h5 classNameName="mb-0"> <a href="#" classNameName="text-dark d-inline-block align-middle">Timex Unisex Originals</a></h5><span classNameName="text-muted font-weight-normal font-italic d-block">Category: Watches</span>
                                                        </div>
                                                    </div>
                                                </th>
                                                {CartDetail.map((product, index) => {
                                                    return (  

                      <div>                                  
                  <td classNameName="border-0 align-middle"><strong>$79.00</strong></td>
                  <td classNameName="border-0 align-middle"><strong>3</strong></td>
                  <td classNameName="border-0 align-middle"><a href="#" classNameName="text-dark"><i classNameName="fa fa-trash"></i></a></td>
                                                 
                                                   </div>  )
                                                })} </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}


        </div >


    )
}
