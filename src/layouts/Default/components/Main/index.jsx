import * as React from 'react';
import { MainStyled } from "../../Default-styles"
export default function Main({ children }) {

    return (
        <MainStyled>
            {children}
        </MainStyled>
    )
}