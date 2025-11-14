import './App.css'
import { documentTitle } from './lib/utils'
import LandingPage from './Pages/LandingPage'

function App() {
  documentTitle('Home')

  return (
    <LandingPage/>
  )
}

export default App
