import 
    React,{
    useEffect, 
    useState,
    lazy,
    Suspense
} from 'react'

// Material UI elements
import { Grid, Box, Typography } from '@mui/material';

// Components
export const CardSection = lazy(() => import('../../components/CardSection'));

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { fetchCovidData } from '../../redux/actions';

// Router
import { useParams } from 'react-router-dom'

// Charts
import { 
    PieChart, 
    Pie, 
    Cell, 
    Tooltip,
    BarChart, 
    Bar, 
    XAxis,
} from "recharts";

// interfaces
import { ResponseProp } from '../../helpers/request-interface';

const Detail = () => {
    // Router
    const {country} = useParams();

    // Redux
    const dispatch = useDispatch();
    const { data: covidData, loading, error } = useSelector((state: any) => state.covidData);

    // useState
    const [values, setValues] = useState<ResponseProp>({});
    const [updateTime, setUpdateTime] = useState<string>('')
    const [pieChartData, setPieChartData] = useState<{name: string, value: number}[]>([]);
    const [lineChartData, setLineChartData] = useState<{name: string, value: number }[]>([]);

    // useEffects
    useEffect(() => {
        if(Object.keys(covidData).length > 0){
            setValues(covidData?.response[0])
        }else{
            dispatch(fetchCovidData(country!))
        }
    },[covidData])

    useEffect(() => {
        if(Object.keys(values).length > 0){

            // Charts 
            const pieChartData = [
                {
                    name: 'İyileşenler',
                    value: Number(values?.cases?.active)
                },
                {
                    name: 'Vefat edenler',
                    value: Number(values?.deaths?.total)
                },
            ];

            setPieChartData(pieChartData)

            const lineChartData = [
                {
                    name: 'Nufüs',
                    value: Number(values?.population)
                },
                {
                    name: 'Test sayısı',
                    value: Number(values?.tests?.total)
                }
            ]

            setLineChartData(lineChartData)

            // Last update time

            const timestamp: string = values?.time!;
            const date: Date = new Date(timestamp);
            
            const options: Intl.DateTimeFormatOptions = { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric', 
              hour: 'numeric', 
              minute: 'numeric', 
              second: 'numeric', 
              timeZoneName: 'short' 
            };
            
            const formattedDate: string = new Intl.DateTimeFormat('en-US', options).format(date);

            setUpdateTime(formattedDate)
        }
    },[values])

    
    //--------- Chart Setting area --------------

    const colors = ["#b8c0c7", "#00C49F", "#FFBB28", "#FF8042"];
    const radian = Math.PI / 180;
    
    /* 
        Chart içinde olan her dilimi temsil eder

        Parametreleri
        -cx, cy : Dairenin merkezinin x ve y koordinatları.
        -midAngle: Dilimin merkez açısı.
        -innerRadius: İç yarıçap.
        -outerRadius: Dış yarıçap.
        -percent: Dilimin yüzdesi.
        -index: Dilimin indeksi.
    */
    const renderCustomizedLabel = ({cx, cy, midAngle, innerRadius, outerRadius, percent}: any) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * radian);
        const y = cy + radius * Math.sin(-midAngle * radian);
  
        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
            >
              {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <React.Fragment>
            <Box sx={{ marginBottom: 4 }}>
                <Grid container>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <Box sx={{ marginTop: 4 }}>
                            <Suspense fallback={<></>}>
                                {Object.keys(values).length > 0 && (
                                    <CardSection 
                                    title='Ülke'
                                    value={values?.country}
                                    status={values?.continent}
                                    color='#ff6c00'
                                    bottomText={updateTime}
                                />
                                )}
                            </Suspense>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <Box sx={{ marginTop: 3 }}> 
                            <Grid container spacing={2}>
                                <Grid item lg={6} md={6} sm={6} xs={6}>
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
                                <Grid item lg={6} md={6} sm={6} xs={6}>
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
                                <Grid item lg={6} md={6} sm={6} xs={6}>
                                    <Suspense fallback={<></>}>
                                        {Object.keys(values).length > 0 && (
                                            <CardSection 
                                                title='İyileşenler'
                                                value={values?.cases?.recovered}
                                                color='#1cb142'
                                            />
                                        )}
                                    </Suspense>
                                </Grid>
                                <Grid item lg={6} md={6} sm={6} xs={6}>
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
                                <Grid item lg={6} md={6} sm={6} xs={6}>
                                        {Object.keys(values).length > 0 && (
                                            <CardSection 
                                                title='Test sayısı'
                                                value={values?.tests?.total}
                                                color='#f40af5'
                                            />
                                        )}
                                </Grid>
                                <Grid item lg={6} md={6} sm={6} xs={6}>
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
                        <Grid container>
                            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                <Box 
                                    sx={{ 
                                        display: 'flex',
                                        justifyContent: 'center', 
                                        textAlign: 'center', 
                                        marginTop: 5
                                    }}
                                >
                                    <PieChart width={400} height={220}>
                                        <Pie
                                            data={pieChartData}
                                            labelLine={false}
                                            label={renderCustomizedLabel}
                                            outerRadius={100}
                                            cx={200}
                                            fill="#8884d8"
                                            dataKey="value"
                                        >
                                            {pieChartData.length > 0 && pieChartData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                    </PieChart>
                                </Box>
                                <Typography sx={{  textAlign: 'center', fontSize: '16px', fontWeight: 600 }}> Vefat eden / İyileşenler istatistik grafiği </Typography>
                            </Grid>
                            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                <Box 
                                    sx={{ 
                                        display: 'flex', 
                                        justifyContent: 'center', 
                                        textAlign: 'center', 
                                        marginTop: 7
                                    }}>
                                    {lineChartData.length > 0 && (
                                        <BarChart width={200} height={230} data={lineChartData}>
                                            <XAxis dataKey="name" />
                                            <Tooltip />
                                            <Bar dataKey="value" fill="#FF8042"/>
                                        </BarChart>
                                    )}
                                </Box>
                                <Typography sx={{ textAlign: 'center', fontSize: '16px', fontWeight: 600 }}> Nufüs / Test olanlar istatistik grafiği </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    )
}

export default Detail