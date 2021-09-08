import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Redirect, BrowserRouter as Router, Switch} from "react-router-dom";
import Home from "./scenes/home";
import Professionisti from "./scenes/professionisti";
import Contatti from "./scenes/contatti";
import Servizi from "./scenes/servizi";
import Law from "./scenes/law";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {theme} from "./styles/theme";
import {ColoredLine} from "./components/ColoredLine";
import NotFound from "./components/NotFound";

export const routing = (
    <Router>
        <div>
            <Header />
            <ColoredLine color={theme.line1}/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/servizi" component={Servizi} />
                <Route path="/privacy" component={Law} />
                <Route path="/professionisti" component={Professionisti} />
                <Route path="/contatti" component={Contatti} />
                <Route path="/404" component={NotFound} />
                <Redirect to="/404" />
            </Switch>
            <ColoredLine color={theme.line1}/>
            <Footer />
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
