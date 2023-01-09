import MuiInput from '@mui/material/TextField'
import React from 'react'


const Input = ({
  required,
  autoFocus,
  id,
  label,
  name,
  value,
  onChange,
  type,
  endAdornment,
  error,
}) => (
  <MuiInput
    id={id}
    name={name}
    required={required}
    autoFocus={autoFocus}
    fullWidth
    margin="normal"
    label={label}
    variant="standard"
    value={value}
    type={type}
    onChange={onChange}
    InputProps={{
      endAdornment: endAdornment === undefined ? undefined : endAdornment,
    }}
    {...(error && { error: true, helperText: error })}
  />
)

export default Input
