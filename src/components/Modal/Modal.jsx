import React from 'react';

function Modal(total) {
  var imagen = "";
  imagen = total? total.img.img: "";
  
  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header row g-0">
            <h1 className="modal-title text-dark col">{total.title} </h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body col">
            <div>
              <img className="img-fluid" src={imagen} alt="imagen" />
            </div>
            <h3 className='text-dark col'>Total price: {total.total} </h3>
            <h3 className='text-dark col'>Color: {total.colors} </h3>
            <h3 className='text-dark col'>Size : {total.sizes} </h3>
          
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-success">Buy</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal;
