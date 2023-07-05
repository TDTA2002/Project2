// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { productActions } from '../../stores/slices/products.slice';

// export default function Test2() {
//   const dispatch = useDispatch();
//   const productStore = useSelector(store => store.productStore.listProducts);

//   useEffect(() => {
//     dispatch(productActions.findAllProducts());
//   }, []);

//   return (
//     <div style={{ color: "white" }}>
//       {productStore.map((product) => (
//         <div key={product.id}>
//           <h3>{product.name}</h3>
//           <p>{product.description}</p>
//           <p>Price: {product.price}</p>
//           <button>Add to Cart</button>
//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// }
