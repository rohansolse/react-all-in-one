import React from "react";
import { Container } from "react-bootstrap";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect,
    useLocation,
} from "react-router-dom";

export default function NoMatchExample() {
    return (
        <Router>
            <div>
                <Container className="center">
                    <ul>
                        <li>
                            <Link className="li" to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="li" to="/old-match">
                                Old Match, to be redirected
                            </Link>
                        </li>
                        <li>
                            <Link className="li" to="/will-match">
                                Will Match
                            </Link>
                        </li>
                        <li>
                            <Link className="li" to="/will-not-match">
                                Will Not Match
                            </Link>
                        </li>
                        <li>
                            <Link className="li" to="/also/will/not/match">
                                Also Will Not Match
                            </Link>
                        </li>
                    </ul>

                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/old-match">
                            <Redirect to="/will-match" />
                        </Route>
                        <Route path="/will-match">
                            <WillMatch />
                        </Route>
                        <Route path="*">
                            <NoMatch />
                        </Route>
                    </Switch>
                </Container>
            </div>
        </Router>
    );
}

function Home() {
    return <h3>Home</h3>;
}

function WillMatch() {
    return <h3>Matched!</h3>;
}

function NoMatch() {
    let location = useLocation();

    return (
        <div>
            <h3>
                No match for <code>{location.pathname}</code>
            </h3>
        </div>
    );
}
