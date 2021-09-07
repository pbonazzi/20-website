import React from "react";
import HomeC from "../components/HomeC";
import {ThemeProvider} from "styled-components";
import {theme} from "../styles/theme";
import {GlobalStyles} from "../styles/global";
import {Helmet} from "react-helmet";

function Home() {

    return (
        <ThemeProvider theme={theme}>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <GlobalStyles />
            <HomeC> </HomeC>
        </ThemeProvider>
    );
}

export default Home;
