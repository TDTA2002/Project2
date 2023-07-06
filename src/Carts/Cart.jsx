import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCartItems, deleteItem } from "../stores/slices/carts.slice";
import axios from 'axios';
import "./Cart.scss"
import { Link } from 'react-router-dom';

function Cart({ handleClose, show }) {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchCartItems());
    }, [dispatch]);

    const handleDeleteItem = async (itemId) => {
        try {
            await axios.delete(`${process.env.REACT_APP_SERVER_JSON}cartItems/${itemId}`);
            dispatch(deleteItem(itemId));
        } catch (error) {
            console.log('Error deleting item:', error);
        }
    };

    const getTotalQuantity = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => Math.floor(total + item.price * item.quantity), 0);
    };


    // if (loading) {
    //     return <p>Loading...</p>;
    // }


    return (
        <>
            <div className='Cart'>
                <Offcanvas show={show} onHide={handleClose} placement="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title><h2 className='totalquai'>Total quantity: {getTotalQuantity()}</h2>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className='cart'>

                            {cartItems.map((item) => (
                                <div key={item.id} className='allitem'>
                                    <div className='itemcart1'>

                                        <span className='name'>{item.name}</span>
                                        <span className='info'>
                                            <span className='price'>${item.price}</span>
                                            <button style={{ color: "white", fontWeight: "boid" }} onClick={() => handleDeleteItem(item.id)}>X</button>
                                        </span>

                                    </div>
                                </div>
                            ))}


                            <p className='totalpri'>
                                <span>Total price: ${getTotalPrice()}</span>
                                <Link to="/checkout"> <span style={{ color: "#f28d8d" }}>CheckOut</span></Link>
                            </p>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </div >
        </>
    );
}

export default Cart;