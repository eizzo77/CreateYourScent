import axios from "axios";
import { useEffect } from "react";
import "./CartPage.components.css";

export const CartPage = () => {

    useEffect(() => {
        const fetch = async () => {
            const orderData = await axios.get("http://localhost:5555/api/order");
            console.log(orderData);
        }
        fetch();
    },[])

    return (
        <div className="cart-page">
            <div className="cart-container"/>
            <div className="cart-shopping-list">
                <div className="cart-item">
                    <img></img>
                    <div className="cart-item-description">

                    </div>
                </div>
                <div className="cart-item">
                    <img></img>
                    <div className="cart-item-description">
                        
                    </div>
                </div>
            </div>
        </div>
    );
}