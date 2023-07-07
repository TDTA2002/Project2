import React, { useEffect, useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { firestores } from '../../stores/firebase/config';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartItems, deleteItem } from "../../stores/slices/carts.slice";

export default function Checkout() {
    const [cardNumber, setCardNumber] = useState('');
    const [nameOnCard, setNameOnCard] = useState('');
    const [expiration, setExpiration] = useState('');
    const [nameproduct, setNameproduct] = useState('');
    const [cvv, setCvv] = useState('');
    const cartItems = useSelector((state) => state.cart.items);
    console.log("🚀 ~ file: Checkout.jsx:39 ~ CartCheckout ~ cartItems:", cartItems)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCartItems());
    }, [dispatch]);

    const nameproductcc = cartItems.length > 0 ? cartItems[0].name : '';

    function handleSubmit(e) {
        e.preventDefault();

        if (cardNumber === '' || nameOnCard === '' || expiration === '' || cvv === '') {
            return;
        }

        const movieCollRef = collection(firestores, 'test');
        addDoc(movieCollRef, { nameproductcc, cardNumber, nameOnCard, expiration, cvv })
            .then(response => {
                console.log(response, "dasdasd");
            })
            .catch(error => {
                console.log(error.message);
            });

        alert(nameproduct);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="cardNumber">Card Number</label>
                <input type="text" id="cardNumber" value={cardNumber} onChange={e => setCardNumber(e.target.value)} />
                <label htmlFor="nameOnCard">Name on Card</label>
                <input type="text" id="nameOnCard" value={nameOnCard} onChange={e => setNameOnCard(e.target.value)} />
                <label htmlFor="expiration">Expiration</label>
                <input type="text" id="expiration" value={expiration} onChange={e => setExpiration(e.target.value)} />
                <label htmlFor="cvv">CVV</label>
                <input type="text" id="cvv" value={cvv} onChange={e => setCvv(e.target.value)} />
                <button type="submit">Add movie</button>
            </form>
        </div>
    );
}
