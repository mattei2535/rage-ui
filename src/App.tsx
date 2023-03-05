import './index.css'
import Auth from './systems/auth'
import Toasts from './utils/toasts'
import Commands from './systems/commands/index'

const App = () => {

  return (
    <>
      <Auth />
      <Toasts />
      <Commands />
    </>

  )
}

export default App
