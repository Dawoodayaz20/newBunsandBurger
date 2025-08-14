import React from "react";
// import { useCart } from "../../components/cart/cartcontext";
import CartItems from "../../components/cart/cartItem.component";
import Header from '../../components/header/header.component';
import BurgerChatWidget from "../chatpage/chatWidget.component";

const CartPage = () => {
    return(
        <>
        <Header />
        <CartItems />
        <BurgerChatWidget />
        </>
        )
}

export default CartPage;