import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/menu/Menu'
import Footer from './components/footer/Footer'
import Sobre from './pages/sobre/Sobre'
import Teoria from './pages/teoria/Teoria'
import Objetivo from './pages/objetivo/Objetivo'
import Justificativa from './pages/justificativa/Justificativa'
import HistoriasContos from './pages/historiasContos/HistoriasContosAfrobrasileiro'
import Oficinas from './pages/oficinas/Oficinas'
import Home from './components/home/Home'


function ApplicationRoutes() {
    return (
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/justificativa" element={<Justificativa />} />
          <Route path="/teoria" element={<Teoria />} />
          <Route path="/objetivo" element={<Objetivo />} />
          <Route path="/historiasContos" element={<HistoriasContos />} />
          <Route path="/oficinas" element={<Oficinas />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    )
  }
  
  export default ApplicationRoutes