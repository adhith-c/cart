import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "./components/CartPage";
import HomePage from "./components/HomePage";

import NavBar from "./components/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/home"
            element={<HomePage />}
          />
          <Route
            path="/cart"
            element={<CartPage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
