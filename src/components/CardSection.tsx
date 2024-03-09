import React from 'react'

// Material UI elements
import { 
    Box,
    Grid,
    Card,
    CardContent,
    CardActions,
    Typography,
    Avatar,
    useTheme,
    Chip
} from '@mui/material';

import { cardSectionStyles } from '../styles';

// İnterfaces
import { CardSectionProp } from './component';

const CardSection: React.FC<CardSectionProp> = ({ title, value, status, color }) => {
    // Material UI settings
    const theme = useTheme();
    return (
        <Card 
            variant="outlined" 
            sx={{
                ':hover': {
                    outline: '2px solid' + theme.palette.warning.main
                },
                textAlign: 'center',
                boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1.5rem 3rem',
                borderRadius: '25px'
            }}
        >
            <CardContent>
                <Typography sx={{
                    fontSize: '20px',
                    fontWeight: 700,
                    lineHeight: '34px',
                    color: '#1A1053',
                }}>
                       {title}
                </Typography>
                <Typography sx={{
                    fontSize: '35px',
                    fontWeight: 700,
                    lineHeight: '59px',
                    color: {color},
                    margin: '8px 0px 8px 0px'
                }}>
                       {value == null ? 'Bulunamadı' : value}
                </Typography>

                {status == 'null' || status == undefined ? (
                    <Typography sx={{ p: 1.7 }}>
                        
                    </Typography>
                   
               ): (
                    <Typography sx={{
                        fontSize: '16px',
                        fontWeight: 700,
                        lineHeight: '28px',
                        color: {color},
                    }}>
                        {status}
                    </Typography>
               )}
            </CardContent>
        </Card>
    )

}

export default CardSection