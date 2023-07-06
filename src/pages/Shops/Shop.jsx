import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import "./Shop.scss";
import { useDispatch, useSelector } from 'react-redux';
import { productActions } from '../../stores/slices/products.slice';
import { convertToUSD } from '@mieuteacher/meomeojs';

export default function Shop() {
  const dispatch = useDispatch();
  const productStore = useSelector(store => store.productStore.listProducts);
  console.log("🚀 ~ file: Shop.jsx:11 ~ Shop ~ productStore:", productStore)
  const { type } = useParams();
  
  useEffect(() => {
    dispatch(productActions.findAllProducts());
  }, []);

  let filteredProducts = productStore;
  if (type) {
    filteredProducts = productStore.filter(product => product.type === type);
  }
  const items = document.querySelectorAll('.Item');

  items.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('clicked');
    });
  });




  return (
    <div className='container'>

      <div className='Filter'>
        <h2>Genres</h2>
        <ul className="list-group mt-3">
          <Link to="/shop/Action">
            <div className='Icin'>
              <a className="dropdown-item" >
                Action
              </a>
            </div>
          </Link>
          <Link to="/shop/Strategy">
            <div className='Icin'>
              <a className="dropdown-item" >
                Strategy
              </a>
            </div>


          </Link>
          <Link to="/shop/RPG">
            <div className='Icin'>
              <a className="dropdown-item" >
                RPG
              </a>
            </div>


          </Link>
          <Link to="/shop/Shooter">
            <div className='Icin'>
              <a className="dropdown-item" >
                Shooter
              </a>
            </div>


          </Link>
          <Link to="/shop/Adventure">
            <div className='Icin'>
              <a className="dropdown-item" >
                Adventure
              </a>
            </div>


          </Link>
          <Link to="/shop/Puzzle">
            <div className='Icin'>
              <a className="dropdown-item" >
                Puzzle
              </a>
            </div>


          </Link>
          <Link to="/shop/Racing">
            <div className='Icin'><a className="dropdown-item" >
              Racing
            </a></div>
          </Link>
          <Link to="/shop/Sports">
            <div className='Icin'>
              <a className="dropdown-item" >
                Sports
              </a>
            </div>
          </Link>
        </ul>
      </div>
      <div className="containerShop">
        <div style={{
          marginTop:"120px"
        }}><h1>Trending and interesting</h1>
          <div>Based on player counts and ratings</div>
        </div>

        <Link to="/shop">
          <div className='Icin'>
            <button type="button" class="btn btn-dark">Clear Filter</button>
          </div>

        </Link>
        <div className="containerAllItem">
          {filteredProducts.map(product => (
            <div className="Item" key={product.id}>
              <div className="imageItem">
                <img src={product.url} alt="" />
              </div>
              <div className="itemDetail">
                <h6 style={{ fontWeight: "bold" }}>{product.name}</h6>
                <p>{convertToUSD(product?.price)}</p>
                <Link className='detailButton' to={"/detail/" + product.id}>Game Time</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div >
  )
}
