import { Tab, Tabs } from '@mui/material'
import MuiAppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import Cart from '../Cart'
import Home from '../Home'
import { StyledToysRoundedIcon } from './styles'
import React from 'react'

const TabPanel = (props) => {
  const { children, value, index } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
    >
      <Box sx={{ p: 3 }}>{children}</Box>
    </div>
  )
}

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const Layout = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      <MuiAppBar>
        <Toolbar>
          <StyledToysRoundedIcon />
          <Typography variant="h6" color="inherit">
            Toy Store
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
        <Tabs
          centered
          value={value}
          onChange={handleChange}
          textColor="inherit"
        >
          <Tab label="Loja de Brinquedos" {...a11yProps(0)} />
          <Tab label="Carrinho de Compras" {...a11yProps(1)} />
        </Tabs>
      </MuiAppBar>
      <div>
        <TabPanel value={value} index={0}>
          <div>
            <Toolbar />
            <Home />
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div>
            <Toolbar />
            <Cart />
          </div>
        </TabPanel>
      </div>
    </>
  )
}

export default Layout
