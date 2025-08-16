import React, { useEffect, useState } from "react";
import { account } from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../appwrite/auth-context";
import Header from "../../components/header/header.component";
import BurgerChatWidget from "../chatpage/chatWidget.component";

function ProfilePage () {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [name, setName] = useState('');

    const [address, setAddress] = useState(() => {
    const saved = localStorage.getItem('userAddress');
    return saved ? JSON.parse(saved) : '';
    });


    useEffect(() => {
        account.get().then(user => {
        setName(user.name || '');
        });
    }, []);

    useEffect(() => {
    localStorage.setItem('userAddress', JSON.stringify(address));
    }, [address]);

    const handleLogout = async () => {
        await account.deleteSession('current');
        navigate("/auth");
    };

    const handleSave = async () => {
    try {
      await account.updateName(name);
      alert('Name updated!');
    } catch (err) {
      alert('Error: ' + err.message);
    }
    };


    return (
        <>
        <Header />
        <BurgerChatWidget />
        <div className="flex flex-col items-center p-8 mt-56 md:mt-32">
        {/* Map placeholder */}
        <div className="w-full max-w-md h-48 bg-gray-200 flex items-center justify-center rounded-lg mb-6">
            <span className="text-gray-600">MAP</span>
        </div>

        {/* Profile Details */}
        <div className="w-full max-w-md space-y-4">
            <div>
            <label className="block text-sm font-semibold mb-1">Full Name:</label>
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg bg-gray-50"
            />
            </div>

            <div>
            <label className="block text-sm font-semibold mb-1">Email:</label>
            <input
                type="text"
                value={user?.email || ""}
                readOnly
                className="w-full px-4 py-2 border rounded-lg bg-gray-50"
            />
            </div>

            <div>
            <label className="block text-sm font-semibold mb-1">Address:</label>
            <input
                type="text"
                value={address}
                onChange={e => setAddress(e.target.value)}
                placeholder="Add your address"
                className="w-full px-4 py-2 border rounded-lg"
            />
            </div>
        </div>

        <button onClick={handleSave} className="bg-blue-600 text-white px-4 py-2 rounded mt-10">
        Save Name
        </button>

        {/* Logout */}
        <button
            onClick={handleLogout}
            className="mt-6 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700"
        >
            Log Out
        </button>
        </div>
        </>
    );
};

export default ProfilePage;
