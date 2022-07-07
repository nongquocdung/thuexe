import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { AppListStyled } from './AppList-styles'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { MANAGER_TYPES } from '../../common/utils/const';
import { AppButton } from '../AppButton';
import HistoryIcon from '@mui/icons-material/History';
import ViewListIcon from '@mui/icons-material/ViewList';
const AppList = ({ data = [], type = MANAGER_TYPES.CAR, hasBtn = false, btnData = {} }) => {
    /**
     * acts
     */

    /**
     * render
     */
    const renderItemContent = (data) => {
        const primary = <Typography>{data.primary}</Typography>
        const secondary = <div>
            {
                data.secondary && data.secondary.map(i => (
                    <Typography key={i}>
                        {i}
                    </Typography>
                )
                )
            }
        </div>
        return <ListItemText primary={primary} secondary={secondary} />
    }
    const renderBtn = (btnData) => {
        if (btnData) {
            const temp = btnData
            const _btn = (
                <div className='btn'>
                    <AppButton
                        color='primary'
                        label={temp.label}
                        variant="outlined"
                        onClick={temp.onClick} />
                </div>
            )
            return _btn
        }
    }
    const renderItems = () => {
        return data.map(i => {
            const ret = []
            var avatar
            if (i.avatarUrl) {
                avatar = (
                    <ListItemAvatar>
                        <Avatar
                            alt="Remy Sharp"
                            variant="square"
                            src={i.avatarUrl}
                        />
                    </ListItemAvatar>
                )
            }
            else {
                if (type === MANAGER_TYPES.CAR) {
                    avatar = (
                        <ListItemAvatar>
                            <Avatar variant="square">
                                <DirectionsCarIcon />
                            </Avatar>
                        </ListItemAvatar>
                    )
                }
                else if (type === MANAGER_TYPES.DRIVER) {
                    avatar = (
                        <ListItemAvatar>
                            <Avatar variant="square">
                                <AccountCircleIcon />
                            </Avatar>
                        </ListItemAvatar>
                    )
                }
                else if (type === MANAGER_TYPES.HISTORY) {
                    avatar = (
                        <ListItemAvatar>
                            <Avatar variant="square">
                                <HistoryIcon />
                            </Avatar>
                        </ListItemAvatar>
                    )
                } 
                else if (type === MANAGER_TYPES.REQUIREMENT) {
                    avatar = (
                        <ListItemAvatar>
                            <Avatar variant="square">
                                <ViewListIcon />
                            </Avatar>
                        </ListItemAvatar>
                    )
                }

            }

            const item = <div className='item'>
                <ListItem alignItems="flex-start" >
                    {avatar}
                    {renderItemContent(i)}
                </ListItem>
                {hasBtn && renderBtn(i.btnData)}
                <Divider variant="inset" component="li" />
            </div>
            ret.push(item)




            return ret
        })
    }
    return (
        <AppListStyled>
            <List
                sx={{
                    width: '100%'
                }}
            >
                {renderItems()}
            </List>
            {/* <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar variant="square">
                            <DirectionsCarIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary="Brunch this weekend?"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    Ali Connors
                                </Typography>
                                {" — I'll be in your neighborhood doing errands this…"}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar variant="square">
                            <DirectionsCarIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary="Summer BBQ"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    to Scott, Alex, Jennifer
                                </Typography>
                                {" — Wish I could come, but I'm out of town this…"}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar variant="square">
                            <DirectionsCarIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary="Oui Oui"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    Sandra Adams
                                </Typography>
                                {' — Do you have Paris recommendations? Have you ever…'}
                            </React.Fragment>
                        }
                    />
                </ListItem>
            </List> */}
        </AppListStyled>
    )
}

export default AppList