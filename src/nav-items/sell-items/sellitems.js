import React, { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { connect } from 'react-redux';

import "./sellitems.css";

const Sellitems = ({onHandleFormData}) => {

    const [currentState, setState] = useState({
        validation: false,
        name: "",
        des: "",
        price: 0,
        stock: "In stock"
    });

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }else{
            formDataHandle();
            event.preventDefault();
        }

            setState({ 
                ...currentState,validation: true,
            });
           
        

    };

    const getName = (event)=>{
        setState({...currentState, name: event.target.value })
        // console.log(currentState.name);
    }
    const getDes = (event)=>{
        setState({ ...currentState, des: event.target.value })
    }
    const getPrice = (event)=>{
        setState({ ...currentState, price: "Rs:"+event.target.value+".00" })
    }
    const getStock = (event)=>{
        setState({ ...currentState, stock: event.target.value })
    }

    const formDataHandle = ()=>{
    const data =  {
        name:currentState.name,
        des:currentState.des,
        price:currentState.price,
        stock:currentState.stock
    }
    onHandleFormData(data);
    // console.log(data);
    }

    return (
        <div className="Sellitems">
            <br />
            <h3>Input Details of the item for Sale</h3><hr />
            <Form noValidate validated={currentState.validation} onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>Name of the Item</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Item Name"
                        required
                        onChange={getName}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Text className="text-muted">
                        Use a uniqe name for your Item.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formDes">
                    <Form.Label>Brief Description about the Item</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows="3"
                        required
                        onChange={getDes}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group md="4" controlId="formPrice">
                    <Form.Label>Price of the Item</Form.Label>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroupPrepend">Rs:</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                            type="number"
                            placeholder="Enter price"
                            aria-describedby="inputGroupPrepend"
                            required
                            onChange={getPrice}
                        />
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroupPrepend">.00</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control.Feedback type="invalid">
                            Please insert a price.
            </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>

                <Form.Group controlId="formStock">
                    <Form.Label>Stock Availability</Form.Label>
                    <Form.Control 
                    as="select" 
                    size="sm" 
                    custom
                    onChange={getStock}
                    >
                        <option value="In stock">In Stock</option>
                        <option value="Out of stock">Out of stock</option>
                    </Form.Control>
                </Form.Group>
                <br />


                <Button
                    variant="warning"
                    type="submit"
                >
                    Add to Sale
                    </Button>
            </Form>
        </div>

    );


}

const mapDispatchToProps = dispatch => {
    // console.log(Sellitems.currentState);
    return {
        onHandleFormData: (data) => dispatch({type: 'HANDLEDATA' , data: data})
    };
};

export default connect(null, mapDispatchToProps)(Sellitems); 