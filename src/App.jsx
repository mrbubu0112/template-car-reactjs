

import Board from './pages/Board/_id'
import ScrollHide from '~/components/AppBar/HideAppBar'
import '../src/assets/css/responsive.css'
import Welcome from '~/components/Content/Welcome'
import Form from './components/Content/Form'
import Navbar from '~/components/AppBar/Nav'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'


library.add(faBars)


function App() {
  return (
    <div >
      <Navbar className="navbar" />
      <ScrollHide/>
      <Welcome className="welcome" id="back-to-top-anchor"/>

      <Form className="form"/>
      <Board/>

    </div>
  )
}

export default App