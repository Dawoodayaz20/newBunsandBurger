import React from 'react';
import { Link } from 'react-router-dom';

const BurgerChatWidget = () => {

  return (
    <div className="fixed bottom-7 right-4 z-50">
      <Link
        className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-full p-4 shadow-lg"
        to='/chat'
      >
        <span> 💬 </span>
        <span className='hidden lg:inline'> Chat with Us</span>
      </Link>
    </div>
  );
};

export default BurgerChatWidget;
