import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import ItemsContextProvider from "./contexts/ItemsContext";

function App() {
    return (
        <ItemsContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route element={<Home />} path="/" />
                    <Route element={<Checkout />} path="/checkout" />
                </Routes>
            </BrowserRouter>
        </ItemsContextProvider>
    );
}

export default App;
