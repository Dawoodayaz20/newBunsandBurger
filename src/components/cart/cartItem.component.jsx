import React from "react";
import { useCart } from "./cartcontext";
import Header from "../header/header.component";
import BurgerChatWidget from "../../pages/chatpage/chatWidget.component";

const CartItems = () => {
    const { cart, removeFromCart, clearCart } = useCart(); // ✅ Get cart functions


    return (
      <>
        <Header />
        <BurgerChatWidget />
        <div className="p-6 my-52">
          <h1 className="text-2xl font-bold text-red-700 my-5">Your Cart</h1>
          {cart.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <div>
              {cart.map((item) => (
                <div key={item.id} className="border-b py-4 flex justify-between">
                  <div>
                    <h2 className="text-base font-semibold">{item.name}</h2>
                    <p className="text-red-700">Price: {item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                  <div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-red-500 text-white px-2 h-12 py-0 rounded transition duration-200 hover:scale-105"
                    >
                      Remove
                    </button>
                    <button
                      onClick={() => alert(`Your ${item.name} has been ordered`)}
                      className="bg-red-500 text-white px-2 h-12 py-0 rounded transition duration-200 hover:scale-105 ml-1"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              ))}
              <button
                onClick={clearCart}
                className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded transition duration-200 hover:scale-105"
              >
                Clear Cart
              </button>
            </div>
          )}
        </div>
      </>
    );
  };

export default CartItems;

