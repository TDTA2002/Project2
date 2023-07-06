import React, { useState } from "react";

function App() {
    const [cardNumber, setCardNumber] = useState("");
    const [nameOnCard, setNameOnCard] = useState("");
    const [expiration, setExpiration] = useState("");
    const [cvv, setCVV] = useState("");

    const handleCheckout = async () => {
        try {
            if (!auth.currentUser) {
                await auth.signInWithPopup(provider);
                return;
            }

            await firestore.collection("orders").add({
                items: cartItems,
                cardNumber,
                nameOnCard,
                expiration,
                cvv,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            });

            console.log("Đơn hàng đã được xử lý thành công.");
            console.log("Thông tin đơn hàng:", cartItems);
            window.location.href = "/";
        } catch (error) {
            console.log("Lỗi khi xử lý đơn hàng:", error);
            window.location.href = "/login";
        }
    };

    return (
        <div>
            <h1>Giỏ hàng</h1>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        <h3>{item.name}</h3>
                        <p>Giá: {item.price}</p>
                    </li>
                ))}
            </ul>

            <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="Card Number"
            />
            <input
                type="text"
                value={nameOnCard}
                onChange={(e) => setNameOnCard(e.target.value)}
                placeholder="Name on Card"
            />
            <input
                type="text"
                value={expiration}
                onChange={(e) => setExpiration(e.target.value)}
                placeholder="Expiration"
            />
            <input
                type="text"
                value={cvv}
                onChange={(e) => setCVV(e.target.value)}
                placeholder="CVV"
            />

            <button onClick={handleCheckout}>Thanh toán</button>
        </div>
    );
}

export default App;
