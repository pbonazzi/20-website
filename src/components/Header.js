import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from '../hooks';
import { GlobalStyles } from '../styles/global';
import { theme } from '../styles/theme';
import { Burger, Menu, Logo, Barra } from './index';
import "../scenes/normalize.css";

function Header() {
    const [open, setOpen] = useState(false);
    const node = useRef();
    const menuId = "main-menu";

    useOnClickOutside(node, () => setOpen(false));

    return (
        <ThemeProvider theme={theme}>
                <GlobalStyles />
                <div class="header">
                    <Logo/>
                    <div ref={node}>
                        <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                        <Menu open={open} setOpen={setOpen} id={menuId} />
                    </div>
                    <Barra/>
                </div>

        </ThemeProvider>
    );
}

export default Header;
