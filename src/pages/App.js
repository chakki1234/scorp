import * as React from 'react';
import Grid from '@mui/material/Grid';
import NavBar from '../components/navbar';
import QuiltedImageList from '../components/imageList'

export default function LandingPage() {
  return (
      <Grid container spacing={0}>
        <Grid item xs={2}>
          <NavBar/>
        </Grid>
        <Grid item xs={10}>
          <QuiltedImageList/>
        </Grid>
      </Grid>
  );
}
