import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Home from "./scenes/home";
import Professionisti from "./scenes/professionisti";
import Contatti from "./scenes/contatti";
import Attivita from "./scenes/attivita";
import Law from "./scenes/law";
import Header from "./components/Header";
import Footer from "./components/Footer";

const routing = (
    <Router>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/attivita" component={Attivita} />
                <Route path="/privacy" component={Law} />
                <Route path="/professionisti" component={Professionisti} />
                <Route path="/contatti" component={Contatti} />
            </Switch>
            <Footer />
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
