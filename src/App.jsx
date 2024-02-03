import { Route, Routes, Link, BrowserRouter } from "react-router-dom"
import { Header } from "./Components/Header"
import { Footer } from "./Components/Footer"
import Cadastro from "./Pages/Cadastro"
import Login from "./Pages/Login"
import TelaHome from "./Pages/TelaHome"
import MeuPedidos from "./Pages/MeusPedidos"
import page404 from "./Pages/404"

function App() {

  return (
    <>
    <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="cadastro" element={<Cadastro/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="/" element={<TelaHome/>}/>
          <Route path="requests" element={<MeuPedidos/>}/>
          <Route path="*" element={<page404/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
