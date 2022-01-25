import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import "./style.css";
import { Link } from "react-router-dom"

function Details(test) {
    const [quantity, setQuantity] = useState(0);
    const [sizes, setSizes] = useState(0);
    const [colors, setColors] = useState("");
    const [total, setTotal] = useState(0);
    const title = test.title;
    const price = test.price;
    const color = test?.color;
    const size = test?.color;
    const img = test?.img;
    var siz = [];
    var colores = [];

    const colorFilter = color?.filter(color => color.name === "Color");
    colores = colorFilter ? Object.values(colorFilter[0].values) : false;
    const sizeFilter = size?.filter(size => size.name === "Size");
    siz = sizeFilter ? Object.values(sizeFilter[0].values) : false;

    const handleSize = (value) => {
        setSizes(value);
    };
    const handleColor = (value) => {
        setColors(value);
    };
    const handleTotal = (value) => {
        setTotal(value);
    };

    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1);

        } else {
            setQuantity(quantity + 1);

        }
    };


    return (
        <div className='row container-sm col-sm-12 col-md-6'>
            <h1 className='text-center col-md-12 col-sm-12 '>{title} </h1>
            <h2 className='col-md-12 col-sm-12 text-center text-wrap'>$ {price}  <span className='gris'> $3528100</span>  </h2>
            <div className='col  container-sm'>
                <h3 className='container-sm text-center col-sm-12 row '>{color ? color[0]["name"] : "cargando"} : </h3>
                <div>
                    {colores ? colores.map((color, index) => <button style={{ backgroundColor: `${color} `, color: "white" }} className=' btn btn-secundary btn-outline-primary col-sm-3 col-md-3  m-1 rounded-3 p-md-3 w-md-25' value={color} key={index} onClick={(e) => handleColor(e.target.value)}>{color}</button>) : <h3 className='col'>cargando</h3>}
                </div>
                <hr className='col-sm-12' />
                <br />
                <div className='container-sm col-sm-12' >
                    <h3 className=' col '>{size ? size[1]["name"] : "cargando"} : </h3>
                    {siz ? siz.map((size, index) => {
                        return <button key={index} value={size} className='col btn btn-secundary btn-outline-primary text-start border border-dark m-1' onClick={(e) => handleSize(e.target.value)}>{size}</button>
                    }) : "cargando"
                    }
                    <br />
                </div>

            </div>
            <hr className='col-sm-12' />
            <div className=' container-fluid '>
                <div className='container-fluid  d-flex h-xl-50'>
                    <div className='col-md-6 col-sm-6  btn-group justify-content-around'>
                        <button className='col-1 btn btn-outline-primary rounded-3 ' onClick={() => handleQuantity("dec")}> - </button>
                        <button className='col-2 btn btn-outline-primary '> {quantity} </button>
                        <button className='col-1 btn btn-outline-primary rounded-3  ' onClick={() => handleQuantity("inc")}> + </button>
                    </div >

                    <h3 className='col-md-4  col-sm-5 text-end m-sm-1 p-lg-2'>Total : ${quantity * price} </h3>

                </div>
            </div >
            <br />
            <hr className='col-sm-12 mt-2' />
            <div className='row container-fluid  m-1 g-0'>

                <Link to="/variants" className="btn btn-secundary col-sm-12 col-md-5 m-md-1  btn-outline-primary text-center border   ">Variants </Link>
                <button onClick={() => handleTotal(price * quantity)} type="button" className="btn btn-dark col-sm-12 col-md-5 m-1" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                    Add to Cart
                </button>
                <Modal total={total} colors={colors} sizes={sizes} title={title} img={img} />
            </div>
            <br />
            <hr className='col-sm-12' />
            <div className='col-sm-12 '>
                <h3 className='text-start text-md-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, eligendi, unde molestias in sed beatae ad exercitationem quo maiores a cupiditate. Ex quas laboriosam possimus accusantium repellat maxime perspiciatis inventore?</h3>
            </div>
        </div>
    );
}


export default Details;
