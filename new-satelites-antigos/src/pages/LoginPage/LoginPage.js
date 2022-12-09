import { Layout } from "../../components/Layout/Layout"
import {BackgroundImg, Container, DivForm} from './styled'
import { useState } from "react"
import {useNavigate} from 'react-router-dom'
import {goToStorePage} from '../../router/coordinator'

export const LoginPage = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: "", 
    email: "",
    password: ""
  })

  const handleClick = (e) => {
    e.preventDefault()
    goToStorePage(navigate)
    localStorage.setItem("form", JSON.stringify(form))
  }

  const onChangeForm = (e) => {
    const {name, value} = e.target
    setForm({...form, [name]: value})
  }

  const clearForm = () => {
    setForm({})
    localStorage.setItem("form", JSON.stringify(form))
  }

  const infoForm = JSON.parse(localStorage.getItem("form"))
  console.log(infoForm)
  return (
    <Layout>
      <BackgroundImg src='https://images.pexels.com/photos/11559497/pexels-photo-11559497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
      <Container>
        <DivForm>
          {infoForm.email !== ""?
          <>
            <p>Bem-vindo (a), {infoForm.name.charAt(0).toUpperCase() + infoForm.name.slice(1)}! </p>
            <button className="logout" onClick={()=>clearForm()}>SAIR</button>
          </>
        
          :
          <form onSubmit={handleClick}>
            <div className="nome-sobrenome">
              <label>Nome</label>
              <input 
                type="text" 
                name="name"
                value={form.name} 
                onChange={onChangeForm}
              />
            </div>
            <div className="email">
              <label>Email</label>
              <input 
                  required
                  type="email" 
                  name="email"
                  value={form.email}
                  onChange={onChangeForm}
                  />
            </div>
            <div className="senha">
              <label>Senha</label>
              <input 
                  required
                  type="password" 
                  name="password"
                  value={form.password}
                  onChange={onChangeForm}
                  />
            </div>
            <button>LOGIN</button>
          </form>
          }
        </DivForm>
      </Container>
    </Layout>
  )
}