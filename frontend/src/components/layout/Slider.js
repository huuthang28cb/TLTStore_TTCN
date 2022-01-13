import React, { Component } from 'react';

class Sliderr extends Component {
    render() {
        return (

            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://cdn-crownx.winmart.vn/images/prod/5_f57517d5-2c25-4edb-a372-9bc83971ef1b.jpg" height={500} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://cdn-crownx.winmart.vn/images/prod/7_feba59fd-77f4-41ae-80ed-02cb70628eef.jpg" height={500} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://cdn-crownx.winmart.vn/images/prod/3_f7f32174-8dfb-4783-b5c8-72e2827d1eae.jpg" height={500} alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
}

export default Sliderr;