import { Link, NavLink } from "react-router-dom";
import Paginas from "../Paginas";

export function Header() {
   const navLinkStyle = ({isActive}) =>{
    return(
        isActive?'text-orange-500':'text-zinc-50'
    )
   }
    return (
        <>
            <div className="hidden sm:flex flex-col h-[174px] pb-[7px] bg-blue-900 w-screen relative">
                <div className="flex">
                    <img id="logo" className="w-[81.8px] h-8 mt-[54px] ml-[7.43vw] mr-[10vw] lg:mr-[13vw]" src="./../src/assets/Logo E-rede.png" alt="Logo E-rede" />
                    <div className="flex relative items-center mt-[45px] mr-[4.44vw]">
                        <img id="pesquisar" className=" absolute w-6 ml-3  pointer-events-none " src="./../src/assets/Procurar.svg" alt="icone de pesquisa" />
                        <input className="h-11 w-[36.11vw] pl-11 text-stone-500 font-inter" type="serach" placeholder="Buscar" required />
                    </div>

                    <div className=" flex gap-5 mt-[47px]">
                        <button className=" h-[19px] mt-[11px] items-center text-white font-inter sm:text-xs md:text-base font-semibold">
                            <Link to="/cadastro">Cadastre-se</Link>
                        </button>
                        <Link to="/login">
                        <button className="w-[9vw] h-10 rounded-lg bg-orange-500 text-zinc-50 font-inter sm:text-xs md:text-base  font-semibold  items-center" >
                            Entrar
                        </button></Link>
                        <button className="w-6 h-6 pt-[7px]">
                            <img id="carrinho" src=".\..\src\assets\Carrinho.svg" alt="icone carrinho de compras" />
                        </button>
                    </div>
                </div>
                <nav className=" flex w-screen justify-center gap-10 mt-[59px]  font-inter text-base font-semibold">
                    <a ><NavLink className={navLinkStyle} to="/">Home</NavLink></a>
                    <a ><NavLink className={navLinkStyle} to="/produtos">Produtos</NavLink></a>
                    <a ><NavLink className={navLinkStyle} to="/categorias">Categorias</NavLink></a>
                    <a ><NavLink className={navLinkStyle} to="/meuspedidos">Meus Pedidos</NavLink></a>
                </nav>
            </div>
            <div className="sm:hidden flex h-[137px] justify-center bg-blue-900">
                <div className="flex flex-col w-[80vw] h-[69.18px] rounded mt-[33px]">
                    <div className="flex justify-between items-start">
                        <button className="w-[27px] h-6 fill-zinc-50"> <img src=".\..\src\assets\MenuMobile.png" alt="icone menu mobile" /></button>
                        <img id="logo" className="w-[71.56px] h-7 " src=".\..\src\assets\Logo E-Rede.png" alt="Logo E-rede" />
                        <button className="w-6 h-6"> <img src=".\..\src\assets\Carrinho.svg" alt="Botão carrinho" /></button>
                    </div>
                    <div className="relative mt-3">
                        <img id="pesquisar" className="w-[13.8px] h-4 ml-3 mt-2  absolute pointer-events-none " src=".\..\src\assets\Procurar.svg" alt="icone de pesquisa" />
                        <input className="h-8 w-[80vw] pl-8 font-inter text-px12 leading-14.5 items-center rounded" type="text" placeholder="Buscar" required />
                    </div>
                </div>
            </div>
        </>
    )
}