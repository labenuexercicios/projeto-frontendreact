import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import { Divider, IconButton } from '@mui/material'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import * as React from 'react'
import ListItemAvatar from '../ListItemAvatar'

const StoreListItem = ({ index, product }) => {
  return (
    <>
      <ListItem
        secondaryAction={
          <IconButton
            edge="end"
          //onClick={() => handleDeleteClick(index, p.id)}
          >
            <DeleteOutlineOutlinedIcon />
          </IconButton>
        }
      >
        <ListItemAvatar />
        <ListItemText primary={product.nome} secondary={product.preco} />
        <ListItemText primary={`quantidade: ${product.quantidade}`}/>
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  )
}

export default StoreListItem
