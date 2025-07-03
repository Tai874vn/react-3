import React from 'react';

function ProductItem({ item, setStateModal }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img src={item.image} className="card-img-top" alt={item.name} />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.shortDescription}</p>
          <p className="card-text"><strong>${item.price}</strong></p>
          <button
            className="btn btn-primary"
            onClick={() => setStateModal(item)}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
