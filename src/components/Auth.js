import React, { useContext, createContext, useState } from "react";
import { Container, Button } from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation,
} from "react-router-dom";

export default function AuthExample() {
    return (
        <ProvideAuth>
            <Router>
                <Container className="center">
                    <div>
                        <AuthButton />
                        <ul>
                            <li>
                                <Link className="li" to="/public">
                                    Public Page
                                </Link>
                            </li>
                            <li>
                                <Link className="li" to="/protected">
                                    Protected Page
                                </Link>
                            </li>
                        </ul>
                        <Switch>
                            <Route path="/public">
                                <PublicPage />
                            </Route>
                            <Route path="/login">
                                <LoginPage />
                            </Route>
                            <PrivateRoute path="/protected">
                                <ProtectedPage />
                            </PrivateRoute>
                        </Switch>
                    </div>
                </Container>
            </Router>
        </ProvideAuth>
    );
}

const fakeAuth = {
    isAuthenticated: false,
    signin(cb) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 100);
    },
};

/** For more details on
 * `authContext`, `ProvideAuth`, `useAuth` and `useProvideAuth`
 * refer to: https://usehooks.com/useAuth/
 */
const authContext = createContext();

function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

function useAuth() {
    return useContext(authContext);
}

function useProvideAuth() {
    const [user, setUser] = useState(null);

    const signin = (cb) => {
        return fakeAuth.signin(() => {
            setUser("user");
            cb();
        });
    };

    const signout = (cb) => {
        return fakeAuth.signout(() => {
            setUser(null);
            cb();
        });
    };

    return {
        user,
        signin,
        signout,
    };
}

function AuthButton() {
    let history = useHistory();
    let auth = useAuth();
    console.log("history ", history);
    return auth.user ? (
        <p>
            Welcome!{" "}
            <Button
                onClick={() => {
                    auth.signout(() => history.push("/"));
                }}
            >
                Sign out
            </Button>
        </p>
    ) : (
        <p>You are not logged in.</p>
    );
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
    let auth = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.user ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
}

function PublicPage() {
    return <h3>Public</h3>;
}

function ProtectedPage() {
    return <h3>Protected</h3>;
}

function LoginPage() {
    let history = useHistory();
    let location = useLocation();
    let auth = useAuth();

    let { from } = location.state || { from: { pathname: "/" } };
    console.log("from ", from);
    let login = () => {
        auth.signin(() => {
            history.replace(from);
        });
    };

    return (
        <div>
            <p>You must log in to view the page at {from.pathname}</p>
            <Button onClick={login}>Log in</Button>
        </div>
    );
}
