import { Typography, Menu, MenuItem } from '@mui/material';
import _ from 'lodash';
import React, { useMemo } from 'react';
import { useStyles } from './AppMenu-styles';

export default function AppMenu({ anchorEl, setAnchorEl, items = [], onAction = () => { } }) {
    const classes = useStyles();

    const handleClose = () => {
        setAnchorEl(pre => {
            return {
                ...pre,
                open: false
            }
        });
    };

    const excMenuItems = useMemo(() => {
        const filter = anchorEl?.data?.excMenuItems ?? []

        return filter

    }, [anchorEl])

    return (
        <Menu
            id="action-menu"
            className={classes.rootAppMenu}
            anchorEl={_.get(anchorEl, ['elementRef'])}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={Boolean(_.get(anchorEl, ['open']))}
            onClose={handleClose}
        >
            {items.filter(itm => !excMenuItems.includes(itm.id)).map((itm, idx) => {
                const Icon = itm.icon;
                const style = {}
                if (itm.fill) {
                    style.color = itm.fill
                }

                return (
                    <MenuItem key={idx} disabled={Boolean(itm?.disabled)} onClick={() => onAction({
                        action: itm.id,
                        row: _.get(anchorEl, ['data']),
                        rowIndex: _.get(anchorEl, ['rowIndex'])
                    })}>
                        <div style={{ display: "flex" }}>

                            {Icon && (

                                <div style={{ padding: '4px 4px', display: "flex", justifyContent: "center" }}>
                                    <Icon fontSize="small" color={itm.color || "primary"} style={style} />
                                </div>
                            )}
                            <Typography style={{ margin: "auto" }}>{itm.label}</Typography>
                        </div>
                    </MenuItem>
                );
            })}
        </Menu>
    );
}