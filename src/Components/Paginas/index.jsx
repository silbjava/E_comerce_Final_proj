import { Link } from "react-router-dom";

export default function Paginas() {
    return (
        <>
            <div className="flex flex-col rounded-lg bg-zinc-50 pt-[22px] pl-6">
            <h1 className=" font-inter font-semibold text-px16 leading-19.36 text-stone-900 pb-4">Páginas</h1>
            <hr className="flex w-[78.79vw] border-default border-stone-900 items-center" />
            <nav className=" flex flex-col font-inter font-semibold text-px12 leading-14.5 text-stone-500 bg-zinc-50 mb-[60px]">
                <a className="w-[78.79vw] flex rounded-lg pl-[13px] py-[13px] hover:bg-sky-700"><Link to="/">Home</Link></a>
                <a className="w-[78.79vw] flex rounded-lg pl-[13px] py-[13px] hover:bg-sky-700"><Link to="/produtos">Produtos</Link></a>
                <a className="w-[78.79vw] flex rounded-lg pl-[13px] py-[13px] hover:bg-sky-700"><Link to="/categorias">Categorias</Link></a>
                <a className="w-[78.79vw] flex rounded-lg pl-[13px] py-[13px] hover:bg-sky-700"><Link to="/meuspedidos">Meus Pedidos</Link></a>
            </nav>
            <hr className="flex w-[78.79vw] border-default border-stone-900 items-center" />
            <div className="w-[78.79vw] flex gap-[18px] justify-center mt-[11px]">
                <button className="flex w-auto h-auto items-center text-stone-500 font-inter font-semibold text-px12 leading-14.5">
                    <Link to="/cadastro">Cadastre-se</Link>
                </button>
                <button className="bg-blue-900 font-inter font-medium text-px12 leading-14.5 text-center justify-center rounded-lg text-white w-[106px] py-2" >
                    <Link to="/login">Entrar</Link>
                </button>
            </div>

            </div>
       
        </>
    )
}