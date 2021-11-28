import React from 'react'
import { Container, Row } from 'react-bootstrap';
import TheProduct from "../components/ProductCard";

const Products =
    [{
        title: "Vintage Handbag",
        productType: 1,
        price: 56,
        text: "This is a longer card with supporting text below as a naturallead-in to additional content. This content is a little bit longer. ",
        image: "https://cdn.shopify.com/s/files/1/0152/4485/products/FW2120-Hermelinda-Mountain-Dusk-closed.jpg?v=1627338652"
    },
    {
        title: "Nike - Tech Small Items Bag (Dark Grey)",
        productType: 1,
        price: 83,
        text: "This is a longer card with supporting text below as a naturallead-in to additional content. This content is a little bit longer. ",
        image: "https://thumblr.uniid.it/product/181124/3d08a8ea6dc4.jpg"
    },
    {
        title: "Nike - Tech Small Items Bag (Black)",
        productType: 1,
        price: 70,
        text: "This is a longer card with supporting text below as a naturallead-in to additional content. This content is a little bit longer. ",
        image: "https://www.rebelsport.com.au/dw/image/v2/BBRV_PRD/on/demandware.static/-/Sites-srg-internal-master-catalog/default/dwd24d5be5/images/57762401/Rebel_57762401_hi-res.jpg"
    },
    {
        title: "classic Handbag",
        productType: 1,
        price: 55,
        text: "This is a longer card with supporting text below as a naturallead-in to additional content. This content is a little bit longer. ",
        image: "https://cdn.shopify.com/s/files/1/0152/4485/products/FW2120-Hermelinda-Mountain-Dusk-closed.jpg?v=1627338652"
    },
    {
        title: "Shoulder Bag",
        productType: 2,
        price: 40,
        text: "This is a longer card with supporting text below as a naturallead-in to additional content. This content is a little bit longer. ",
        image: "https://cdn.shopify.com/s/files/1/0152/4485/products/FW2138-Lidia-Midnight-Black-Front.jpg?v=1619155230"
    }
    ]


export default function Crossbody() {
    return (
        <div>
            <Container>
                <h2 class="display-4 text-center mt-5 mb-3">Cross Body Items</h2>
                <Row xs={1} md={4} className="g-4">
                    {Products.map((product, index) => {
                        if(product.productType === 1){

                       
                        return (
                            <TheProduct
                                image={product.image}
                                title={product.title}
                                text={product.text}
                                price={product.price}
                                color={product.color} />
                        );}
                    })}
                
                </Row>
            </Container>
        </div>
    )
}
