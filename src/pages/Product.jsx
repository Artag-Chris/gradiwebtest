import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Carousel from '../components/Carousel/Carousel';
import Details from '../components/Details/Details';

function Product(img) {
  const test = img.desc;
  const title = img.title;
  const price = img.price;
  const color = img.color;
  
  return (<div className='container row g-0'>
    <Navbar/>
    <Carousel img={img} />
    <Details  test={test} title={title} price={price} color={color} img={img} />
    <Navbar/>
  </div>);
}

export default Product;
