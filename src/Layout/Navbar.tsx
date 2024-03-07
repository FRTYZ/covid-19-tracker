import React, { useState, MouseEvent, useEffect } from 'react';

// Material UI elements
import { 
    Grid, 
    Box, 
    AppBar, 
    Toolbar, 
    IconButton, 
    MenuItem, 
    Container, 
    Drawer, 
    Menu, 
    Divider,
    Avatar,
    ListItemAvatar,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme,
    Link
  } from "@mui/material"

// Material UI Icons
import { 
    Close, 
    ExpandMore,
    Logout, 
    List as ListIcon,
    Menu as MenuIcon } from '@mui/icons-material';

// Material UI styles
import { navbarStyles } from '../styles';

// Assets
import LogoImage from '../assets/logo.png'

// React Router
import { useNavigate } from 'react-router-dom';

// Components
import SearchBar from '../components/SearchBar';

const Navbar = () => {
    // Material UI and react router
    const theme = useTheme();
    const navigate = useNavigate()

    // useState elements
    const [mobileNav, setMobileNav] = useState<null | HTMLElement>(null);

    // Functions

    // Mobile navbar 
    const openMobileMenu = (event: MouseEvent<HTMLElement>) => {
        setMobileNav(event.currentTarget);
    }
    const closeMobileMenu = () => {
        setMobileNav(null)
    }

    // logo section
    const LogoComponent = () => (
        <Link href="/" style={{ textDecoration: 'none' }}>
            <Box sx={{ display :'flex' }}>
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
                    <Grid item xl={2} lg={2} md={2} sm={6}>
                        <LogoComponent/>
                    </Grid>
                    <Grid item xl={8} lg={8} md={8} sm={6}>
                            <SearchBar device="desktop" />
                    </Grid>
              </Grid>
          </Toolbar>
          {/* Desktop navbar section end */}

          {/* Mobile navbar section start */}
          <Toolbar sx={navbarStyles.mobileToolbar}>
              <Grid container>
                  <Grid item xs={6}>
                      <LogoComponent />
                  </Grid>
                  <Grid item xs={6}>
                      <Box sx={{ float : 'right'}}>
                            <IconButton size='small' edge='start' onClick={openMobileMenu}>
                                <MenuIcon sx={navbarStyles.mobileNavbarHamburgerMenuIcon} />
                            </IconButton>
                            <Drawer
                                anchor={'top'}
                                open={Boolean(mobileNav)}
                                onClose={closeMobileMenu}
                                PaperProps={{
                                    sx: {
                                        height: '100%',
                                        maxHeight: 'none',
                                    },
                                }}
                            >
                                <Container>
                                    <Grid container>
                                        <Grid item xl={12} md={12} sm={12} xs={12}>
                                            <Grid container>
                                                <Grid item xs={11}>
                                                    <LogoComponent />
                                                </Grid>
                                                <Grid item xs={1} sx={navbarStyles.drawerCloseIconGrid}>
                                                    <IconButton size='medium' edge='start' onClick={closeMobileMenu}>
                                                        <Close sx={navbarStyles.drawerCloseIcon} />
                                                    </IconButton>
                                                </Grid>
                                            </Grid>
                                            <Divider />
                                            <ListItem disablePadding>
                                                <ListItemButton 
                                                    sx={navbarStyles.drawerMenuListItemButton}
                                                    onClick={() => navigate('/')}
                                                >
                                                        <ListItemIcon sx={navbarStyles.drawerMenuListItemIcon}>
                                                            <ListIcon />
                                                        </ListItemIcon>
                                                    <ListItemText primary="Todo" />
                                                </ListItemButton>
                                            </ListItem>
                                        </Grid>
                                    </Grid>
                                </Container>
                            </Drawer>
                        </Box>
                  </Grid>
                  <Grid item xs={12}>
                      <SearchBar device="mobile" />
                  </Grid>
              </Grid>
          </Toolbar>
         {/* Mobile navbar section end */}
      </Container>
  </AppBar >
  )
}

export default Navbar