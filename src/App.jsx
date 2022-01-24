import './App.css';
import { useState,useEffect } from 'react';
import {fetchProduct} from "./apiCalls/shopifyCalls"
import Product from './pages/Product';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from "react-router-dom";
import Variants from './pages/Variants';


function App() {
  const [product,setProduct] = useState("");
  
  const {images} = product;
  const desc = product.description;
  const title = product.title;
  const price = product.price;
  const col = product.options;
  const color = col?.flat(30)
  
  useEffect(() => {
    fetchProduct()
    .then(data => {let arreglo= data.data
      setProduct(arreglo)})
    .catch(err => console.log(err))
  }, [])
   
  return (
    <div className="App row">
      <BrowserRouter>
      <Router>
      <Switch>
      <Route path="/" exact  >
      <Product img={images} desc={desc} title={title} price={price} color={color} />
      </Route>
      <Route path="/variants" >
        <Variants/>
        </Route>
      </Switch>
      </Router>
    </BrowserRouter>
    </div>
  );
}

export default App;
