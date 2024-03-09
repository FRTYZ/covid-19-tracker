import { SxProps, Theme } from "@mui/material";

// Layout/Navbar.tsx
export const navbarStyles: Record<string, SxProps<Theme> | undefined> = {
    appBar: {
        bgcolor: 'hsla(0,0%,100%,.87)', 
        boxShadow: 1
    },
    container: {
        marginTop: '5px',
        marginBottom: '5px',
        paddingRight: { sm: '0px' },
        paddingLeft: { sm: '0px' }
    },
    toolbar: {
        marginTop: 1.4,
        paddingRight: { sm: '0px' },
        paddingLeft: { sm: '0px', xs: '0' },
    },
    logoBox: {
        display :'flex',
        margin: {
            lg: 0,
            md: 0,
            sm: '10px',
            xs: '10px'
        },
        cursor: 'pointer'
    },
    logoText: {
        marginTop: 1.6,
        marginLeft: 1,
        fontWeight: 600
    },
    selectBox: {
        margin: {
            lg: 0,
            md: 0,
            sm: '15px',
            xs: '10px'
        }
    }
} 

// components/CardSection
export const cardSectionStyles: Record<string, SxProps<Theme> | undefined> = {
    cardContentTitle: {
        fontSize: '16px', 
        fontWeight: 600, 
        marginBottom: 1
    },
    cardContent: {
        fontSize: '16px', 
        marginBottom: 1
    },
    cardImageBox : {
        display: 'inline-flex'
    },
    cardImage : {
        width: 40, 
        marginRight: '5px', 
        border: '2px solid #7c4b00'
    }
}