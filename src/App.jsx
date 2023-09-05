
import loadData from './components/Data/LoadUpdateData'
import Router from './components/Router/Router'

export default function App() {

  loadData()
  
  return (
    <>     
      <Router />
    </>
  )
}

