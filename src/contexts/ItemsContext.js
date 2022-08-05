import React, { createContext, useContext, useState } from "react";

const ItemsContext = createContext();
ItemsContext.displayName = "Items Context";

export function useItems() {
    const values = useContext(ItemsContext);
    return values;
}

const ItemsContextProvider = ({ children }) => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [items, setItems] = useState([]);

    return (
        <ItemsContext.Provider
            value={{ selectedItems, setSelectedItems, items, setItems }}
        >
            {children}
        </ItemsContext.Provider>
    );
};

export default ItemsContextProvider;
