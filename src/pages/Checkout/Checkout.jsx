import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { auth, provider } from "../../stores/firebase/config";
import { fetchCartItems, deleteItem } from "../../stores/slices/carts.slice";
import { Link, useNavigate } from "react-router-dom";
import { collection, addDoc } from 'firebase/firestore';
import { firestores } from '../../stores/firebase/config';

function CartCheckout() {
    const [cardNumber, setCardNumber] = useState('');
    const [nameOnCard, setNameOnCard] = useState('');
    const [expiration, setExpiration] = useState('');
    const [nameproduct, setNameproduct] = useState('');
    const [cvv, setCvv] = useState('');
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchCartItems());
    }, [dispatch]);

    const nameproductcc = cartItems.length > 0 ? cartItems[0].name : '';

    function handleCheckout(e) {
        e.preventDefault();

        if (cardNumber === "" || nameOnCard === "" || expiration === "" || cvv === "") {
            return;
        }

        if (!auth.currentUser) {
            navigate("/login");
            return;
        }

        const movieCollRef = collection(firestores, 'test');
        addDoc(movieCollRef, { nameproductcc, cardNumber, nameOnCard, expiration, cvv })
            .then(response => {
                console.log(response, "dasdasd");

                setCardNumber("");
                setNameOnCard("");
                setExpiration("");
                setCvv("");
            })
            .catch(error => {
                console.log(error.message);
            });

        alert(nameproduct);
    }


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

    return (
        <section className="h-100 h-custom" style={{ backgroundColor: "black", marginTop: "50px" }}>
            <MDBContainer className="h-100 py-5">
                <MDBRow className="justify-content-center align-items-center h-100" >
                    <MDBCol>
                        <MDBCard className="shopping-cart" style={{ borderRadius: "15px", background: "rgb(239, 236, 236)" }}>
                            <MDBCardBody className="text-black">
                                <MDBRow onClick={handleCheckout}>
                                    <MDBCol lg="7" className="px-5 py-4">
                                        <MDBTypography
                                            tag="h3"
                                            className="mb-5 pt-2 text-center fw-bold text-uppercase"
                                        >
                                            Your products
                                        </MDBTypography>
                                        {cartItems.map((item) => (
                                            <div className="d-flex align-items-center mb-5" key={item.id}>
                                                <div className="flex-shrink-0">
                                                    <MDBCardImage
                                                        src={item.url}
                                                        fluid
                                                        style={{ width: "150px" }}
                                                        alt="Generic placeholder image"
                                                    />
                                                </div>

                                                <div className="flex-grow-1 ms-3">
                                                    <a href="#!" className="float-end text-black" onClick={() => handleDeleteItem(item.id)}>
                                                        <MDBIcon fas icon="times" />
                                                    </a>
                                                    <MDBTypography tag="h5" className="text-primary">
                                                        {item.name}
                                                    </MDBTypography>
                                                    <MDBTypography tag="h6" style={{ color: "#9e9e9e" }}>
                                                        {item.type}
                                                    </MDBTypography>

                                                    <div className="d-flex align-items-center">
                                                        <p className="fw-bold mb-0 me-5 pe-3">{item.price}$</p>

                                                        <div className="def-number-input number-input safari_only">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        <hr
                                            className="mb-4"
                                            style={{
                                                height: "2px",
                                                backgroundColor: "#1266f1",
                                                opacity: 1,
                                            }}
                                        />

                                        <div className="d-flex justify-content-between px-x">
                                            <p className="fw-bold">Total quantity:</p>
                                            <p className="fw-bold">{getTotalQuantity()}</p>
                                        </div>
                                        <div
                                            className="d-flex justify-content-between p-2 mb-2"
                                            style={{ backgroundColor: "#e1f5fe" }}
                                        >
                                            <MDBTypography tag="h5" className="fw-bold mb-0">
                                                Total:
                                            </MDBTypography>
                                            <MDBTypography tag="h5" className="fw-bold mb-0">
                                                {getTotalPrice()}$
                                            </MDBTypography>
                                        </div>
                                    </MDBCol>
                                    <MDBCol lg="5" className="px-5 py-4">
                                        <MDBTypography
                                            tag="h3"
                                            className="mb-5 pt-2 text-center fw-bold text-uppercase"
                                        >
                                            Payment
                                        </MDBTypography>

                                        <form className="mb-5">
                                            <MDBInput
                                                className="mb-5"
                                                label="Card number"
                                                type="text"
                                                size="lg"
                                                value={cardNumber}
                                                onChange={e => setCardNumber(e.target.value)}
                                            />

                                            <MDBInput
                                                className="mb-5"
                                                label="Name on card"
                                                type="text"
                                                size="lg"
                                                value={nameOnCard}
                                                onChange={e => setNameOnCard(e.target.value)}
                                            />

                                            <MDBRow>
                                                <MDBCol md="6" className="mb-5">
                                                    <MDBInput
                                                        className="mb-4"
                                                        label="Expiration"
                                                        type="text"
                                                        size="lg"
                                                        minLength="7"
                                                        maxLength="7"
                                                        value={expiration}
                                                        onChange={e => setExpiration(e.target.value)}
                                                        placeholder="MM/YYYY"
                                                    />
                                                </MDBCol>
                                                <MDBCol md="6" className="mb-5">
                                                    <MDBInput
                                                        className="mb-4"
                                                        label="Cvv"
                                                        type="text"
                                                        size="lg"
                                                        minLength="3"
                                                        maxLength="3"
                                                        placeholder="&#9679;&#9679;&#9679;"
                                                        value={cvv}
                                                        onChange={e => setCvv(e.target.value)}
                                                    />
                                                </MDBCol>
                                            </MDBRow>

                                            {auth.currentUser ? (
                                                <button type="submit">CheckOut</button>
                                            ) : (
                                                <Link to="/login">Login CheckOut</Link>
                                            )}

                                            <MDBTypography
                                                tag="h5"
                                                className="fw-bold mb-5"
                                                style={{ position: "absolute", bottom: "0" }}
                                            >
                                                <Link to="/shop">
                                                    <MDBIcon fas icon="angle-left me-2" />
                                                    Back to shopping
                                                </Link>
                                            </MDBTypography>
                                        </form>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}

export default CartCheckout;
