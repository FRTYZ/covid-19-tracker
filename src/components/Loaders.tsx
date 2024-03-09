import React from 'react'

// Material UI elements
import { 
    Skeleton,
    Box
} from '@mui/material';

import { ChartLoadProps } from './component';

export const CardLoader = () => {
    return (
        <Skeleton
            sx={{ bgcolor: 'grey.900' }}
            variant="rectangular"
            height={200}
        />
    )
}

export const ChartLoader: React.FC<ChartLoadProps> = ({variant}) => {
    return (
        <Box 
            sx={{ 
                display: 'flex',
                justifyContent: 'center', 
                textAlign: 'center', 
                marginTop: 5
            }}
        >                          
            {variant == 'circular' ? (
                <Skeleton variant="circular" width={270} height={250} />
            ): (
                <Skeleton variant="rounded" width={270} height={250} />
            )}     
           
        </Box>
    )
} 