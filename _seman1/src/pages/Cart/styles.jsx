import { Grid, styled, Typography } from '@mui/material'

export const StyledContainer = styled(Grid)(() => ({
  backgroundColor: '#fff',
  margin: theme.spacing(3),
}))

export const StyledTitle = styled(Typography)(({ theme }) => ({
  backgroundColor: '#fff',
  margin: theme.spacing(2, 0, 2, 0),
}))