import React, { useState } from 'react'
import { Row, Col, Container, Button, Figure } from 'react-bootstrap'
import { appendTodo, laybaTodo } from "../features/ProductSlice";
import { useDispatch, useSelector } from "react-redux";

const MyProduct =
    [{
        Id: 1,
        title: "Vintage Handbag",
        price:10,
        text: "This is a longer card with supporting text below as a naturallead-in to additional content. This content is a little bit longer. ",
        image: "https://media1.popsugar-assets.com/files/thumbor/SV_v6RslnNOdaTH2m1LkDTDFBkQ/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2019/06/21/653/n/45961726/5c6602dd80b6614a_GettyImages-993412110/i/Herm%C3%A8s-Kelly.jpg"
    },]



export default function ProductDetail() {

    const [value, setValue] = useState("");
    const dispatch = useDispatch();
    const myCart = useSelector((state) => state.product);

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     const productObj = { ProductId: value};

    //     if (value !== "") {
    //         dispatch(appendTodo(productObj));
    //         setValue("");
    //     }
    // };
    return (
        <div>
            {/* <Container> */}
                {MyProduct.map((product, index) => {
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
                                        <Button variant="secondary" size="lg" >

                                            Add to Cart
                                        </Button>
                                    </div>
                                </Figure.Caption>
                            </Figure>
                        </div>
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
                    )
                })}
            {/* </Container> */}
        </div>

    )
}
