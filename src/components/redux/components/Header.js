import React from "react";
import { Card } from "react-bootstrap";

export default function Header(props) {
    return <div>Total Cart Items : {props.data.length}</div>;
}
