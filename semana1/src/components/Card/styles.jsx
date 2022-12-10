import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import { styled } from '@mui/material/styles'
import { MATERIAL_SHADOW } from '../../utils/constants'

export const StyledCard = styled(Card)(() => ({
  boxShadow: MATERIAL_SHADOW,
}))

export const StyledCardContent = styled(CardContent)(() => ({
  backgroundColor: '#eee',
}))

export const StyledCardActions = styled(CardActions)(() => ({
  backgroundColor: '#eee',
}))
