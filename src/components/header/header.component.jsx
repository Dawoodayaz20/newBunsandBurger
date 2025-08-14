import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { account } from '../../appwrite/config'; 

const Header = () => {
  const [ user, setUser ] = useState(null)

  useEffect(() => {
    account.get()
      .then((res) => setUser(res))
      .catch(() => setUser(null)); // Not logged in
  }, []);

  return (
    <header className="bg-red-700 text-yellow-200 fixed w-full top-0 left-0 flex flex-col md:flex-row justify-between items-center z-50 py-4 px-8">
      <img 
        id="logopic" 
        className="h-16 w-16 rounded-full" 
        alt="Buns and Burger Logo" 
        src='/images/logo.png'
      />
      <h1 className="text-2xl font-bold">Buns and Burgers</h1>
        <div className="relative transition duration-1000">
          <Link to="/cart">
            <i className="fa-solid fa-cart-shopping text-yellow-200 text-xl hover:scale-110 transition-transform"></i>
          </Link >
        </div>
      <nav id="navbar" className="flex gap-4">
        <Link className="text-yellow-200 rounded-lg px-4 py-2 text-base md:text-lg font-bold transition duration-200 hover:bg-yellow-200 hover:text-red-700 hover:font-extrabold" to="/">Home</Link>
        <Link className="text-yellow-200 rounded-lg px-4 py-2 text-base md:text-lg font-bold transition duration-200 hover:bg-yellow-200 hover:text-red-700 hover:font-extrabold" to="/menu">Menu</Link>
        <Link className="text-yellow-200 rounded-lg px-4 py-2 text-base md:text-lg font-bold transition duration-200 hover:bg-yellow-200 hover:text-red-700 hover:font-extrabold" to="/deals">Hot Deals</Link>
        <Link className="text-yellow-200 rounded-lg px-4 py-2 text-base md:text-lg font-bold transition duration-200 hover:bg-yellow-200 hover:text-red-700 hover:font-extrabold" to="/about">About Us</Link>
        <Link className="text-yellow-200 rounded-lg px-4 py-2 text-base md:text-lg font-bold transition duration-200 hover:bg-yellow-200 hover:text-red-700 hover:font-extrabold" to={user ? "/profile" : "/auth"}>
        {user ? "Profile" : "Sign Up"}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
