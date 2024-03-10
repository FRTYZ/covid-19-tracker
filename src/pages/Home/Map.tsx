import 
  React, { 
    useEffect, 
    useState
} from 'react'

// Material UI elements
import { 
  Grid,
   Box,
   useMediaQuery,
   useTheme
} from '@mui/material';

// Router
import { useNavigate } from 'react-router-dom';

// Redux
import { useDispatch } from 'react-redux';
import { resetState } from '../../redux/actions';

// Npm packages
import { WorldMap } from "react-svg-worldmap"
import slugify from 'react-slugify';

function Map() { 
  // Router
  const navigate = useNavigate();

  // Redux
  const dispatch = useDispatch();

  // useState
  const [selectedCountry, setSelectCountry] = useState<string>("");

  // useEffect
  useEffect(() => {
    if(selectedCountry !== ''){
        const country = slugify(selectedCountry)
        navigate('/detail/'+ country)
        dispatch(resetState())
    }
  }, [selectedCountry])

  // Functions
 
  // Map default values
  const data = [
    { country: "tr", value: 85561976 },
  ];

  // Map styles
  const stylingFunction = (context : any) => {
    const opacityLevel = 0.1 + (1.5 * (context.countryValue - context.minValue) / (context.maxValue - context.minValue))
   
    return {
        fill: context.countryName === "Turkey" ? "red" : context.color, 
        fillOpacity: opacityLevel, 
        stroke: "black", 
        strokeWidth: 1, 
        strokeOpacity: 0.2, 
        cursor: "pointer" 
      }
  }

  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // 'sm' ve altı mobil olarak kabul edilir.
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'lg')); // 'sm' ve 'md' arasındaysa tablet olarak kabul edilir.
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg')); // 'md' ve üzeri masaüstü olarak kabul edilir.

  return (
    <React.Fragment>
      <Grid container>
         {/* Map section */}
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Box>
              <WorldMap
                onClickFunction={(countryName) => {
                  setSelectCountry(countryName?.countryName)
                }}
                styleFunction={stylingFunction}
                color="white"
                value-suffix="people"
                backgroundColor="lightblue"
                size={isDesktop ? 'xxl' : isTablet ? 'xl' : isMobile ? 'md' : 'sm'}
                data={data}
              />
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Map