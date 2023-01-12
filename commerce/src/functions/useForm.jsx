import {useState} from 'react';

export function useForm(initialState) {
  const[form, setForm] = useState({initialState})

  const onChange = e => {
    const field = e.target.name;
    const value = e.target.value;
    setForm({...form, [field]: value})
    
    console.log(form)
  }

  return {form, onChange}
}