import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ShopContexProvider from "./contex/ShopContex.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ShopContexProvider>
      <App />
    </ShopContexProvider>
  </BrowserRouter>
);
