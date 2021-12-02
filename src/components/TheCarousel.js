import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default function TheCarousel() {
    return (
        <div>
            {/* <div class="jumbotron jumbotron-fluid">
            <div class="container-fluid text-center"> */}
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100 CarouselImage"
                            src="https://image.freepik.com/free-photo/colorful-abstract-nebula-space-background_53876-111356.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Ella Handbag</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    {/* <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100 CarouselImage"
                            src="https://image.freepik.com/free-photo/colorful-abstract-nebula-space-background_53876-111356.jpg"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Ella Handbag</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 CarouselImage"
                            src="https://image.freepik.com/free-photo/colorful-abstract-nebula-space-background_53876-111356.jpg"
                            // src="https://images.selfridges.com/is/image/selfridges/210818_BVLGARI_BRAND_PAGE_BAGS_HERO_SLIDER?wid=1920&fmt=jpg&fit=constrain&qlt=95,1"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Ella Handbag</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item> */}
                </Carousel>
            {/* </div>
        </div>  */}
        </div>
    )
}


