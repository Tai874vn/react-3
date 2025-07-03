import React, { useState } from 'react';
import ProductList from './list';
import Modal from './modal';

function ShoesStore({ products }) {
  const [productDetail, setProductDetail] = useState(null);

  const setStateModal = (product) => {
    setProductDetail(product);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Shoes Store</h2>
      <ProductList productsData={products} setStateModal={setStateModal} />
      {productDetail && <Modal content={productDetail} />}
    </div>
  );
}

export default ShoesStore;
