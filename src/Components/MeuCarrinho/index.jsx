import { Link } from "react-router-dom"

export default function MeuCarrinho() {
    return (
        <>
            <div className="flex flex-col rounded-lg bg-zinc-50 pt-[22px] pl-[9vw] pb-[9vw] h-[75vw] sm:hidden ">
                <h1 className=" font-inter font-semibold text-px16 leading-19.36 text-stone-900 py-4">Meu Carrinho</h1>
                <hr className="flex w-[78.79vw] border-default border-stone-900 items-center" />
                <div className="flex flex-col py-4 gap-3">
                    <div className="w-[190px] h-[70px] flex gap-[15px]">
                        <img className=" w-20 h-[70px] rounded-lg" src="src\assets\Pedido.png" alt="Imagem de pedido" />
                        <div className="flex flex-col justify-start">
                            <p className="w-[95px] h-[17px] text-black font-inter font-semibold text-px14 leading-16.94">Nique Air Surf</p>
                            <p className=" w-[26px] h-3 font-inter font-semibold text-px12 leading-3 text-stone-500">Tênis</p>
                            <p className="w-[61px] h-[15px] mt-1.5 text-black font-inter font-semibold text-px12 leading-14.5">R{'$'} 200,00</p>
                            <p className="font-inter font-semibold text-px12 leading-14.5 text-stone-500">Qtd: 01</p>
                        </div>
                    </div>
                    <div className="w-[190px] h-[70px] flex gap-[15px]">
                        <img className=" w-20 h-[70px] rounded-lg" src="src\assets\Pedido.png" alt="Imagem de pedido" />
                        <div className="flex flex-col justify-start">
                            <p className="w-[95px] h-[17px] text-black font-inter font-semibold text-px14 leading-16.94">Nique Air Surf</p>
                            <p className=" w-[26px] h-3 font-inter font-semibold text-px12 leading-3 text-stone-500">Tênis</p>
                            <p className="w-[61px] h-[15px] mt-1.5 text-black font-inter font-semibold text-px12 leading-14.5">R{'$'} 200,00</p>
                            <p className="font-inter font-semibold text-px12 leading-14.5 text-stone-500">Qtd: 02</p>
                        </div>
                    </div>
                </div>

                <hr className="flex w-[78.79vw] border-default border-stone-900 items-center" />
                <div className="flex py-2 gap-3 font-inter font-semibold text-px16 leading-19.36">
                    <span className=" text-black">Valor total:</span>
                    <span className="text-blue-900" >R{'$'} 440,00</span>
                </div>
                <div className="w-[78.79vw] flex gap-[7vw] justify-center mt-[11px]">
                    <button className="flex w-auto h-auto items-center text-stone-900 font-inter font-semibold text-px12 leading-14.5">
                        <Link to="/cadastro">Esvaziar</Link>
                    </button>
                    <button className="bg-blue-900 font-inter font-medium text-px12 leading-14.5 items-center justify-center rounded-lg text-white w-[40vw] h-8" >
                        <Link to="/login">Finalizar Compra</Link>
                    </button>
                </div>

            </div>
        </>
    )
}