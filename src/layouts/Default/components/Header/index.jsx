import * as React from 'react';
import { AppBar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardTabIcon from "@mui/icons-material/keyboardTab";

import { HeaderStyled } from "../../Default-styles"

export default function Header() {
    return (
        <HeaderStyled position="static">
            <IconButton
                color="inherit"
                aria-label="menu"
            >
                <MenuIcon />
            </IconButton>
            <Typography className="title">THUE XE</Typography>

            <IconButton

                color="inherit"
                aria-label="menu"
            >
                <KeyboardTabIcon />
            </IconButton>

        </HeaderStyled>
    )
}