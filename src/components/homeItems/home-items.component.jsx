import React from "react"
import ItemCard from "../ItemCards/item-card.component"
import menuData from "../../assets/burgersdata/burgers_data"

class HomeItems extends React.Component {
    constructor() {
        super()

        this.state = {
               menuData 
            }
    }

    render() {
        return(
        <>
            <div className="inline-flex flex-wrap justify-items-center justify-between ml-10 md:ml-0">
                {this.state.menuData.Burgers.slice(0, 4).map(({id, ...otherMenuProps}) => (
                    <ItemCard key={id} {...otherMenuProps} />
                ))}
            </div>
            <div className="inline-flex flex-wrap justify-items-center justify-between ml-10 md:ml-0">
            {this.state.menuData.Pizza.slice(0, 4).map(({id, ...otherMenuProps}) => (
                <ItemCard key={id} {...otherMenuProps} />
            ))}
            </div>
        </>
        )
    }
}

export default HomeItems