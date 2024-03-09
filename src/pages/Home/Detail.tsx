import 
    React,{
    useEffect, 
    useState,
    lazy,
    Suspense
} from 'react'

// Material UI elements
import { Grid, Box } from '@mui/material';

// Components
export const CardSection = lazy(() => import('../../components/CardSection'));

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { fetchCovidData } from '../../redux/actions';

// Router
import { useParams } from 'react-router-dom'

// interfaces
import { ResponseProp } from '../../helpers/request-interface';

const Detail = () => {
    // Router
    const {country} = useParams();

    // Redux
    const dispatch = useDispatch();
    const { data: covidData, loading, error } = useSelector((state: any) => state.covidData);

    // useState
    const [values, setValues] = useState<ResponseProp>({}) 
    // useEffects
    useEffect(() => {
        if(Object.keys(covidData).length > 0){
            setValues(covidData?.response[0])
        }else{
            dispatch(fetchCovidData(country!))
        }
    },[])

    useEffect(() => {
        if(Object.keys(covidData).length > 0){ 
            setValues(covidData?.response[0])
        }
    }, [covidData])

    return (
        <React.Fragment>
            <Grid container>
                <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                    <Box sx={{ marginTop: 4 }}> 
                        <Grid container spacing={2}>
                            <Grid item lg={6} md={6} sm={6} xs={12}>
                                <Suspense fallback={<></>}>
                                    {Object.keys(values).length > 0 && (
                                        <CardSection 
                                            title='Toplam vaka sayısı'
                                            value={values?.cases?.total}
                                            status={values?.cases?.new}
                                            color='#f9345e'
                                        />
                                    )}
                                </Suspense>
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xs={12}>
                                <Suspense fallback={<></>}>
                                    {Object.keys(values).length > 0 && (
                                        <CardSection 
                                            title='Aktif vaka sayısı'
                                            value={values?.cases?.active}
                                            color='#fa6400'
                                        />
                                    )}
                                </Suspense>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} p='20px 0px 20px 0px'>
                            <Grid item lg={6} md={6} sm={6} xs={12}>
                                <Suspense fallback={<></>}>
                                    {Object.keys(values).length > 0 && (
                                        <CardSection 
                                            title='İyileşenler'
                                            value={values?.cases?.active}
                                            color='#1cb142'
                                        />
                                    )}
                                </Suspense>
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xs={12}>
                                    {Object.keys(values).length > 0 && (
                                        <CardSection 
                                            title='Vefat edenler'
                                            value={values?.deaths?.total}
                                            status={String(values?.deaths?.new)}
                                            color='#6236ff'
                                        />
                                    )}
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item lg={6} md={6} sm={6} xs={12}>
                                    {Object.keys(values).length > 0 && (
                                        <CardSection 
                                            title='Test sayısı'
                                            value={values?.tests?.total}
                                            color='#f40af5'
                                        />
                                    )}
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xs={12}>
                                    {Object.keys(values).length > 0 && (
                                        <CardSection 
                                            title='Nufüs'
                                            value={values?.population}
                                            color='#ff8f00'
                                        />
                                    )}
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                            
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default Detail