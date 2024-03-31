import * as React from 'react';
import Grid from '@mui/material/Grid';
import logo from '../assets/images/sampleLogo.png'
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import InstagramIcon from '@mui/icons-material/Instagram';
import './components.css'

export default function NavBar() {
  return (
      <Grid container direction={'column'} alignItems="center">
        <img item src={logo} style={{ width: '75%', paddingTop: '18px' }} />  
        
        <Divider item orientation="horizontal" variant="middle" 
          sx={{
            marginTop: '20px',
            marginBottom: '20px'
          }}
          flexItem />

        <Typography item variant="address" sx={{width: '50%'}} align='center'>
          Avinashi Rd<br />
          Coimbatore, TN 641004
        </Typography>

        <Divider item orientation="horizontal" variant="middle" 
          sx={{
            marginTop: '20px',
            marginBottom: '20px'
          }}
          flexItem />
          
        <List>
          <ListItem sx={{justifyContent: 'center'}} className='navbar-options'>
            <Typography item variant="navBarOptions">
              Reserve
            </Typography>
          </ListItem>
          <ListItem sx={{justifyContent: 'center'}} className='navbar-options'>
            <Typography item variant="navBarOptions">
              Menus
            </Typography>
          </ListItem>
          <ListItem sx={{justifyContent: 'center'}} className='navbar-options'>
            <Typography item variant="navBarOptions">
              Gift Cards
            </Typography>
          </ListItem>
          <ListItem sx={{justifyContent: 'center'}} className='navbar-options'>
            <Typography item variant="navBarOptions">
              Our Story
            </Typography>
          </ListItem>
          <ListItem sx={{justifyContent: 'center'}} className='navbar-options'>
            <Typography item variant="navBarOptions">
              Hours & Location
            </Typography>
          </ListItem>
          <ListItem sx={{justifyContent: 'center'}} className='navbar-options'>
            <Typography item variant="navBarOptions">
              Contact
            </Typography>
          </ListItem>
          <ListItem sx={{justifyContent: 'center'}} className='navbar-options'>
            <Typography item variant="navBarOptions">
              Join Our Team
            </Typography>
          </ListItem>
        </List>

        <InstagramIcon item className='navBar-insta-icon'/>
      </Grid>
  );
}
