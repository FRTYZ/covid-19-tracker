import 
  React, { 
    useEffect, 
    useState
} from 'react'

// Material UI elements
import { Grid, Box, Typography } from '@mui/material';

// Components
import { SnackbarAlert } from '../../components/SnackbarAlert';

// Router
import { useNavigate } from 'react-router-dom';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchCovidData } from '../../redux/actions';

// Npm packages
import { WorldMap } from "react-svg-worldmap"

// interfaces
import { snackbarOptionsProps } from '../../components/component';

function Map() { 
  // Router
  const navigate = useNavigate();

  // Redux
  const dispatch = useDispatch();
  const { data: covidData, loading, error } = useSelector((state: any) => state.covidData);

  // useState
  const [snackbarData, setSnackbarData] = useState<snackbarOptionsProps>({});
  const [selectedCountry, setSelectCountry] = useState<string>("");

  // useEffect
  useEffect(() => {
    if(selectedCountry !== ''){
        getCountriesValues()
    }
  }, [selectedCountry])

  // Functions
  const getCountriesValues = async() => {
      const country = selectedCountry.toLocaleLowerCase().replace(' ', '-')

      dispatch(fetchCovidData(country))

      if(covidData?.response?.length == 0){
          setSnackbarData({
            type: 'error',
            message: selectedCountry + ' verisi alınamadı. farklı ülke seçebilirsiniz.'
          })
      }else{
          navigate('/detail/'+ country)
      }
  }

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

  return (
    <React.Fragment>
      <Grid container>
        {/* Snackbar for alerts */}
        {Object.keys(snackbarData).length > 0 && <SnackbarAlert snackbarOptions={snackbarData} />}
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Box>
                <Typography>Seçilen Ülke</Typography>
            </Box>
        </Grid>
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
                size="xxl"
                data={data}
              />
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Map