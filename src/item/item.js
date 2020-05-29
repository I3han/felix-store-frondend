import React, { Component } from "react";

import "./item.scss";

class Item extends Component {
    state = {
        stockClass: "stock"
    }


    // stockSelector = (props) => {
    //     console.log(props.stock);
    //     if (props.stock === "Out of stock") 
    //         this.setState({ stockClass: "outStock" });
    //     else 
    //         this.setState({ stockClass: "stock" });
    // }

    // constructor(props) {
    //     super();
    //     // this.stockSelector(props);
    //     console.log(props.stock);
    //     if (props.stock === "Out of stock") 
    //     this.setState({ stockClass: "outStock" });
    // else 
    //     this.setState({ stockClass: "stock" });
    // }
    

    render() {
        return (
            <div className="Item">
                <br />
                <h3>{this.props.name}</h3>
                <hr />
                <br />
                <p className="des">{this.props.des}</p>
                <p className="price">{this.props.price}</p>
                <p className={this.props.stock === "Out of stock" ? "outStock" : "stock"}>{this.props.stock}</p>
                <button className="btn btn-warning"><b>Order Now!</b></button>
            </div>
        );
    }

}

export default Item;                        