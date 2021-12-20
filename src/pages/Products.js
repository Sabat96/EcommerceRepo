import Tabs from "@restart/ui/esm/Tabs";
import React from "react";
import { Col, Container, Nav, Row, Spinner, Tab } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import TheProduct from "../components/ProductCard";
import { useGetProductsQuery } from "../features/ecommerceApi";



export default function Products() {

  const { data, isError, isLoading } = useGetProductsQuery()
  if (isLoading) {
    return <div>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>

  }
  return <div>

    <Container>

      <div className=" ">
        <div className="row">
          {/* <div className="col-md-3">
          <section className="panel">
            <div className="panel-body">
              <input type="text" placeholder="Keyword Search" className="form-control" />
            </div>
          </section>
          <section className="panel">
            <header className="panel-heading">
              Category
            </header>
            <div className="panel-body">
              <ul className="nav prod-cat">

                <li>
                  <a href="#"><i className="fa fa-angle-right"></i> Bags &amp; Purses</a>
                </li>
                <li>
                  <a href="#"><i className="fa fa-angle-right"></i> Beauty</a>
                </li>
                <li>
                  <a href="#"><i className="fa fa-angle-right"></i> Coat &amp; Jacket</a>
                </li>

              </ul>
            </div>
          </section>

          <section className="panel">
            <header className="panel-heading">
              Filter
            </header>
            <div className="panel-body">
              <form role="form product-form">
                <div className="form-group">
                  <label>Brand</label>
                  <select className="form-control hasCustomSelect formControl1" >
                    <option>Wallmart</option>
                    <option>Catseye</option>
                    <option>Moonsoon</option>
                    <option>Textmart</option>
                  </select>
                  <span className="customSelect form-control formControl2" ><span className="customSelectInner formControl3" >Wallmart</span></span>
                </div>
                <button className="btn btn-primary" type="submit">Filter</button>
              </form>
            </div>
          </section>
        </div> */}
        <div className="col-md-12">
        <Row xs={1} md={5} className="g-4">
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
        </div>
        </div>
      </div>
    </Container>


    {/* <Container>
      <h2 className="display-4 text-center mt-5 mb-3">Our Products</h2>
      <Row xs={1} md={4} classNameName="g-4">
        {data?.map((product, index) => {

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
    </Container> */}



  </div>;
}
