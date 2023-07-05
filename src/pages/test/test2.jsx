import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCartItems, deleteItem } from '../../stores/slices/carts.slice';
import axios from 'axios';

function Cart() {
    const cartItems = useSelector((state) => state.cart.items);
    const loading = useSelector((state) => state.cart.loading);
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
        return cartItems.reduce((total, item) => total + item.quantity , 0);
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity , 0);
    };


    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>Cart</h1>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        <span>{item.name}</span>
                        <span>{item.price}</span>
                        <span>{item.quantity}</span>
                        <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <p>Total quantity: {getTotalQuantity()}</p>
            <p>Total price: {getTotalPrice()}</p>
        </div>
    );
}

export default Cart;
