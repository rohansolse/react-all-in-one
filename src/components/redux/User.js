import React from "react";

export default function User(props) {
    const { data } = props;
    return (
        <div>
            <h1>This is user component</h1>
            <h2>Name: {data.name}</h2>
            <h2>Age: {data.age}</h2>
        </div>
    );
}
