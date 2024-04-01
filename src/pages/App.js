import * as React from 'react';
import Grid from '@mui/material/Grid';
import NavBar from '../components/navbar';
import QuiltedImageList from '../components/imageList'
import '../css/pages.css'

export default function LandingPage() {
  return (
      <Grid container spacing={0}>
        <Grid className='navbar' item xs={2}>
          <NavBar/>
        </Grid>
        <Grid className='content-area' item xs={10}>
          <QuiltedImageList/>
        </Grid>
      </Grid>
  );
}
