import React, {useState, useEffect} from "react";

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

// Material UI styles
import { navbarStyles } from '../styles';

// Assets
import LogoImage from '../assets/logo.png'

// Router
import { Link, useNavigate } from 'react-router-dom';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from "../redux/actions";

const Navbar = () => {
    // Router
    const navigate = useNavigate()

    // Material UI and react router
    const theme = useTheme();

    // Redux
    const dispatch = useDispatch();
    const countriesFromApi = useSelector((state: any) => state.countries);

    // useState
    const [countries, setCountries] = useState<string[]>([''])

    useEffect(() => {
        if(!countriesFromApi?.response){
            dispatch(getCountries()); 
        }
    }, [])

    useEffect(() => {
        if(countriesFromApi?.response){
            setCountries(countriesFromApi.response)
        }
    }, [countriesFromApi.response])

    // Functionst
    const handleSelectCountry = (value: string) =>  {
        const selectCountry = value.toLocaleLowerCase();
        navigate('/detail/' + selectCountry)
    }   

    return (
        <AppBar position="sticky" sx={navbarStyles.appBar}>
            <Container maxWidth='lg' sx={navbarStyles.container}>
                {/* Desktop navbar section start */}
                <Toolbar sx={navbarStyles.toolbar}> 
                    <Grid container>
                            <Grid item xl={2} lg={2} md={2} sm={12} xs={12}>
                                <Link to='/' style={{ textDecoration: 'none' }}>
                                    <Box sx={navbarStyles.logoBox}>
                                            <img src={LogoImage} width='48' height='48' />
                                            <Typography 
                                                sx={{
                                                color: theme.palette.warning.main,
                                                ...navbarStyles.logoText
                                            }}>Covid 19 Tracker</Typography>
                                    </Box>
                                </Link>
                            </Grid>
                            <Grid item xl={10} lg={10} md={10} sm={12} xs={12}>
                                <Box sx={navbarStyles.selectBox}>
                                    <TextField
                                        select
                                        fullWidth
                                        size='small'
                                        onChange={(e) => handleSelectCountry(e.target.value)}
                                        label="Ülke seçebilirsiniz"               
                                    >
                                        {countries.length > 0 && countries.map((item, key) => (
                                            <MenuItem value={item} key={key}>{item}</MenuItem>
                                        ))}
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