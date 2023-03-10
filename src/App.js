import React from 'react';
import Navbar from './Components/navbar/Navbar'
import { Outlet } from "react-router-dom";
import Grid from '@mui/material/Grid';

function App() {

  return (
    <Grid container>
      <Navbar />
      <Outlet />
    </Grid>
  );
}

export default App;
