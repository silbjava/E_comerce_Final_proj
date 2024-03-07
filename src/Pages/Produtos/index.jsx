
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Produtos() {
    const [color, setColor] = useState('black');
    const [activeDiv, setActiveDiv] = useState(null);

    const toggleDiv = (div) => {
        setActiveDiv(div === activeDiv ? null : div);
    };


    return (
        <>
            <Header />
            <section className="flex flex-col items-center sm:flex-row sm:items-start gap-[6vw] pl-[6vw] pb-5 sm:pb-[18vh] pt-[6vw]">
                <div className="hidden sm:flex bg-zinc-50 sm:w-[300px] pt-[3vw] pl-[2vw] border rounded-lg shadow-card pb-3">
                    <div className="flex flex-col font-inter font-semibold text-px16 leading-19.36 sm:gap-4 md:gap-5 lg:gap-7">

                        <div className="flex gap-1">
                            <input className=" accent-orange-500" type="radio" id="tênis" name="Produtos" value="Tènis" />
                            <label onClick={() => toggleDiv('Tênis')} htmlFor="tênis" >Tênis</label>
                        </div>
                        <div className="flex gap-1" >
                            <input className=" accent-orange-500" type="radio" id="blusa" name="Produtos" value="Blusa" />
                            <label onClick={() => toggleDiv('Blusa')} htmlFor="blusa">Blusa</label>
                        </div>
                        <div className="flex gap-1">
                            <input className=" accent-orange-500" type="radio" id="acessorios" name="Produtos" value="Acessórios" />
                            <label htmlFor="acessorios" >Acessórios</label>
                        </div>
                        <div className="flex gap-1">
                            <input className=" accent-orange-500" type="radio" id="calças" name="Produtos" value="Calças" />
                            <label htmlFor="calças" >Calças</label>
                        </div>
                    </div>
                </div>
                <button className="flex items-center justify-center h-12 w-[75vw] mt-7 bg-orange-500 text-zinc-50 rounded-lg font-inter font-semibold text-px16 leading-19.36 sm:hidden "> Tênis</button>
                <section className={activeDiv == 'Tênis' ? 'block' : 'hidden'}>
                    <div className="flex justify-center sm:justify-normal flex-wrap mt-[26px] gap-4 ">
                        <div id="Card produto" className="flex flex-col pb-3 shadow-card">
                            <img className="w-28 h-24 sm:w-[145px] sm:h-[110px]  rounded" src="src\assets\SmartWatch.png" alt="Card do SmartWatch" />
                            <div className=" pl-3">
                                <p className="h-6 mt-[9px] text-blue-900 font-inter font-bold text-px18 leading-21.7 sm:text-xl sm:leading-24.2">Logan newWatch</p>
                                <p className="w-[31px] h-[15px] mt-[3px] font-inter font-medium text-px12 leading-14.5 text-[#DDDDDD]"> SmartWatch</p>
                                <p className="w-[92px] h-[22px] mt-[3px] text-orange-500 font-inter font-semibold text-px16 leading-19.36 sm:text-px18 leading-21.7">R{'$'} 110,00</p>
                                <Link to={'/produtos/1'} ><button className="flex w-[75px] h-5 sm:h-6 mt-2.5  rounded bg-blue-900 text-white font-inter font-medium text-px12 leading-14.5 items-center justify-center">Detalhes</button></Link>
                            </div>
                        </div>
                        <div id="Card produto" className="flex flex-col pb-3 shadow-card">
                            <img className="w-36 h-24 sm:w-[176px] sm:h-[134px]  rounded" src="src\assets\NiqueAirSurf.png" alt="Card do tênis Niquel Air surf" />
                            <div className=" pl-3">
                                <p className="h-6 mt-[9px] text-blue-900 font-inter font-bold text-px18 leading-21.7 sm:text-xl sm:leading-24.2">Nique Air Surf</p>
                                <p className="w-[31px] h-[15px] mt-[3px] font-inter font-medium text-px12 leading-14.5 text-[#DDDDDD]">Tênis</p>
                                <p className="w-[92px] h-[22px] mt-[3px] text-orange-500 font-inter font-semibold text-px16 leading-19.36 sm:text-px18 leading-21.7">R{'$'} 200,00</p>
                                <button className="flex w-[75px] h-5 sm:h-6 mt-2.5  rounded bg-blue-900 text-white font-inter font-medium text-px12 leading-14.5 items-center justify-center">Detalhes</button>
                            </div>
                        </div>
                        <div id="Card produto" className="flex flex-col pb-3 shadow-card">
                            <img className="w-36 h-24 sm:w-[176px] sm:h-[134px]  rounded" src="src\assets\NiqueAirSurf.png" alt="Card do tênis Niquel Air surf" />
                            <div className=" pl-3">
                                <p className="h-6 mt-[9px] text-blue-900 font-inter font-bold text-px18 leading-21.7 sm:text-xl sm:leading-24.2">Nique Air Surf</p>
                                <p className="w-[31px] h-[15px] mt-[3px] font-inter font-medium text-px12 leading-14.5 text-[#DDDDDD]">Tênis</p>
                                <p className="w-[92px] h-[22px] mt-[3px] text-orange-500 font-inter font-semibold text-px16 leading-19.36 sm:text-px18 leading-21.7">R{'$'} 200,00</p>
                                <button className="flex w-[75px] h-5 sm:h-6 mt-2.5  rounded bg-blue-900 text-white font-inter font-medium text-px12 leading-14.5 items-center justify-center">Detalhes</button>
                            </div>
                        </div>
                        <div id="Card produto" className="flex flex-col pb-3 shadow-card">
                            <img className="w-36 h-24 sm:w-[176px] sm:h-[134px]  rounded" src="src\assets\NiqueAirSurf.png" alt="Card do tênis Niquel Air surf" />
                            <div className=" pl-3">
                                <p className="h-6 mt-[9px] text-blue-900 font-inter font-bold text-px18 leading-21.7 sm:text-xl sm:leading-24.2">Nique Air Surf</p>
                                <p className="w-[31px] h-[15px] mt-[3px] font-inter font-medium text-px12 leading-14.5 text-[#DDDDDD]">Tênis</p>
                                <p className="w-[92px] h-[22px] mt-[3px] text-orange-500 font-inter font-semibold text-px16 leading-19.36 sm:text-px18 leading-21.7">R{'$'} 200,00</p>
                                <button className="flex w-[75px] h-5 sm:h-6 mt-2.5  rounded bg-blue-900 text-white font-inter font-medium text-px12 leading-14.5 items-center justify-center">Detalhes</button>
                            </div>
                        </div>
                        <div id="Card produto" className="hidden sm:flex flex-col pb-3 shadow-card">
                            <img className="w-36 h-24 sm:w-[176px] sm:h-[134px]  rounded" src="src\assets\NiqueAirSurf.png" alt="Card do tênis Niquel Air surf" />
                            <div className=" pl-3">
                                <p className="h-6 mt-[9px] text-blue-900 font-inter font-bold text-px18 leading-21.7 sm:text-xl sm:leading-24.2">Nique Air Surf</p>
                                <p className="w-[31px] h-[15px] mt-[3px] font-inter font-medium text-px12 leading-14.5 text-[#DDDDDD]">Tênis</p>
                                <p className="w-[92px] h-[22px] mt-[3px] text-orange-500 font-inter font-semibold text-px16 leading-19.36 sm:text-px18 leading-21.7">R{'$'} 200,00</p>
                                <button className="flex w-[75px] h-5 sm:h-6 mt-2.5  rounded bg-blue-900 text-white font-inter font-medium text-px12 leading-14.5 items-center justify-center">Detalhes</button>
                            </div>
                        </div>
                        <div id="Card produto" className="hidden sm:flex flex-col pb-3 shadow-card">
                            <img className="w-36 h-24 sm:w-[176px] sm:h-[134px]  rounded" src="src\assets\NiqueAirSurf.png" alt="Card do tênis Niquel Air surf" />
                            <div className=" pl-3">
                                <p className="h-6 mt-[9px] text-blue-900 font-inter font-bold text-px18 leading-21.7 sm:text-xl sm:leading-24.2">Nique Air Surf</p>
                                <p className="w-[31px] h-[15px] mt-[3px] font-inter font-medium text-px12 leading-14.5 text-[#DDDDDD]">Tênis</p>
                                <p className="w-[92px] h-[22px] mt-[3px] text-orange-500 font-inter font-semibold text-px16 leading-19.36 sm:text-px18 leading-21.7">R{'$'} 200,00</p>
                                <button className="flex w-[75px] h-5 sm:h-6 mt-2.5  rounded bg-blue-900 text-white font-inter font-medium text-px12 leading-14.5 items-center justify-center">Detalhes</button>
                            </div>
                        </div>
                        <div id="Card produto" className="hidden sm:flex flex-col pb-3 shadow-card">
                            <img className="w-36 h-24 sm:w-[176px] sm:h-[134px]  rounded" src="src\assets\NiqueAirSurf.png" alt="Card do tênis Niquel Air surf" />
                            <div className=" pl-3">
                                <p className="h-6 mt-[9px] text-blue-900 font-inter font-bold text-px18 leading-21.7 sm:text-xl sm:leading-24.2">Nique Air Surf</p>
                                <p className="w-[31px] h-[15px] mt-[3px] font-inter font-medium text-px12 leading-14.5 text-[#DDDDDD]">Tênis</p>
                                <p className="w-[92px] h-[22px] mt-[3px] text-orange-500 font-inter font-semibold text-px16 leading-19.36 sm:text-px18 leading-21.7">R{'$'} 200,00</p>
                                <button className="flex w-[75px] h-5 sm:h-6 mt-2.5  rounded bg-blue-900 text-white font-inter font-medium text-px12 leading-14.5 items-center justify-center">Detalhes</button>
                            </div>
                        </div>
                        <div id="Card produto" className="hidden sm:flex flex-col pb-3 shadow-card">
                            <img className="w-36 h-24 sm:w-[176px] sm:h-[134px]  rounded" src="src\assets\NiqueAirSurf.png" alt="Card do tênis Niquel Air surf" />
                            <div className=" pl-3">
                                <p className="h-6 mt-[9px] text-blue-900 font-inter font-bold text-px18 leading-21.7 sm:text-xl sm:leading-24.2">Nique Air Surf</p>
                                <p className="w-[31px] h-[15px] mt-[3px] font-inter font-medium text-px12 leading-14.5 text-[#DDDDDD]">Tênis</p>
                                <p className="w-[92px] h-[22px] mt-[3px] text-orange-500 font-inter font-semibold text-px16 leading-19.36 sm:text-px18 leading-21.7">R{'$'} 200,00</p>
                                <button className="flex w-[75px] h-5 sm:h-6 mt-2.5  rounded bg-blue-900 text-white font-inter font-medium text-px12 leading-14.5 items-center justify-center">Detalhes</button>
                            </div>
                        </div>
                    </div>

                </section>
            </section>
            <Footer />
        </>
    )
}