import React, { useEffect, useState } from 'react';
import { fetchProduct } from "../apiCalls/shopifyCalls";
import Variant from '../components/variants/Variant';

function Variants() {
    const [variants, setVariants] = useState(null);
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [available, setAvailable] = useState("");
    const [inventoryManagement, setInventoryManagement] = useState("");



    useEffect(() => {
        fetchProduct()
            .then(data => {
                let arreglo = data.data.variants
                setVariants(arreglo)
                
            })
            .catch(err => console.log(err))
    }, [])
  return (
  <div className='container-sm row g-0'>
      <h1 className='col-sm-12 text-center'> Free Traine 3</h1>
  <div className='container-fluid row m-1 g-0 d-flex justify-content-around'>
      { variants ?variants.map((variant, index) => {
                            return <div  type="button" key={variant.id} className='btn btn-outline-primary pb-sm-1 col-sm-3 m-md-1 col-md-3 rounded-3'style={{backgroundColor:`${variant.option1} `}} data-bs-toggle="modal" data-bs-target={`#id${variant.id} `} 
                            onClick={()=>{
                                setId(variant.id)
                                setTitle(variant.title)
                                setPrice(variant.price)
                                setMaxPrice(variant.compare_at_price)
                                setAvailable(variant.available)
                                setInventoryManagement(variant.inventory_management)
                            }}>
                            
                                
                                <h3 className='text-info '>{variant.title} </h3>
                                <h3 className='text-info'>{variant.price} </h3>
                                
                                <Variant id={`id${id}`} title={title} price={price} maxPrice={maxPrice} available={available} inventoryManagement={inventoryManagement} />
                            </div>
                        }
                        ): "cargando"}
  </div>
  </div>);
}

export default Variants;
