export function Header() {
    return (
        <>
            <div className="flex h-[133px] bg-blue-900 w-screen ">
                <img id="logo" className="w-[81.8px] h-[30px] mt-[54px] ml-[107px]" src="src\assets\Logo E-Rede.png" alt="Logo E-rede" />
                <div className="relative">
                    <img id="pesquisar" src="src\assets\Procurar.svg" alt="icone de pesquisa" />
                    <input className="h-11 w-[520px] mt-[45px] ml-[271.2px]" type="text" required placeholder="Buscar" />
                </div>

                <nav className="flex gap-5">
                    <button className=" text-white font-inter text-base font-semibold ">
                    Cadastre-se
                    </button>
                    <button className=" w-32 h-10 rounded-lg bg-orange-500 text-zinc-50 font-inter text-base font-semibold ">
                        Entrar
                    </button>
                    <img id="carrinho" className="w-6 h-6" src="src\assets\Carrinho.svg" alt="icone carrinho de compras" />
                </nav>

            </div>
            <div className="h-[41px] pt-[15px] text-zinc-50 font-inter text-base font-semibold bg-blue-900 w-screen">
                <nav className="flex h-[19px] pl-[520px] gap-10">
                    <a>Home</a>
                    <a>Produtos</a>
                    <a>Categorias</a>
                    <a>Meus Pedidos</a>
                </nav>
            </div>
        </>


    )
}