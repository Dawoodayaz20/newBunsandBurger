import React, { useEffect, useState } from "react";
import { account } from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../appwrite/auth-context";
import Header from "../../components/header/header.component";
import BurgerChatWidget from "../chatpage/chatWidget.component";

const ProfilePage = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    // useEffect(() => {
    //     account.get().then(setUser);
    // }, []);

    const handleLogout = async () => {
        await account.deleteSession('current');
        navigate("/auth");
    };

    return (
        <>
            <Header />
            <BurgerChatWidget />
            <section className="my-56 md:my-40 flex-col flex md:flex-row items-center">
            <img src='/images/Buns&Burgers.webp' className="ml-4 w-80 mt-10 md:mt-0 h-48 md:w-screen md:h-56 rounded-md" alt="Profile Banner" />
            <div className="text-base justify-center items-center text-center text-[#a71515] ml-8 mr-8 mt-10 md:mt-0">
                <h2 className="text-2xl font-bold mb-4">Welcome To Buns & Burger</h2>
                <p><strong>Email:</strong> {user?.email}</p>
                <p className="mt-4">Thanks for being a part of the Buns and Burgers family. We're thrilled to serve you the best!</p>
                <button
                    onClick={handleLogout}
                    className="mt-6 px-6 py-2 bg-yellow-200 text-red-700 font-bold rounded-lg hover:bg-red-700 hover:text-yellow-200 transition duration-300"
                >
                    Logout
                </button>
            </div>
        </section>
        </>
    );
};

export default ProfilePage;
