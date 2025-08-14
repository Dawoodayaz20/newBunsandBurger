import React from 'react';
import HomeItems from '../../components/homeItems/home-items.component';
import Header from '../../components/header/header.component';
import BurgerChatWidget from '../chatpage/chatWidget.component';

const HomePage = () => {
    return (
    <>
        <Header />
        <BurgerChatWidget />
        <div className='mt-52 md:mt-40'>
        <HomeItems />
        </div>
    </>
    )
}

export default HomePage