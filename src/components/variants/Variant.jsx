import React from 'react';

function Variant({id, title, price, maxPrice, available, inventoryManagement}) {
    
  return (
    <div className="modal fade " id={id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog ">
        <div className="modal-content">
            <div className="modal-header ">
                <h1 className="modal-title text-dark ">{title? title:"cargando..." } </h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-start ">
                <h3 className='text-dark'>Price: {price} </h3>
                <h3 className='text-dark'>Historical Price : {maxPrice} </h3>
                <h3 className='text-dark'>Is available? : {`${available}`} </h3>
                <h3 className='text-dark'>Inventory Store : {inventoryManagement} </h3>
                
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-success">Order</button>
            </div>
        </div>
    </div>
</div> 
 
    )
}

export default Variant;
