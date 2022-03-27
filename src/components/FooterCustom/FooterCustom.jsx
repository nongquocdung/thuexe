import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './style.css';

const FooterCustom = () => {
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className='footer-custom'>
      <div className='logo'>LOGO</div>
      <div className='contact'>
        <div className='item'>
          <p className='title'>Email</p>
          <span>congtytnhh@motminhtao.com</span>
        </div>
        <div className='item'>
          <p className='title'>Phone</p>
          <span>0123456789</span>
        </div>
        <div className='item'>
          <p className='title'>Address</p>
          <span>Khu tao song, so 12, Quan 12, HCM City</span>
        </div>
      </div>
      <div className='support'>
        <p>CONTACT US</p>
        <TextField id='outlined-basic' label='Email' variant='outlined' />
        <TextField
          id="standard-multiline-static"
          label="Message"
          multiline
          rows={4}
          variant="outlined"
        />
        <Button style={{width: '200px'}} variant="outlined">Send</Button>
      </div>
    </div>
  );
};

export default FooterCustom;
