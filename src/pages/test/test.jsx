// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { productActions } from "./../../stores/slices/products.slice";

// const SomeComponent = () => {
//     const dispatch = useDispatch();
//     const productStore = useSelector((store) => store.productStore.listProducts);
//     const cartItems = useSelector((store) => store.productStore.cart);
//     const [cartProducts, setCartProducts] = useState([]);

//     useEffect(() => {
//         dispatch(productActions.findAllProducts());
//     }, []);

//     const handleAddToCart = async (product) => {
//         dispatch(productActions.addToCart(product));
//         try {
//             const response = await fetch("http://localhost:4000/cartItems", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(product),
//             });
//             if (response.ok) {
//                 console.log("Cart item saved to DB JSON.");
//             } else {
//                 console.error("Failed to save cart item to DB JSON.");
//             }
//         } catch (error) {
//             console.error("An error occurred while saving cart item to DB JSON:", error);
//         }
//     };

//     useEffect(() => {
//         dispatch(productActions.findAllProducts());
//         const productsInCart = productStore.filter((product) =>
//             cartItems.includes(product.id)
//         );
//         setCartProducts(productsInCart);
//     }, []);

//     return (
//         <div>
//             <h2>Products</h2>
//             {productStore.map((product) => (
//                 <div key={product.id}>
//                     <h3>{product.name}</h3>
//                     <p>{product.description}</p>
//                     <p>Price: {product.price}</p>
//                     <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
//                     <hr />
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default SomeComponent;
