import React from 'react';
import HomeItems from '../../components/homeItems/home-items.component';
import Header from '../../components/header/header.component';

const HomePage = () => {
    return (
    <>
        <Header />
        <div className='mt-52 md:mt-40'>
        <HomeItems />
        </div>
    </>
    )
}

export default HomePage