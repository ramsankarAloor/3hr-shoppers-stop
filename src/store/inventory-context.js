import React, { useState } from "react";

const InventoryContext = React.createContext({
    inventory: [],
    addToInv: (obj)=>{} 
})

export const InventoryProvider=props=>{
    const [inv, setInv] = useState([])
    const invContext = {
        inventory : inv,
        addToInv
    }

    function addToInv(obj){
        setInv((prevInv)=> [...prevInv, obj])
    }

    return (
        <InventoryContext.Provider value={invContext}>{props.children}</InventoryContext.Provider>
    )
}

export default InventoryContext;
