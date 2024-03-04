// import { useState } from "react";
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { RiArrowDownSFill } from "react-icons/ri";


export default function MeusPedidos() {
    // const[corItemNav, setCorItemNav] = useState('text-orange-500')
    const [value, setValue] = useState(0);

    const increment = () => {
        setValue(prevValue => prevValue + 1);
    };

    const decrement = () => {
        setValue(prevValue => (prevValue > 0 ? prevValue - 1 : 0));
    };

    return (
        <>
            <Header />
            <div className="hidden sm:flex sm: pt-[82px] pb-16 gap-[31px]">
                <section className=" bg-slate-100 flex flex-col items-start justify-center w-[18vw] h-36 ml-[6vw] pl-3 gap-4 rounded-lg font-inter font-semibold leading-19.36 text-px16">
                    <button className="text-left"><Link to="/meuspedidos">Meus Pedidos</Link></button>
                    <hr className="border h-px bg-stone-500 w-[15vw]" />
                    <button className="flex text-left"><Link to="/info">Minhas Informações</Link></button>
                </section>
                <section className="flex flex-col w-[58vw] h-auto pb-8 rounded-lg bg-slate-100">
                    <div className="flex justify-between mt-8 ml-11 mr-12 font-inter font-semibold text-px16 leading-19.36 text-stone-500">
                        <p>Meus pedidos</p>
                        <p>Status Meus Pedidos</p>
                    </div>
                    <hr className="w-[54.17vw] bg-stone-500 rotate-[0.15deg] items-center h-px mt-[14px] mb-5" />
                    <div className="flex justify-between items-center">
                        <div className="w-[190px] h-[70px] flex gap-[15px] justify-items-start ml-8">
                            <img className=" w-20 h-[70px] rounded-lg" src="src\assets\Pedido.png" alt="Imagem de pedido" />
                            <div className="flex flex-col justify-start">
                                <p className="w-[95px] h-[17px] text-black font-inter font-semibold text-px14 leading-16.94">Nique Air Surf</p>
                                <p className=" w-[26px] h-3 font-inter font-semibold text-px12 leading-3 text-stone-500">Tênis</p>
                                <p className="w-[61px] h-[15px] mt-1.5 text-orange-500 font-inter font-semibold text-px12 leading-14.5">R{'$'} 200,00</p>
                            </div>
                        </div>
                        <p className="flex mr-12 font-inter font-bold text-px16 leading-19.36 text-green-700">Finalizado</p>
                    </div>
                    <hr className="flex w-[54.17vw] bg-stone-500 rotate-[0.15deg] items-center h-px mt-[14px] mb-5" />
                    <div className="flex justify-between items-center">
                        <div className="w-[190px] h-[70px] flex gap-[15px] justify-items-start ml-8">
                            <img className=" w-20 h-[70px] rounded-lg" src="src\assets\Pedido.png" alt="Imagem de pedido" />
                            <div className="flex flex-col justify-start">
                                <p className="w-[95px] h-[17px] text-black font-inter font-semibold text-px14 leading-16.94">Nique Air Surf</p>
                                <p className=" w-[26px] h-3 font-inter font-semibold text-px12 leading-3 text-stone-500">Tênis</p>
                                <p className="w-[61px] h-[15px] mt-1.5 text-orange-500 font-inter font-semibold text-px12 leading-14.5">R{'$'} 200,00</p>
                            </div>
                        </div>
                        <p className=" flex  text-right mr-12 mt-10 font-inter font-bold text-px16 leading-19.36 text-red-600">Esperando Pagamento</p>
                    </div>
                </section>
            </div>

            <div className="flex flex-col rounded-lg bg-zinc-50 pt-[22px] pl-[9vw] pb-[9vw] sm:hidden ">
                <button className="flex items-center justify-center h-12 w-[75vw] mt-7 bg-orange-500 text-zinc-50 rounded-lg font-inter font-semibold text-px16 leading-19.36 sm:hidden ">Meus Pedidos</button>
                <h1 className=" mt-9 font-inter font-semibold text-px16 leading-19.36 text-stone-900 py-4 ">Meus Pedidos</h1>
                <div className="flex flex-col py-4 gap-3">
                    <div id="Detalhes pedidos" className="w-[190px] h-[70px] flex gap-[15px]">
                        <img className=" w-20 h-[70px] rounded-lg" src="src\assets\Pedido.png" alt="Imagem de pedido" />
                        <div className="flex flex-col justify-start">
                            <p className="w-[95px] h-[17px] text-black font-inter font-semibold text-px14 leading-16.94">Nique Air Surf</p>
                            <p className=" w-[26px] h-3 font-inter font-semibold text-px12 leading-3 text-stone-500">Tênis</p>
                            <p className="w-[61px] h-[15px] mt-1.5 text-black font-inter font-semibold text-px12 leading-14.5">R{'$'} 200,00</p>
                            <p className="font-inter font-semibold text-px12 leading-14.5 text-stone-500">Qtd: 01</p>
                        </div>
                    </div>
                    <div className="relative w-32">
                        <button
                            className="absolute  top-5 left-[67px] "
                            onClick={decrement}
                        >
                            <BiSolidDownArrow />
                        </button>
                        <input
                            type="text"
                            className="flex font-inter font-semibold text-px24 leading-29.05 pl-5 w-24 h-10 items-center border border-black rounded text-lg "
                            value={value}
                            onChange={e => setValue(e.target.value)}
                        />
                        <button
                            className="absolute top-1 right-[45px] "
                            onClick={increment}
                        >
                            <BiSolidUpArrow />
                        </button>
                        {/* <style>
                            {`
                            input[type='number']::-webkit-inner-spin-button {
                                width: 30px;
                                height: 50px;
                                margin: 17px;
                                padding: 5px;
                                transform: rotate(90deg);
                                filter: sepia(100%) hue-rotate(90deg);
                                cursor: pointer;
                            }`}
                        </style> */}
                    </div>
                    <div className="flex w-[78.79vw] items-center justify-between">
                        <span className="text-stone-500 font-inter font-normal text-px16 leading-19.36">Status</span>
                        <span className="text-green-700 font-inter font-normal text-px16 leading-19.36">Finalizado</span>
                    </div>
                    <hr className="flex w-[78.79vw] border-stone-900 items-center" />
                    <div className="w-[190px] h-[70px] flex gap-[15px]">
                        <img className=" w-20 h-[70px] rounded-lg" src="src\assets\Pedido.png" alt="Imagem de pedido" />
                        <div className="flex flex-col justify-start">
                            <p className="w-[95px] h-[17px] text-black font-inter font-semibold text-px14 leading-16.94">Nique Air Surf</p>
                            <p className=" w-[26px] h-3 font-inter font-semibold text-px12 leading-3 text-stone-500">Tênis</p>
                            <p className="w-[61px] h-[15px] mt-1.5 text-black font-inter font-semibold text-px12 leading-14.5">R{'$'} 200,00</p>
                            <p className="font-inter font-semibold text-px12 leading-14.5 text-stone-500">Qtd: 02</p>
                        </div>
                    </div>
                    <div className="flex w-[78.79vw] items-center justify-between">
                        <span className="text-stone-500 font-inter font-normal text-px16 leading-19.36">Status</span>
                        <span className="text-green-700 font-inter font-normal text-px16 leading-19.36">Finalizado</span>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}