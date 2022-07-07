import { Typography } from "@mui/material";
import * as React from "react";

import { FooterStyled } from "../../Default-styles"

export default function Footer() {

    return (
        <FooterStyled>
            <Typography className="logo" >THUE XE</Typography>

            <Typography className='copy-right' variant="caption">Copyright 2022-Build No 0.0.1</Typography>

        </FooterStyled>
    )
}