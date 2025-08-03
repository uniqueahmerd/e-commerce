import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContex = createContext();

const ShopContexProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [showFooter, setShowFooter] = useState(true);
  const [cart, setCart] = useState({});
  const [lastOrder, setLastOrder] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const navigate = useNavigate();

  const addToCart = async (itemId, size) => {
    if (size) {
      toast.success("Product Added Successfully");
    } else {
      toast.error("Please select a size");
      return;
    }

    let cartCopy = structuredClone(cart);
    if (cartCopy[itemId]) {
      if (cartCopy[itemId][size]) {
        cartCopy[itemId][size] += 1;
      } else {
        cartCopy[itemId][size] = 1;
      }
    } else {
      cartCopy[itemId] = {};
      cartCopy[itemId][size] = 1;
    }
    setCart(cartCopy);
  };

  const getCount = () => {
    let totalCount = 0;

    for (const items in cart) {
      for (const item in cart[items]) {
        try {
          if (cart[items][item] > 0) {
            totalCount += cart[items][item];
          }
        } catch (error) {
          console.error(error);
        }
      }
    }
    return totalCount;
  };

  const updatequantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cart);
    cartData[itemId][size] = quantity;
    setCart(cartData);
  };

  const getCartAmount = () => {
    let totalAmount = 0;

    for (const items in cart) {
      let itemInfo = products.find((products) => products._id === items);
      for (const item in cart[items]) {
        try {
          if (cart[items][item] > 0) {
            totalAmount += itemInfo.price * cart[items][item];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    return totalAmount;
  };

  const placeOrder = (cart) => {
    const now = new Date();
    setLastOrder({
      items: cart,
      date: now.toDateString(), // Format: 'Fri Aug 16 2024'
      paymentMethod: paymentMethod,
    });
    setCart({}); // Optionally clear the cart after placing order
  };

  const value = {
    lastOrder,
    setLastOrder,
    placeOrder,
    paymentMethod, // Expose paymentMethod
    setPaymentMethod, // Expose setPaymentMethod
    navigate,
    getCartAmount,
    updatequantity,
    getCount,
    addToCart,
    cart,
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    showNav,
    setShowNav,
    showFooter,
    setShowFooter,
  };

  return (
    <ShopContex.Provider value={value}>{props.children}</ShopContex.Provider>
  );
};

export default ShopContexProvider;
