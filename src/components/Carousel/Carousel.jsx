import React from 'react';

function Carousel(img) {
    const imagenes = img.img.img;
    const imag = imagenes?.flat(30)
    
    return ( imagenes? <div className='container-sm col-sm-12 g-0 col-md-6'>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner row">
                <div className="carousel-item active ">
                    <img src={imag[0]} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={imag[1]} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={imag[2]} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={imag[3]} className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon bg-black" aria-hidden="false"></span>
                <span className="visually-hidden ">Previous</span>
            </button>
            <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon bg-black" aria-hidden="false"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>: <div className=''>
        <h1>Cargando...</h1>
    </div>) 
}

export default Carousel;
