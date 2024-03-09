import React from 'react'

// Material UI elements
import { 
    Box,
    Card,
    CardContent,
    CardActions,
    Typography,
    useTheme,
} from '@mui/material';

import { cardSectionStyles } from '../styles';

import { CardLoader } from './Loaders';

// İnterfaces
import { CardSectionProp } from './component';

const CardSection: React.FC<CardSectionProp> = ({ title, value, status, color, bottomText }) => {
    // Material UI settings
    const theme = useTheme();
    return (
        <Card 
            variant="outlined" 
            sx={{
                ':hover': {
                    outline: '2px solid' + theme.palette.warning.main
                },
                ...cardSectionStyles.card
            }}
        >
        {value !== undefined ? (
            <>
                <CardContent>
                    <Typography sx={cardSectionStyles.cardContentTitle}>
                        {title}
                    </Typography>
                    <Typography 
                        sx={{
                            color: {color},
                            ...cardSectionStyles.cardMiddleContent
                        }}
                    >                    
                        {value == null ? 'Bulunamadı' : value}
                    </Typography>
                    <Typography 
                        sx={
                            status == 'null' || status == undefined ? 
                            { p: 1.7 }
                            :{
                                color: {color},
                                ...cardSectionStyles.cardBottomContent
                            }}>
                        {status == 'null' || status == undefined ? '' : status}
                    </Typography>
                </CardContent>
                {bottomText !== undefined && bottomText !== '' && (
                    <CardActions sx={cardSectionStyles.cardActions}>
                        <Box sx={cardSectionStyles.cardActionsBox}>
                            <Typography sx={cardSectionStyles.cardActionTitle}>Güncellenme Tarihi</Typography>
                            <Typography sx={cardSectionStyles.cardActionText}>{bottomText}</Typography>
                        </Box>
                    </CardActions>
                )}
            </>
        ): (
            <CardLoader />
        )}
        </Card>
    )

}

export default CardSection