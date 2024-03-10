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
    card: {
        textAlign: 'center',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1.5rem 3rem',
        borderRadius: '25px',
    },
    cardContentTitle: {
        fontSize: '20px',
        fontWeight: 700,
        lineHeight: '34px',
        color: '#1A1053',
    },
    cardMiddleContent: {
        fontSize: '35px',
        fontWeight: 700,
        lineHeight: '59px',
        margin: '8px 0px 8px 0px'
    },
    cardBottomContent: {
        fontSize: '16px',
        fontWeight: 700,
        lineHeight: '28px',
    },
    cardActions: {
        textAlign: 'center', 
        display: 'inline'
    },
    cardActionsBox: {
        borderTop: '1px solid'
    },
    cardActionTitle: {
        fontSize: '16px',
        lineHeight: '28px',
        marginTop: '10px'
    },
    cardActionText: {
        fontSize: '16px',
        fontWeight: 700,
        lineHeight: '28px'
    }
}

// pages/Home/Detail.tsx
export const detailPageStyles: Record<string, SxProps<Theme> | undefined> = {
    pieChartBox: {
        display: 'flex',
        justifyContent: 'center', 
        textAlign: 'center', 
        marginTop: 5
    },
    chartsTitle: {
        textAlign: 'center', 
        fontSize: '16px', 
        fontWeight: 600
    }
}