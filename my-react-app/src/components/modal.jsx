import React from 'react';

function Modal({ content }) {
  return (
    <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{content.name}</h5>
          </div>
          <div className="modal-body">
            <img src={content.image} alt={content.name} className="img-fluid mb-3" />
            <p>{content.description}</p>
            <p><strong>Price:</strong> ${content.price}</p>
            <p><strong>Quantity:</strong> {content.quantity}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
