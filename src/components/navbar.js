import * as React from 'react';
import Grid from '@mui/material/Grid';
import logo from '../assets/images/sampleLogo.png'
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../css/components.css'

export default function NavBar() {
  let navBarOptions = ['Reserve', 'Menus', 'Gift Cards', 'Our Story', 'Hours & Location', 'Contact', 'Join Our Team'];

  return (
      <Grid container direction={'column'} alignItems="center">
        <img item src={logo} className='navBar-logo' />  
        
        <Divider item orientation="horizontal" variant="middle" 
          className='navBar-divider'
          flexItem />

        <Typography item variant="address" sx={{width: '50%'}} align='center'>
          Avinashi Rd<br />
          Coimbatore, TN 641004
        </Typography>

        <Divider item orientation="horizontal" variant="middle" 
          className='navBar-divider'
          flexItem />
          
        <List item>
          {navBarOptions.map((option, index) => (
            <ListItem key={index} className='navbar-options'>
              <Typography className='navbar-option-link' align='center' variant="navBarOptions">
                {option}
              </Typography>
            </ListItem>
          ))}
        </List>

        <InstagramIcon item className='navBar-insta-icon'/>
      </Grid>
  );
}
