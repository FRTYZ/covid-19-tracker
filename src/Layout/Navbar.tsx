import React, { useState, MouseEvent, useEffect } from 'react';

// Material UI elements
import { 
    Grid, 
    Box, 
    AppBar, 
    Toolbar, 
    Container, 
    TextField,
    MenuItem,
    Typography,
    useTheme,
  } from "@mui/material"

// Router
import { Link } from 'react-router-dom';

// Material UI styles
import { navbarStyles } from '../styles';

// Assets
import LogoImage from '../assets/logo.png'

const Navbar = () => {

    // Material UI and react router
    const theme = useTheme();

    // Functions

    // logo section
    const LogoComponent = () => (
        <Link to="/" style={{ textDecoration: 'none' }}>
            <Box sx={navbarStyles.logoBox}>
                <img src={LogoImage} width={'48'} height={'48'} />
                <Typography 
                    sx={{
                    marginTop: 1.6,
                    marginLeft: 1,
                    color: theme.palette.warning.main,
                    fontWeight: 600
                }}>Tracker</Typography>
            </Box>
        </Link>
    )
    

    return (
        <AppBar position="sticky" sx={navbarStyles.appBar}>
            <Container maxWidth='lg' sx={navbarStyles.container}>
                {/* Desktop navbar section start */}
                <Toolbar sx={navbarStyles.toolbar}> 
                    <Grid container>
                            <Grid item xl={2} lg={2} md={2} sm={12} xs={12}>
                                <LogoComponent/>
                            </Grid>
                            <Grid item xl={10} lg={10} md={10} sm={12} xs={12}>
                                <Box sx={navbarStyles.selectBox}>
                                    <TextField
                                        select
                                        fullWidth
                                        size='small'                   
                                    >
                                        <MenuItem value="0">Seç</MenuItem>
                                    
                                    </TextField>
                                </Box>
                            </Grid>
                    </Grid>
                </Toolbar>
            </Container>
    </AppBar >
    )
}

export default Navbar