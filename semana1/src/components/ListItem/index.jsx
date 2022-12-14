import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import { Divider, IconButton } from '@mui/material'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import * as React from 'react'
import { useAppContext } from '../../contexts/GlobalContext'
import Avatar from '@mui/material/Avatar'
import MuiListItemAvatar from '@mui/material/ListItemAvatar'


const CartListItem = ({ index, produto }) => {

  const {
    deletarItemDoCarrinho
  } = useAppContext();

  return (
    <>
      <ListItem
        secondaryAction={
          <IconButton
            edge="end"
            onClick={() => deletarItemDoCarrinho(index, produto)}
          >
            <DeleteOutlineOutlinedIcon />
          </IconButton>
        }
      >
        <MuiListItemAvatar>
          <Avatar alt={produto.nome} src={produto.url} />
        </MuiListItemAvatar>
        <ListItemText
          primary={
            <div>
              <strong>
                {`${produto.nome} | `}
              </strong>
              <strong>
                {`Subtotal: `}
              </strong>
              R$ {produto.preco * produto.quantidade}
            </div>
          }
          secondary={`quantidade: ${produto.quantidade}`}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  )
}

export default CartListItem
