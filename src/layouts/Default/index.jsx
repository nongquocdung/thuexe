import CssBaseline from "@mui/material/CssBaseline";
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import DrawerPage from "./components/DrawerPage";
import HeadPage from "./components/HeadPage"
import { useStyles } from './Default-styles';
import MainPage from "./components/MainPage";
import { layoutActions } from "../../store/actions"

export default function DefaultLayout({ children, routes }) {
    const classes = useStyles();
    const dispatch = useDispatch()
    const [open, setOpen] = useState(JSON.parse(localStorage.getItem("menu", "false")));
    const auth = useSelector((state) => state.authentication);
    const handleMenu = () => {
        const status = !open;
        localStorage.setItem('menu', JSON.stringify(status));
        setOpen(status);
    }
    useEffect(() => {
        dispatch(layoutActions.setOpenDrawer(open))
    }, [open])

    return (
        <div className={classes.root}>
            <CssBaseline />
            <HeadPage classes={classes} open={open} setOpen={handleMenu} />
            <DrawerPage classes={classes} open={open} setOpen={setOpen} auth={auth} routes={routes} />
            <MainPage classes={classes} children={children} />
        </div>
    )
}
