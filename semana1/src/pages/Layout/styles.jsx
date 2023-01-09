import ToysRoundedIcon from '@mui/icons-material/ToysRounded'
import { styled } from '@mui/material/styles'

export const StyledToysRoundedIcon = styled(
  ToysRoundedIcon
)(({ theme }) => ({
  marginRight: theme.spacing(3),
  fontSize: theme.spacing(4),
}))
