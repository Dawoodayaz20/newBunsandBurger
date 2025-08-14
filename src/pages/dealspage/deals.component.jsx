import React from "react";
import ItemCard from "../../components/ItemCards/item-card.component"; 
import dealsdata from "../../assets/burgersdata/dealsdata"
import Header from "../../components/header/header.component";
import BurgerChatWidget from "../chatpage/chatWidget.component";

class DealsPage extends React.Component {
    constructor(){
        super()

        this.state = {
            dealsdata
        }
    }

    render() {
        return(
            <>
            <Header />
            <BurgerChatWidget />
            <div className='mt-60 md:mt-40'>
                <h1 className="text-red-700 font-bold text-4xl text-center">Burgers</h1>
                <div className="inline-flex flex-wrap justify-items-center justify-between ml-10 md:ml-0">
                    {this.state.dealsdata.Burgers.slice(0, 4).map(({id, ...otherMenuProps}) => (
                        <ItemCard key={id} {...otherMenuProps} />
                    ))}
                </div>
                
                <h1 className="text-red-700 font-bold text-4xl text-center">Pizzas</h1>
                <div className="inline-flex flex-wrap justify-items-center justify-between ml-10 md:ml-0">
                    {this.state.dealsdata.Pizzas.slice(0, 4).map(({id, ...otherMenuProps}) => (
                        <ItemCard key={id} {...otherMenuProps} />
                    ))}
                </div>
            </div >
        </>
    )
}
}

export default DealsPage