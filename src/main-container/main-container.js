import React, {Component} from "react";
import {  Route } from 'react-router-dom';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import { connect } from 'react-redux';

import Navbar from "../navbar/navbar";
import "./main-container.css"
import Buyitems from "../nav-items/buy-items/buyitems";
import Sellitems from "../nav-items/sell-items/sellitems";
import Discount from "../nav-items/discounts/discounts";

class MainContainer extends Component {

// constructor(props){
//     super(props);
//     this.props.onHanadleFormDat();
// }

    render(){
        this.props.onHanadleServerData();
        return (
            <Container fluid >
                <Row>
                    <Col md={2} className="sidebar">
                        <Navbar />
                    </Col>
                    <Col md={10} className="sidebar2">                 
                            <Route path="/" exact component={Buyitems} />
                            <Route path="/sell" exact component={Sellitems} />
                            <Route path="/dis" exact component={Discount} />
                    </Col>
                </Row>
    
            </Container>
    
        );
    }
   
}

const mapDispatchToProps = dispatch => {
    // console.log(Sellitems.currentState);
    return {
        onHanadleServerData: () => dispatch({type: 'GETDATAFROMSERVER'})
    };
};

export default connect(null,mapDispatchToProps)(MainContainer);