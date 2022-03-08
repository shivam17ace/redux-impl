import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {Action} from "../services/index";

function Content(){
    const amount = useSelector(state=>state.amount);
    const dispatch = useDispatch();
    return(
            <>
            <div className="btn">
            <Button variant="outline-primary" className="btn1" onClick={()=>{dispatch(Action.add(100))}}>Add</Button>
            <h3>Add or Remove</h3>
            <Button variant="outline-primary" className="btn2" onClick={()=>{dispatch(Action.remove(50))}}>Remove</Button>
            </div>
            <div>
                <Button className="btn-primary" disabled={true}>BALANCE:{amount}</Button>
            </div>
            </>     
    )
}
export default Content;