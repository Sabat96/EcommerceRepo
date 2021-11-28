import Tabs from "@restart/ui/esm/Tabs";
import React from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import TheProduct from "../components/ProductCard";



const MyProducts =
    [
      {
        title: "Shoulder Bag",
        productType: 2,
        price: 40,
        text: "This is a longer card with supporting text below as a naturallead-in to additional content. This content is a little bit longer. ",
        image: "https://cdn.shopify.com/s/files/1/0152/4485/products/FW2138-Lidia-Midnight-Black-Front.jpg?v=1619155230"
    },
    {
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
   
    ]

export default function Products() {
  return <div>


<Container>
                <h2 class="display-4 text-center mt-5 mb-3">Our Products</h2>
                <Row xs={1} md={4} className="g-4">
                    {MyProducts.map((product, index) => {
                       
                        return (
                            <TheProduct
                                image={product.image}
                                title={product.title}
                                text={product.text}
                                price={product.price}
                                color={product.color} />
                        );
                    })}
                
                </Row>
            </Container>




    {/* __________________________________ Tab Pane____________________ */}
    {/* <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first"></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Tab 2</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              fffffffff
              <Tab.Pane />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <Tab.Pane />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container> */}


  </div>;
}
