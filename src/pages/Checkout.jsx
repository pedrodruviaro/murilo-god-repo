import React from "react";
import { useItems } from "../contexts/ItemsContext";

const Checkout = () => {
    const { selectedItems } = useItems();

    return (
        <div className="container">
            <h1>Checkout</h1>
            <span>Carrinho: {selectedItems.length}</span>

            <ul>
                {selectedItems.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Checkout;
