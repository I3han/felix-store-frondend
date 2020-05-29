import React from "react";
import { Container,Col,Row } from "react-bootstrap";

import "./discountItem.scss";

const DiscountItem = (props) =>{
    return (
        <div className="DiscountItem">
        
            <Container fluid>
                <Row>
                    <Col style={{ borderRight:"5px white solid" }}>
                    <br/><br/>
                       <h1>{ props.name }</h1> 
                    </Col>

                    <Col>
                    <br/>
                        <p className="disPrclass">{props.disprice}</p>
                        <p className="nowPrclass">{props.nowprice}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default DiscountItem;