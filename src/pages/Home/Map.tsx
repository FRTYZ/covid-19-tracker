import React, {useEffect, useState} from 'react'
import MapChart from '../../components/MapChart'

import WorldMap from "react-svg-worldmap";

import { Grid, Box } from '@mui/material';

import { Request } from '../../helpers/Request';

import { ResponseProp } from '../../helpers/interface';

function Map() {

  // useState
  const [selectedCountry, setSelectCountry] = useState<string>("");
  const [statistics, setStatistics] = useState<ResponseProp[]>([])

  // useEffect
  useEffect(() => {
      getCountriesValues()
  }, [selectedCountry])


  // Functions
  const getCountriesValues = async() => {
      const country = selectedCountry.toLocaleLowerCase().replace(' ', '-')
      const result = await Request({
          method: 'GET',
          url: '/statistics?country=' + country 
      })
      setStatistics(result.response)
  }

  const data = [
    { country: "tr", value: 85561976 },
  ];


  return (
    <React.Fragment>
      <Grid container>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Box>
              <WorldMap
                onClickFunction={(countryName) => {
                  console.log(countryName)
                  setSelectCountry(countryName.countryName)
                }}
                color="red"
                value-suffix="people"
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