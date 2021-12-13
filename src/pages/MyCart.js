import React, { useState } from 'react'
import { useParams } from "react-router";
import { Row, Col, Container, Button, Figure, Accordion, img } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../features/ProductSlice";
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
            {/* <div class="px-4 px-lg-0">

                <div class="pb-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">

                                <div class="table-responsive">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col" class="border-0 bg-light">
                                                    <div class="p-2 px-3 text-uppercase">Product</div>
                                                </th>
                                                <th scope="col" class="border-0 bg-light">
                                                    <div class="py-2 text-uppercase">Price</div>
                                                </th>
                                                <th scope="col" class="border-0 bg-light">
                                                    <div class="py-2 text-uppercase">Quantity</div>
                                                </th>
                                                <th scope="col" class="border-0 bg-light">
                                                    <div class="py-2 text-uppercase">Remove</div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row" class="border-0">
                                                    <div class="p-2">
                                                        <img src="https://bootstrapious.com/i/snippets/sn-cart/product-1.jpg" alt="" width="70" class="img-fluid rounded shadow-sm" />
                                                        <div class="ml-3 d-inline-block align-middle">
                                                            <h5 class="mb-0"> <a href="#" class="text-dark d-inline-block align-middle">Timex Unisex Originals</a></h5><span class="text-muted font-weight-normal font-italic d-block">Category: Watches</span>
                                                        </div>
                                                    </div>
                                                </th>
                                                {CartDetail.map((product, index) => {
                                                    return (  

                      <div>                                  
                  <td class="border-0 align-middle"><strong>$79.00</strong></td>
                  <td class="border-0 align-middle"><strong>3</strong></td>
                  <td class="border-0 align-middle"><a href="#" class="text-dark"><i class="fa fa-trash"></i></a></td>
                                                 
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


            <Container>
                <Row>
                    <Col xs={5}>
                        <Col xs={12}>
                            <Col md={2}>
                                <h3 > Total: </h3>
                                <h2 className="ProductDetail">${total}</h2>
                            </Col>
                        </Col>
                    </Col>
                    <Col xs={7}>
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
                                                        <BsTrash />
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
        </div>


    )
}
