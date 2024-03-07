import React from 'react'

// Layout Components
import Navbar from './Navbar';

// interface
import { LayoutProps } from './layout';

const Layout = (props: LayoutProps) => {

return (
  <React.Fragment>
      <Navbar />
      <div>{props.children}</div>
  </React.Fragment>
)
}

export default Layout