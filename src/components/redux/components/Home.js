import React from "react";
import { Card, Button } from "react-bootstrap";

export default function Home(props) {
    console.log("home :", props);
    return (
        <div>
            <div className="row">
                <Card className="col-md-6 p-3 text-center">
                    <Card.Body>
                        <Card.Title>I Phone</Card.Title>
                        <Card.Text>I-Phone Price: 1000</Card.Text>
                        <Button
                            onClick={() =>
                                props.addToCartHandler({
                                    price: 1000,
                                    name: "i-Phone",
                                })
                            }
                            variant="primary"
                        >
                            Add To Cart
                        </Button>
                        <Button
                            className="mx-2"
                            onClick={() =>
                                props.removeFromCartHandler({
                                    price: 1000,
                                    name: "i-Phone",
                                })
                            }
                            variant="primary"
                        >
                            Remove From Cart
                        </Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}
