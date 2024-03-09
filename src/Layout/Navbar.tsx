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
    Link
  } from "@mui/material"

// Material UI styles
import { navbarStyles } from '../styles';

// Assets
import LogoImage from '../assets/logo.png'

// REdux
import { resetState } from '../redux/actions';
import { useDispatch } from 'react-redux';

// Router
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    // Redux
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Material UI and react router
    const theme = useTheme();

    // Functions
    const handleNavigate = () => {
        dispatch(resetState());
        navigate('/')
    }

    // logo section
    const LogoComponent = () => (
            <Box sx={navbarStyles.logoBox} onClick={() => handleNavigate()}>
                <img src={LogoImage} width={'48'} height={'48'} />
                <Typography 
                    sx={{
                    marginTop: 1.6,
                    marginLeft: 1,
                    color: theme.palette.warning.main,
                    fontWeight: 600
                }}>Tracker</Typography>
            </Box>
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