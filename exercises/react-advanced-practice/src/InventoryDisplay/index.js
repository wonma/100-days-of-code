import React, { useState, useEffect } from 'react';

const DataFetcher = ({url, render}) => {
    const [data, setData] = useState([]);
    
    useEffect(()=>{
        if(url.includes('dessert')) {
            setData(['Cake', 'Cookies', 'Bread'])
        } else {
            setData(['Coke', 'Sprite'])
        }
    }, [])

    return render(data)
}

const DessertDisplay = () => {
    return (
        <div>
            <h2>Dessert</h2>
            <DataFetcher 
                url='https://littlelemon.com/dessert'
                render={(data) => <p>Quantity: {data.length}</p>}
            />
        </div>
    )
}

const DrinkDisplay = () => {
    return (
        <div>
            <h2>Drinks</h2>
            <DataFetcher 
                url='https://littlelemon.com/drink'
                render={(data) => <p>Quantity: {data.length}</p>}
            />
        </div>
    )
}

function InventoryDisplay() {

    return (
        <div>
            <h1>Inventory Display</h1>
            <DessertDisplay />
            <DrinkDisplay />
        </div>
    )
}

export default InventoryDisplay;