// interfaces
import { countryDataState } from "./saga-interface";

export const FETCH_COVID_DATA = 'FETCH_COVID_DATA';
export const FETCH_COVID_DATA_SUCCESS = 'FETCH_COVID_DATA_SUCCESS';
export const FETCH_COVID_DATA_FAILURE = 'FETCH_COVID_DATA_FAILURE';
export const RESET_STATE = 'RESET_STATE';

export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRIES_SUCCESS = 'GET_COUNTRIES_SUCCESS';
export const GET_COUNTRIES_FAILURE = 'GET_COUNTRIES_FAILURE';

export const fetchCovidData = (country: string) => ({
  type: FETCH_COVID_DATA,
  payload: { country },
});

export const fetchCovidDataSuccess = (data: countryDataState) => ({
  type: FETCH_COVID_DATA_SUCCESS,
  payload: data,
});

export const fetchCovidDataFailure = (error: any) => ({
  type: FETCH_COVID_DATA_FAILURE,
  payload: error,
});

// Countries
export const getCountries = () => ({
  type: GET_COUNTRIES,
});

export const getCountriesSuccess = (data: any) => ({
  type: GET_COUNTRIES_SUCCESS,
  payload: data,
});

export const getCountriesFailure = (error: any) => ({
  type: GET_COUNTRIES_FAILURE,
  payload: error,
});

export const resetState = () => ({
  type: RESET_STATE,
});