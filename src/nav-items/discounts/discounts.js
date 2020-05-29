import React, { Component } from "react";

import DiscountItem from "../../discountItem/discountItem";

class Discount extends Component{
    items=[
        {
            id:1,
            name:"Lether Shoes",
            disprice:"Rs: 6200.00",
            nowprice:"Rs: 5200.00"
        },
        {
            id:2,
            name:"Watch (Rolex)",
            disprice:"Rs: 20500.00",
            nowprice:"Rs: 20000.00"
        },
        {
            id:3,
            name:"Shirt (Men)",
            disprice:"Rs: 1200.00",
            nowprice:"Rs: 900.00"
        },
        {
            id:4,
            name:"Blouse",
            disprice:"Rs: 1500.00",
            nowprice:"Rs: 1000.00"
        },
        {
            id:5,
            name:"Shoes", 
            disprice:"Rs: 2000.00",
            nowprice:"Rs: 1850.00"
        },
        {
            id:6,
            name:"Samsung A51",
            disprice:"Rs: 53000.00",
            nowprice:"Rs: 52000.00"
        },
        {
            id:7,
            name:"Trousers ",
            disprice:"Rs: 2000.00",
            nowprice:"Rs: 1500.00"
        },
        {
            id:8,
            name:"Skirt",
            disprice:"Rs: 800.00",
            nowprice:"Rs: 750.00"
        },
    ]

    getItems = this.items.map( item => {
        return(
            <DiscountItem name={item.name} key={item.id} disprice={item.disprice} nowprice={item.nowprice}/>
        );
       
    } )


    render(){
        return(
        <div className="container">
             {this.getItems}
        </div>
        );
    }

}

export default Discount;