import './App.css';
import Header from "./Header"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./Login";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/checkout">
                        <Header/>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
