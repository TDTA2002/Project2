// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { productActions } from "./productSlice";
// import ProductItem from "../DetailItems/DetailItem";
// import Cart from "./test2";

// const test = () => {
//   const dispatch = useDispatch();
//   const listProducts = useSelector((state) => state.product.listProducts);
//   const cart = useSelector((state) => state.product.cart);

//   useEffect(() => {
//     dispatch(productActions.findAllProducts());
//   }, [dispatch]);

//   const handleAddToCart = (item) => {
//     dispatch(productActions.addToCart(item));
//   };

//   return (
//     <div className="app">
//       <div className="product-list">
//         <h2>Products</h2>
//         {listProducts.map((item) => (
//           <ProductItem
//             key={item.id}
//             item={item}
//             onAddToCart={handleAddToCart}
//           />
//         ))}
//       </div>
//       <Cart cart={cart} />
//     </div>
//   );
// };

// export default test;
