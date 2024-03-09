// interfaces
import { countryDataState } from "./saga-interface";

export const FETCH_COVID_DATA = 'FETCH_COVID_DATA';
export const FETCH_COVID_DATA_SUCCESS = 'FETCH_COVID_DATA_SUCCESS';
export const FETCH_COVID_DATA_FAILURE = 'FETCH_COVID_DATA_FAILURE';
export const RESET_STATE = 'RESET_STATE';

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

export const resetState = () => ({
  type: RESET_STATE,
});