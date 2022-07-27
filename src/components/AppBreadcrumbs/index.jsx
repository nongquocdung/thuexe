import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import _ from 'lodash';
import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { MapPathRoute2Name } from '../../routes/protected-routes';
import { RouteIds, RoutePaths, DCERouteIds } from "../../routes/protected-routes"
import { SCREEN_NAME } from '../../common/utils/const'
import { useStyles } from './AppBreadcrumbs-styles';


export function AppBreadcrumbs() {
    const classes = useStyles();
    const { pathname, state } = useLocation();
    const navigate = useNavigate();

    const { subBreadcrumb, preSubTitClickable, openDrawer, params, title } = useSelector(state => state.layout);

    const dispath = useDispatch();
    let urls = useMemo(() => {
        const route = pathname.split("/").filter((str) => !_.isEmpty(str));
        const ret = ['Home', ...route];
        return ret;
    }, [pathname]);

    const handleLink_click = (index) => {
        let ret = [];
        for (let i = 0; i <= index; i++) {
            ret.push(urls[i]);
        }
        let path;
        if (ret.length === 1 && ret[0] === 'Home') {
            path = '/';
        } else if (ret.length > 1) {
            path = "/" + ret.filter((r) => r !== 'Home').join(" / ");

        } else {
            path = '/';
        }

        // history.push(path); 
        navigate(path)
    };

    /*
    *render
    */
    function renderLinks() {
        let ret = [];

        for (let i = 0; i < urls.length; i++) {
            let url = urls[i];
            let urlName = MapPathRoute2Name[url];
            if (_.isEmpty(urlName)) {
                if (url.includes("_")) {
                    const arr = url.split("_")
                    urlName = arr.join("")
                } else {
                    let _checkUrlIdx = url
                    if ((_checkUrlIdx.match(/-/g) || []).length > 3) {
                        _checkUrlIdx = _checkUrlIdx.substring(_checkUrlIdx.length - 5)
                    }
                    urlName = _checkUrlIdx;
                }
            }
            if (urlName.includes("@")) {
                urlName = urlName.split("@")[0]
            }
            // ret.push(url);

            if (i !== urls.length - 1) {
                ret.push(
                    <Link key={i} className="link" color="inherit" onClick={() => handleLink_click(i)} >
                        <Typography color="primary" style={{ color: '#333' }} variant="caption" >
                            {urlName}
                        </Typography>
                    </Link >
                );
            } else {
                if (subBreadcrumb) {
                    if (preSubTitClickable) {
                        ret.push(
                            <Link key={`${i}_link`} className="link" color="inherit" onClick={() => handleLink_click(i)}>
                                <Typography color="inherit" variant="caption">
                                    {urlName}
                                </Typography >
                            </Link >
                        );
                    } else {
                        ret.push(
                            // <Link key-(1) className-"link" color="inherit" onClick-(() > handleLink click(1)}> 
                            <Typography key={`${i}_link`} color="inherit" variant="caption">
                                {urlName}
                            </Typography >
                            // </Link>
                        );
                    }
                    ret.push(
                        <Typography key={i} color="inherit" variant="caption" >
                            {`${subBreadcrumb}`}
                        </Typography>
                    );
                } else {
                    ret.push(
                        <Typography key={i} color="inherit" variant="caption" >
                            {urlName}
                        </Typography >
                    );
                }
            }
        }
        return ret;
    }

    let lastUrl = MapPathRoute2Name[_.last(urls)];
    if (_.isEmpty(lastUrl)) {
        lastUrl = _.last(urls)
        if (lastUrl.includes("@")) {
            lastUrl = lastUrl.split("@")[0]
        }
    }
    return (
        <div className={classes.rootAppBreadcrumbs} >
            <Breadcrumbs aria-label="breadcrumb" className="break-top" style={{ marginBottom: 8, maxWidth: `calc(100vw - 40px - ${openDrawer ? "220px" : "0px"})` }}>
                {renderLinks()}
            </Breadcrumbs >
            <Typography variant="h5" style={{ fontWeight: 700, whitespace: "nowrap", textOverflow: "ellipsis", overflow: "hidden" }}>
                {/* {_.isEmpty(title) ? lastUrl : title} */}
                {title}
            </Typography>
        </div>
    );
}
