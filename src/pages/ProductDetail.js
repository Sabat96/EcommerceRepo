import React, { useState } from 'react'
import { useParams } from "react-router";
import { Row, Col, Container, Button, Figure } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import { appendProduct, removeProduct } from "../features/ProductSlice";


const MyProducts =
    [
        //   {
        //   title: "Vintage Handbag",
        //   productType: 2,
        //   price: 33,
        //   text: "This is a longer card with supporting text below as a naturallead-in to additional content. This content is a little bit longer. ",
        //   image: "https://cdn.shopify.com/s/files/1/0010/0915/6143/products/il_fullxfull.1167161057_289w_a5645c40-0283-4949-a130-532db9c7609a_1200x.jpg?v=1572126883"
        // },
        {
            id: 1,
            title: "Shoulder Bag",
            productType: 2,
            price: 40,
            text: "This is a longer card with supporting text below as a naturallead-in to additional content. This content is a little bit longer. ",
            image: "https://cdn.shopify.com/s/files/1/0152/4485/products/FW2138-Lidia-Midnight-Black-Front.jpg?v=1619155230"
        },
        {
            id: 2,
            title: "Vintage Handbag",
            productType: 1,
            price: 56,
            text: "This is a longer card with supporting text below as a naturallead-in to additional content. This content is a little bit longer. ",
            image: "https://cdn.shopify.com/s/files/1/0152/4485/products/FW2120-Hermelinda-Mountain-Dusk-closed.jpg?v=1627338652"
        },
        {
            id: 3,
            title: "Nike - Tech Small Items Bag (Dark Grey)",
            productType: 1,
            price: 83,
            text: "This is a longer card with supporting text below as a naturallead-in to additional content. This content is a little bit longer. ",
            image: "https://thumblr.uniid.it/product/181124/3d08a8ea6dc4.jpg"
        },
        {
            id: 4,
            title: "Nike - Tech Small Items Bag (Black)",
            productType: 1,
            price: 70,
            text: "This is a longer card with supporting text below as a naturallead-in to additional content. This content is a little bit longer. ",
            image: "https://www.rebelsport.com.au/dw/image/v2/BBRV_PRD/on/demandware.static/-/Sites-srg-internal-master-catalog/default/dwd24d5be5/images/57762401/Rebel_57762401_hi-res.jpg"
        },
        {
            id: 5,
            title: "classic Handbag",
            productType: 1,
            price: 55,
            text: "This is a longer card with supporting text below as a naturallead-in to additional content. This content is a little bit longer. ",
            image: "https://cdn.shopify.com/s/files/1/0152/4485/products/FW2120-Hermelinda-Mountain-Dusk-closed.jpg?v=1627338652"
        },
    ]

export default function ProductDetail() {

    const dispatch = useDispatch();
    let { id } = useParams();

    return (
        <div>
            <h1>hello {id} </h1>
            {MyProducts.map((product, index) => {
                if (product.id == id) {
                    return (
                        <div>
                            {/* <h2 className="display-4 text-center mt-5 mb-3 deatilHeader ">Product Detail</h2> */}
                            <Figure>

                                <Figure.Image className="AboutImage"
                                    width={500}
                                    height={350}
                                    alt="171x180"
                                    src={product.image}
                                // src="holder.js/171x180"
                                />

                                <Figure.Caption>
                                    <h3 >{product.title}</h3>
                                    <p>
                                        {product.text}
                                    </p>
                                    <h3 className="ProductDetail">{product.price} $</h3>
                                    <div className="mb-2">
                                        {/* <Button variant="secondary" size="lg" onClick={handleSubmit (product.Id)}> */}
                                        <Button variant="secondary" size="lg"
                                            onClick={() => {
                                                dispatch(appendProduct(product));
                                            }}>

                                            Add to Cart
                                        </Button>

                                        <Button variant="danger" size="lg"
                                            onClick={() => {
                                                dispatch(removeProduct(product.id));
                                            }}>

                                            Add to Cart
                                        </Button>
                                    </div>
                                </Figure.Caption>
                            </Figure>
                        </div>
                    )
                }
            })}
        </div>

    )
}





 // <section class="container-fluid text-center py-4 mt-4" id="about">
                    //     <h2 class="display-4 text-center mt-5 mb-3">{product.title}</h2>

                    //     <div class="container ">
                    //         <div class="row">
                    //             <div class="col-12 col-lg-6 col-xl-6 mt-4 centered bg-image">
                    //                 <div class="AboutImage">
                    //                     <img
                    //                         src={product.image}
                    //                         alt=""
                    //                         srcset=""
                    //                     />
                    //                 </div>
                    //             </div>
                    //             <div class="col-12 col-lg-6 col-xl-6 mt-5 AboutText">
                    //                 <p>
                    //                     {product.text}
                    //                 </p>
                    //                 <div className="mb-2">
                    //                     {/* <Button variant="secondary" size="lg" onClick={handleSubmit (product.Id)}> */}
                    //                     <Button variant="secondary" size="lg" >

                    //                         Add to Cart
                    //                     </Button>
                    //                 </div>
                    //             </div>

                    //         </div>
                    //     </div>
                    // </section>