import React, { Component } from "react";
import { connect } from 'react-redux';
import axios from 'axios';


import Item from "../../item/item";
import loading from "../../img/loading-png-gif.gif";
import "./buyitems.css";

class Buyitems extends Component {
    state = {
        firsttime: true,
        itemsArray2: []
    }
    // itemsArray2 =[];

    // constructor(props){
    //     super(props);
    //     // props.onHanadleServerData();
    //     // console.log(this.props.itemsArray);
    //     // axios.get('http://localhost:4000/api/items').then( response => {
    //     //     this.itemsArray2 = response.data.items;

    //     // });
    //     // console.log(this.itemsArray2);
    // }



    componentDidMount() {
        axios.get('https://felix-store.herokuapp.com/api/items').then((response) => {
            this.setState({
                itemsArray2: [...response.data.items],
                firsttime: false
            });
        });
    }

    render() {

        const getItems = this.state.itemsArray2.map((item) => {
            return (
                <Item name={item.name} des={item.des} price={item.price} stock={item.stock} key={item._id} />
            );
        });

        const loadingImg = (
            <div className="loadingGif">
            <br/><br/><br/><br/><br/><br/><br/>
            <img src={loading}  width="150"/>
            </div>
            
        );

        return (
            <React.Fragment>
                <br />
                <div className="container" style={{ width: "90%" }}>
                    {this.state.firsttime ? loadingImg : getItems}
                </div>

            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        itemsArray: [...state.itemsArray]
    };
};

const mapDispatchToProps = dispatch => {
    // console.log(Sellitems.currentState);
    return {
        onHanadleServerData: () => dispatch({ type: 'GETDATAFROMSERVER' })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Buyitems);