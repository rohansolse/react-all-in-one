import React from "react";
import Home from "../components/pages/Home";
import About from "../components/pages/About";
import Contact from "../components/pages/Contact";
import Navbar from "../components/layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "../components/pages/NotFound";
import AddUser from "../components/users/AddUser";
import EditUser from "../components/users/EditUser";
import User from "../components/users/User";

function Curd(props) {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route exact path="/curd" component={Home} />
                    <Route exact path="/curd/about" component={About} />
                    <Route exact path="/curd/contact" component={Contact} />
                    <Route exact path="/curd/users/add" component={AddUser} />
                    <Route
                        exact
                        path="/curd/users/edit/:id"
                        component={EditUser}
                    />
                    <Route exact path="/curd/users/:id" component={User} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
    );
}

export default Curd;
