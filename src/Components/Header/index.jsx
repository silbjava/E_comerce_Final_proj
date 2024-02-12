export function Header() {
    return (
        <>
            <div className="flex h-[133px] bg-blue-900 w-screen">
                <img id="logo" className="w-[81.8px] h-[32px] mt-[54px] ml-[107px]" src="src\assets\Logo E-Rede.png" alt="Logo E-rede" />
                <div className="relative items-center mt-[45px] ml-[18.83vw] focus-within:text-gray-100">
                    <img id="pesquisar" className="w-6 h-6  absolute ml-3 mt-2.5 pointer-events-none" src="src\assets\Procurar.svg" alt="icone de pesquisa" />
                    <input className="h-11 w-[520px] pl-11  text-stone-500 font-normal  font-inter" type="text" required placeholder="Buscar" />
                </div>

                <div className="flex ml-16 gap-5 mt-[47px]">
                    <button className="w-[97px] h-[19px] mt-[11px] items-center text-white font-inter text-base font-semibol">
                        Cadastre-se
                    </button>
                    <button className="w-32 h-10 rounded-lg bg-orange-500 text-zinc-50 font-inter text-base font-semibold  items-center">
                        Entrar
                    </button>
                    <button className="w-6 h-6 pt-[7px] ">
                        <img id="carrinho"  src="src\assets\Carrinho.svg" alt="icone carrinho de compras" />
                    </button>
                </div>

            </div>
            <div className="flex h-[41px] pt-[15px] text-zinc-50 font-inter text-base font-semibold bg-blue-900 w-screen">
                <nav className="flex ml-[36.11vw] h-[19px] gap-10">
                    <a>Home</a>
                    <a>Produtos</a>
                    <a>Categorias</a>
                    <a>Meus Pedidos</a>
                </nav>
            </div>
        </>


    )
}