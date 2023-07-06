import React, { useEffect, useState } from 'react';
import "./DetailItem.scss";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { productActions } from '../../stores/slices/products.slice';
import { convertToUSD } from '@mieuteacher/meomeojs';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';

export default function DetailItem() {
  const { id } = useParams();
  const [addToCartClicked, setAddToCartClicked] = useState(false);

  const dispatch = useDispatch();
  const productStore = useSelector(store => store.productStore.listProducts);
  const cartItems = useSelector((store) => store.productStore.cart);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    dispatch(productActions.findAllProducts());
  }, []);

  console.log(productStore, "dwqdqw");
  const product = productStore.find((product) => product.id == id);

  useEffect(() => {
    const productsInCart = productStore.filter((product) =>
      cartItems.includes(product.id)
    );
    setCartProducts(productsInCart);
  }, [productStore, cartItems]);

  const handleAddToCart = async (product) => {
    if (!addToCartClicked) {
      setAddToCartClicked(true);
      dispatch(productActions.addToCart(product));
      try {
        const response = await fetch("http://localhost:4000/cartItems", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        });
        if (response.ok) {
          console.log("Cart item saved to DB JSON.");
          window.location.reload();
        } else {
          console.error("Failed to save cart item to DB JSON.");
        }
      } catch (error) {
        console.error(
          "An error occurred while saving cart item to DB JSON:",
          error
        );
      }
    }
  };

  return (
    <div className="Container">
      <div className="ContainerDetail">
        <div className="slider">
          <Link style={{ color: "White", textDecoration: "none", gap: "20px" }} to="/shop/">
            <h4>
              <span class="material-symbols-outlined">
                arrow_back
              </span>Store
            </h4>
          </Link>
          <Carousel className='slider1'>
            {product?.footage.map((imageUrl, index) => (
              <Carousel.Item key={index}>
                <img className="d-block w-100" src={imageUrl} alt={`Image ${index}`} />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="DetailItem">
          <div className="content">
            <h1 style={{ marginTop: "40px" }}>{product?.name}</h1>
            <div>
              <h6>Released: {product?.release}</h6>
              <h6>Platforms: {product?.platforms}</h6>
              <h6>Main Genre: {product?.type}</h6>
              <h6>Developers: {product?.developers}</h6>
            </div>
            <p>Amount of play: {product?.rating} </p>
            <div className="quantityCart">
              <h5>Price: {convertToUSD(product?.price)} </h5>
              <div className="quantity" style={{ margin: "20px" }}>
              </div>
              <div>
                <button
                  onClick={() => handleAddToCart(product)}
                  disabled={addToCartClicked}
                >
                  {addToCartClicked ? "Added to Cart" : "ADD TO CART"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
