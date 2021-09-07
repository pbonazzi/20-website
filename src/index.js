import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch} from "react-router-dom";
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

const routing = (
    <Router>
        <div>
            <Header />
            <ColoredLine color={theme.line1}/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/servizi" component={Servizi} />
                <Route exact path="/privacy" component={Law} />
                <Route exact path="/professionisti" component={Professionisti} />
                <Route exact path="/contatti" component={Contatti} />
                <Route exact path="*" component={NotFound} />
            </Switch>
            <ColoredLine color={theme.line1}/>
            <Footer />
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
