import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './index.css'

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from 'styled-components'

import theme from './theme.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.Fragment>
     <ThemeProvider theme={theme}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ThemeProvider>
  </React.Fragment>,
)
