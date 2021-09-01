import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Bootstrap from "./components/Bootstrap";
import AuthExample from "./components/Auth";
import "./App.css";
import NoMatchExample from "./components/NotMatch";
import Curd from "./components/Curd";
import Redux from "./components/redux/Redux";

function App() {
    return (
        <Router>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/bootstrap">Bootstrap</Nav.Link>
                        <Nav.Link href="/auth">Auth</Nav.Link>
                        <Nav.Link href="/notmatch">Not-Match</Nav.Link>
                        <Nav.Link href="/curd">CURD</Nav.Link>
                        <Nav.Link href="/redux">Redux</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            {/* <Container>
                <h1 className="center my-5">Use Navigation for more details</h1>
            </Container> */}
            <Switch>
                <Route exact path="/bootstrap">
                    <Bootstrap />
                </Route>
                <Route exact path="/auth">
                    <AuthExample />
                </Route>
                <Route exact path="/notmatch">
                    <NoMatchExample />
                </Route>
                <Route exact path="/curd">
                    <Curd />
                </Route>
                <Route exact path="/redux">
                    <Redux />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
