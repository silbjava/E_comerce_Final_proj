import { Route, Routes, BrowserRouter } from "react-router-dom"
import Cadastro from "./Pages/Cadastro"
import Categorias from "./Pages/Categorias"
import TelaHome from "./Pages/TelaHome"
import MeusPedidos from "./Pages/MeusPedidos"
import Login from "./Pages/Login"
import Page404 from "./Pages/404"
import Paginas from "./Components/Paginas"
import Produtos from "./Pages/Produtos"
import Detalhes from "./Pages/Detalhes"
import MeuCarrinho from "./Components/MeuCarrinho"

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<TelaHome/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/cadastro" element={<Cadastro/>}/>
            <Route path="/categorias" element={<Categorias />} />
            <Route path="/meuspedidos" element={<MeusPedidos />} />
            <Route path="/produtos" >
              <Route index element={<Produtos/>}/>
              <Route path=":detalhes" element={<Detalhes/>}/>
            </Route>
            <Route path="*" element={<Page404 />} />
            <Route path="paginas" element={<Paginas/>}/>
            <Route path="carrinho" element={<MeuCarrinho/>}/>
          </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
