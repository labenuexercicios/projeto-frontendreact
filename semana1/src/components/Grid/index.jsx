import { Grid } from '@mui/material'
import React from 'react'
import { StyledGridCenter } from './styles'


export const GridCenter = ({ children }) => (
  <StyledGridCenter container justifyContent="center" alignItems="center">
    {children}
  </StyledGridCenter>
)

export const GridCenterColumn = ({ children }) => (
  <Grid
    item
    container
    justifyContent="center"
    direction="column"
    alignItems="center"
  >
    {children}
  </Grid>
)
