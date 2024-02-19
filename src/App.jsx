import { Route, Routes, BrowserRouter } from "react-router-dom"
import Cadastro from "./Pages/Cadastro"
import Categorias from "./Pages/Categorias"
import TelaHome from "./Pages/TelaHome"
import MeusPedidos from "./Pages/MeusPedidos"
import Login from "./Pages/Login"
import Page404 from "./Pages/404"

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<TelaHome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro/>}/>
            <Route path="/categorias" element={<Categorias />} />
            <Route path="/meuspedidos" element={<MeusPedidos />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
