import React from 'react'

import { Container } from '@mui/material';

// Layout Components
import Navbar from './Navbar';

// interface
import { LayoutProps } from './layout';

const Layout = (props: LayoutProps) => {

return (
  <React.Fragment>
      <Navbar />
      <Container>{props.children}</Container>
  </React.Fragment>
)
}

export default Layout