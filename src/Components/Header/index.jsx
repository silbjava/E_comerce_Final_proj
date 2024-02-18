import { Link } from "react-router-dom";

export function Header() {
    return (
        <>
            <div className="flex h-[133px] bg-blue-900 w-screen">
                <div className="max-[321px]:hidden flex">
                    <img id="logo" className="w-[81.8px] h-8 mt-[54px] ml-[7.43vw] mr-[18.83vw]" src="src\assets\Logo E-Rede.png" alt="Logo E-rede" />
                    <div className="relative items-center mt-[45px] mr-[4.44vw]">
                        <img id="pesquisar" className="w-6 sh-6  absolute ml-3 mt-2.5 pointer-events-none " src="src\assets\Procurar.svg" alt="icone de pesquisa" />
                        <input className="h-11 w-[36.11vw] pl-11 text-stone-500 font-normal  font-inter" type="text" placeholder="Buscar" required />
                    </div>
                </div>


                <div className=" w-screen h-[137px] sl:hidden">
                    <div className="w-[258px] h-[69.18px] rounded">
                        <div className="flex justify-between items-start">
                            <button className="w-[27px] h-6 fill-zinc-50"> <img src="src\assets\MenuMobile.png" alt="icone menu mobile" /></button>
                            <img id="logo" className="w-[71.56px] h-7 " src="src\assets\Logo E-Rede.png" alt="Logo E-rede" />
                            <button className="w-6 h-6"> <img src="src\assets\Carrinho.svg" alt="Botão carrinho" /></button>
                        </div>
                    </div>
                </div>

                <div className="max-[321px]:hidden flex gap-5 mt-[47px]">
                    <button className="w-[97px] h-[19px] mt-[11px] items-center text-white font-inter text-base font-semibol">
                        <Link to="/cadastro">Cadastre-se</Link>
                    </button>
                    <button className="w-32 h-10 rounded-lg bg-orange-500 text-zinc-50 font-inter text-base font-semibold  items-center">
                        Entrar
                    </button>
                    <button className="w-6 h-6 pt-[7px] ">
                        <img id="carrinho" src="src\assets\Carrinho.svg" alt="icone carrinho de compras" />
                    </button>
                </div>

            </div>
            <div className=" max-[321px]:hidden flex h-[41px] pt-[15px] text-zinc-50 font-inter text-base font-semibold bg-blue-900 w-screen">
                <nav className=" flex ml-[36.11vw] h-[19px] gap-10">
                    <a><Link to="/">Home</Link></a>
                    <a><Link to="/produtos">Produtos</Link></a>
                    <a><Link to="/categorias">Categorias</Link></a>
                    <a><Link to="/meuspedidos">Meus Pedidos</Link></a>
                </nav>
            </div>
        </>


    )
}