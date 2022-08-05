import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useItems } from "../contexts/ItemsContext";
import api from "../services/api";

const Home = () => {
    const { items, setItems, selectedItems, setSelectedItems } = useItems();

    function handleClick(id) {
        const selected = items[id];
        setSelectedItems([...selectedItems, selected]);
    }

    async function getData() {
        const { data } = await api.get();
        setItems(data);
    }

    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log(items);

    return (
        <div className="container">
            <header>
                <h1>Items</h1>
                <Link to="/checkout">Carrinho: {selectedItems.length}</Link>
            </header>

            <ul style={{ marginTop: "1rem" }}>
                {items &&
                    items.map((item) => (
                        <li key={item.id}>
                            <h4>{item.name}</h4>
                            <button onClick={(e) => handleClick(item.id)}>
                                Adicionar
                            </button>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default Home;
