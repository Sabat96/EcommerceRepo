import React from "react";
import { useGetcategoryByNameQuery } from "../services/ProductsApi";
// import ProductCard from "./components/ProductCard";
import TheCarousel from "../components/TheCarousel";
import TheProduct from "../components/ProductCard";
import { Container, Row } from "react-bootstrap";
import { useGetProductsQuery } from "../features/ecommerceApi.js";
import Spinner from 'react-bootstrap/Spinner'

const Products =
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

export default function Home() {
  const { data, isError, isLoading } = useGetProductsQuery()
  if (isLoading) {
    return <div>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>

  }
  if (data) {

    //  return <div> {JSON.stringify(data)}</div>

  }
  return (
    <div>
      <TheCarousel />

      <Container>
        <h2 class="display-4 text-center mt-5 mb-3">Our Products</h2>
        <Row xs={1} md={4} className="g-4">
          {data?.map((product, index) => {
            return (
              <TheProduct
                id={product._id}
                image={product.image}
                // title={product.title}
                // text={product.text}
                price={product.price}
                name={product.name}
                category={product.category} />
            );
          })}
        </Row>
        <Row></Row>
      </Container>
      {
      /* <h1> Home page</h1>
      <p>{user.name}</p>
      <p>{user.age}</p>
      <p>{user.email}</p>

      <ChangeColor /> */}
    </div>
  );
}
