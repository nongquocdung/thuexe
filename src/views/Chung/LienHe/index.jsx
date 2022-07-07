import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Paper } from '@mui/material'
import { Typography } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { layoutActions } from '../../../store/actions/layout-act'
import { LienHeStyled } from './LienHe-styles'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';

const LienHe = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(layoutActions.setTitle("Liên hệ hỗ trợ"))
    return () => {
      dispatch(layoutActions.setTitle(""))
    }
  }, [])
  return (
    <LienHeStyled>
      <div className="total-info">
        <Paper
          elevation={1}
          className='form-header'
          position='static'
        >
          <div style={{ display: 'flex' }}>
            <Typography className='form-title'>Chi nhánh A</Typography>
          </div>
        </Paper>
        <div className="content">
          <List sx={{ width: '100%' }}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <LocationOnIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Đông Hưng Thuận, Quận 12, Thành phố Hồ Chí Minh" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <PhoneIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="23 123 456" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <PhoneAndroidIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="0123 456 789" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <EmailIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Abc@gmail.com" />
            </ListItem>
          </List>
        </div>
      </div>

      {/*  */}
      <div className="total-info">
        <Paper
          elevation={1}
          className='form-header'
          position='static'
        >
          <div style={{ display: 'flex' }}>
            <Typography className='form-title'>Chi nhánh A</Typography>
          </div>
        </Paper>
        <div className="content">
          <List sx={{ width: '100%' }}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <LocationOnIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Đông Hưng Thuận, Quận 12, Thành phố Hồ Chí Minh" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <PhoneIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="23 123 456" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <PhoneAndroidIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="0123 456 789" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <EmailIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Abc@gmail.com" />
            </ListItem>
          </List>
        </div>
      </div>
      {/*  */}
      <div className="total-info">
        <Paper
          elevation={1}
          className='form-header'
          position='static'
        >
          <div style={{ display: 'flex' }}>
            <Typography className='form-title'>Chi nhánh A</Typography>
          </div>
        </Paper>
        <div className="content">
          <List sx={{ width: '100%' }}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <LocationOnIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Đông Hưng Thuận, Quận 12, Thành phố Hồ Chí Minh" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <PhoneIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="23 123 456" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <PhoneAndroidIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="0123 456 789" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <EmailIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Abc@gmail.com" />
            </ListItem>
          </List>
        </div>
      </div>
      {/*  */}
      <div className="total-info">
        <Paper
          elevation={1}
          className='form-header'
          position='static'
        >
          <div style={{ display: 'flex' }}>
            <Typography className='form-title'>Chi nhánh A</Typography>
          </div>
        </Paper>
        <div className="content">
          <List sx={{ width: '100%' }}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <LocationOnIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Đông Hưng Thuận, Quận 12, Thành phố Hồ Chí Minh" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <PhoneIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="23 123 456" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <PhoneAndroidIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="0123 456 789" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <EmailIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Abc@gmail.com" />
            </ListItem>
          </List>
        </div>
      </div>
      {/*  */}
      <div className="total-info">
        <Paper
          elevation={1}
          className='form-header'
          position='static'
        >
          <div style={{ display: 'flex' }}>
            <Typography className='form-title'>Chi nhánh A</Typography>
          </div>
        </Paper>
        <div className="content">
          <List sx={{ width: '100%' }}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <LocationOnIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Đông Hưng Thuận, Quận 12, Thành phố Hồ Chí Minh" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <PhoneIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="23 123 456" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <PhoneAndroidIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="0123 456 789" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <EmailIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Abc@gmail.com" />
            </ListItem>
          </List>
        </div>
      </div>
    </LienHeStyled>
  )
}

export default LienHe