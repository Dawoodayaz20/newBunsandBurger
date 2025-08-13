import React from "react";

const ItemButton = ({buttonname, onClick}) => {
    return (
        <button className="text-yellow-200 rounded-lg px-4 py-2 md:text-lg font-bold transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105 bg-red-700 space-x-2" 
            onClick={onClick} 
        >
            {buttonname}
        </button>
    )
}

export default ItemButton;