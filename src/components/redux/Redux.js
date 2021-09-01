import React from "react";
// import User from "./User";
import HomeContainer from "./containers/HomeContainer";
import HeaderContainer from "./containers/HeaderContainer";

export default function Redux() {
    return (
        <div className="container">
            <h1>Redux Home Component</h1>
            <div className="row">
                <div className="col-6"></div>
                <div className="col-6 float-right">
                    <HeaderContainer />
                </div>
            </div>
            {/* <h1>This is redux learning</h1> */}
            {/* <User data={{ name: "rohan", age: 30 }} /> */}
            <HomeContainer />
        </div>
    );
}
