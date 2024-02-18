import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";

export default function MeusPedidos() {
    return (
        <>
        <Header/>
            <div className="flex mt-[82px] gap-[31px]">
                <section className=" bg-slate-100 flex flex-col w-[251px] h-[134px] ml-[82px] mt-[82px] pl-[26px] pt-8 gap-4 rounded-lg">
                    <button className="w-[109px] h-[19px] items-center text-orange-500 font-inter font-semibold leading-19.36 text-px16">Meus pedidos</button>
                    <hr className="flex text-stone-500 border bg-stone-500 w-[207px] h-px" />
                    <button className="w-[157px] h-[19px] items-center text-stone-500 font-inter font-semibold leading-19.36 text-px16">Minhas Informações</button>
                </section>
                <section className="flex flex-col w-[59.16vw] h-[300px] rounded-lg bg-slate-100">
                    <div className="flex justify-between mt-8 ml-11 mr-12 font-inter font-semibold text-px16 leading-19.36 text-stone-500">
                        <p>Meus pedidos</p>
                        <p>Status Meus Pedidos</p>
                    </div>
                    <hr className="w-[54.17vw] bg-stone-500 rotate-[0.15deg] items-center h-px mt-[14px] mb-5" />
                    <div className="flex justify-between">
                        <div className="w-[190px] h-[70px] flex gap-[15px] justify-items-start ml-11">
                            <img className=" w-20 h-[70px] rounded-lg" src="src\assets\Pedido.png" alt="Imagem de pedido" />
                            <div className="flex flex-col justify-start">
                                <p className="w-[95px] h-[17px] text-black font-inter font-semibold text-px14 leading-16.94">Nique Air Surf</p>
                                <p className=" w-[26px] h-3 font-inter font-semibold text-px12 leading-3 text-stone-500">Tênis</p>
                                <p className="w-[61px] h-[15px] mt-1.5 text-orange-500 font-inter font-semibold text-px12 leading-14.5">R{'$'} 200,00</p>
                            </div>
                        </div>
                        <p className="flex mt-10 mr-12 font-inter font-bold text-px16 leading-19.36 text-green-700">Finalizado</p>
                    </div>
                    <hr className="flex w-[54.17vw] bg-stone-500 rotate-[0.15deg] items-center h-px mt-[14px] mb-5" />
                    <div className="flex justify-between">
                        <div className="w-[190px] h-[70px] flex gap-[15px] justify-items-start ml-11">
                            <img className=" w-20 h-[70px] rounded-lg" src="src\assets\Pedido.png" alt="Imagem de pedido" />
                            <div className="flex flex-col justify-start">
                                <p className="w-[95px] h-[17px] text-black font-inter font-semibold text-px14 leading-16.94">Nique Air Surf</p>
                                <p className=" w-[26px] h-3 font-inter font-semibold text-px12 leading-3 text-stone-500">Tênis</p>
                                <p className="w-[61px] h-[15px] mt-1.5 text-orange-500 font-inter font-semibold text-px12 leading-14.5">R{'$'} 200,00</p>
                            </div>
                        </div>
                        <p className="flex mr-12 mt-10 font-inter font-bold text-px16 leading-19.36 text-red-600">Esperando Pagamento</p>
                    </div>
                </section>
            </div>
            <Footer/>
        </>
    )
}