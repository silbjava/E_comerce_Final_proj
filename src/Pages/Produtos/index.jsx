
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { NavLink } from "react-router-dom";

export default function Produtos() {
    const navLinkStyle = ({ isActive }) => {
        return (
            isActive ? 'list-image-elipseCol' : 'list-image-elipse'
        )
    }
    return (
        <>
            <Header />
            <section className="flex items-start gap-[6vw] pl-[6vw] pb-[18vh] pt-[6vw]">
                <div className=" flex sm:w-[40vw] xl:w-[20vw] lg:w-[34vw] pt-[3vw] pl-[2vw] border rounded-lg bg-zinc-50 shadow-card pb-3">
                    <div className="flex flex-col font-inter font-semibold text-px16 leading-19.36 gap-8">
                        <div className="flex gap-1">
                            <input className=" accent-orange-500" type="radio" id="tênis" name="Produtos"  value="Tènis" checked />
                            <label for="tênis">Tênis</label>
                        </div>
                        <div className="flex gap-1" >
                            <input className=" accent-orange-500" type="radio" id="blusa" name="Produtos" value="Blusa" checked />
                            <label for="blusa">Blusa</label>
                        </div>
                        <div className="flex gap-1">
                            <input className=" accent-orange-500" type="radio" id="acessorios" name="Produtos" value="Acessórios" checked />
                            <label for="acessorios">Acessórios</label>
                        </div>
                        <div className="flex gap-1">
                            <input className=" accent-orange-500" type="radio" id="calças" name="Produtos" value="Calças" checked />
                            <label for="calças">Calças</label>
                        </div>
                    </div>
                </div>
                <div className=" flex flex-wrap mt-[26px] gap-4">
                    <div id="Card produto" className="flex-col w-[176px] h-[257px] shadow-card">
                        <img className="w-[176px] h-[134px]  rounded" src="src\assets\NiqueAirSurf.png" alt="Card do tênis Niquel Air surf" />
                        <div className=" pl-3">
                            <p className="h-6 mt-[9px] text-blue-900 font-inter font-bold text-xl leading-24.2">Nique Air Surf</p>
                            <p className="w-[31px] h-[15px] mt-[3px] font-inter text-[#DDDDDD]">Tênis</p>
                            <p className="w-[92px] h-[22px] mt-[3px] text-orange-500 font-inter font-semibold text-px18">R{'$'} 200,00</p>
                            <button className="w-[75px] h-6 mt-2.5 flex rounded bg-blue-900 text-white font-inter font-medium text-px12 leading-14.5 items-center justify-center">Detalhes</button>
                        </div>
                    </div>
                    <div id="Card produto" className="flex-col w-[176px] h-[257px] shadow-card">
                        <img className="w-[176px] h-[134px]  rounded" src="src\assets\NiqueAirSurf.png" alt="Card do tênis Niquel Air surf" />
                        <div className=" pl-3">
                            <p className="h-6 mt-[9px] text-blue-900 font-inter font-bold text-xl leading-24.2">Nique Air Surf</p>
                            <p className="w-[31px] h-[15px] mt-[3px] font-inter text-[#DDDDDD]">Tênis</p>
                            <p className="w-[92px] h-[22px] mt-[3px] text-orange-500 font-inter font-semibold text-px18">R{'$'} 200,00</p>
                            <button className="w-[75px] h-6 mt-2.5 flex rounded bg-blue-900 text-white font-inter font-medium text-px12 leading-14.5 items-center justify-center">Detalhes</button>
                        </div>
                    </div>
                    <div id="Card produto" className="flex-col w-[176px] h-[257px] shadow-card">
                        <img className="w-[176px] h-[134px]  rounded" src="src\assets\NiqueAirSurf.png" alt="Card do tênis Niquel Air surf" />
                        <div className=" pl-3">
                            <p className="h-6 mt-[9px] text-blue-900 font-inter font-bold text-xl leading-24.2">Nique Air Surf</p>
                            <p className="w-[31px] h-[15px] mt-[3px] font-inter text-[#DDDDDD]">Tênis</p>
                            <p className="w-[92px] h-[22px] mt-[3px] text-orange-500 font-inter font-semibold text-px18">R{'$'} 200,00</p>
                            <button className="w-[75px] h-6 mt-2.5 flex rounded bg-blue-900 text-white font-inter font-medium text-px12 leading-14.5 items-center justify-center">Detalhes</button>
                        </div>
                    </div>
                    <div id="Card produto" className="flex-col w-[176px] h-[257px] shadow-card">
                        <img className="w-[176px] h-[134px]  rounded" src="src\assets\NiqueAirSurf.png" alt="Card do tênis Niquel Air surf" />
                        <div className=" pl-3">
                            <p className="h-6 mt-[9px] text-blue-900 font-inter font-bold text-xl leading-24.2">Nique Air Surf</p>
                            <p className="w-[31px] h-[15px] mt-[3px] font-inter text-[#DDDDDD]">Tênis</p>
                            <p className="w-[92px] h-[22px] mt-[3px] text-orange-500 font-inter font-semibold text-px18">R{'$'} 200,00</p>
                            <button className="w-[75px] h-6 mt-2.5 flex rounded bg-blue-900 text-white font-inter font-medium text-px12 leading-14.5 items-center justify-center">Detalhes</button>
                        </div>
                    </div>
                    <div id="Card produto" className="flex-col w-[176px] h-[257px] shadow-card">
                        <img className="w-[176px] h-[134px]  rounded" src="src\assets\NiqueAirSurf.png" alt="Card do tênis Niquel Air surf" />
                        <div className=" pl-3">
                            <p className="h-6 mt-[9px] text-blue-900 font-inter font-bold text-xl leading-24.2">Nique Air Surf</p>
                            <p className="w-[31px] h-[15px] mt-[3px] font-inter text-[#DDDDDD]">Tênis</p>
                            <p className="w-[92px] h-[22px] mt-[3px] text-orange-500 font-inter font-semibold text-px18">R{'$'} 200,00</p>
                            <button className="w-[75px] h-6 mt-2.5 flex rounded bg-blue-900 text-white font-inter font-medium text-px12 leading-14.5 items-center justify-center">Detalhes</button>
                        </div>
                    </div>
                    <div id="Card produto" className="flex-col w-[176px] h-[257px] shadow-card">
                        <img className="w-[176px] h-[134px]  rounded" src="src\assets\NiqueAirSurf.png" alt="Card do tênis Niquel Air surf" />
                        <div className=" pl-3">
                            <p className="h-6 mt-[9px] text-blue-900 font-inter font-bold text-xl leading-24.2">Nique Air Surf</p>
                            <p className="w-[31px] h-[15px] mt-[3px] font-inter text-[#DDDDDD]">Tênis</p>
                            <p className="w-[92px] h-[22px] mt-[3px] text-orange-500 font-inter font-semibold text-px18">R{'$'} 200,00</p>
                            <button className="w-[75px] h-6 mt-2.5 flex rounded bg-blue-900 text-white font-inter font-medium text-px12 leading-14.5 items-center justify-center">Detalhes</button>
                        </div>
                    </div>
                    <div id="Card produto" className="flex-col w-[176px] h-[257px] shadow-card">
                        <img className="w-[176px] h-[134px]  rounded" src="src\assets\NiqueAirSurf.png" alt="Card do tênis Niquel Air surf" />
                        <div className=" pl-3">
                            <p className="h-6 mt-[9px] text-blue-900 font-inter font-bold text-xl leading-24.2">Nique Air Surf</p>
                            <p className="w-[31px] h-[15px] mt-[3px] font-inter text-[#DDDDDD]">Tênis</p>
                            <p className="w-[92px] h-[22px] mt-[3px] text-orange-500 font-inter font-semibold text-px18">R{'$'} 200,00</p>
                            <button className="w-[75px] h-6 mt-2.5 flex rounded bg-blue-900 text-white font-inter font-medium text-px12 leading-14.5 items-center justify-center">Detalhes</button>
                        </div>
                    </div>
                    <div id="Card produto" className="flex-col w-[176px] h-[257px] shadow-card">
                        <img className="w-[176px] h-[134px]  rounded" src="src\assets\NiqueAirSurf.png" alt="Card do tênis Niquel Air surf" />
                        <div className=" pl-3">
                            <p className="h-6 mt-[9px] text-blue-900 font-inter font-bold text-xl leading-24.2">Nique Air Surf</p>
                            <p className="w-[31px] h-[15px] mt-[3px] font-inter text-[#DDDDDD]">Tênis</p>
                            <p className="w-[92px] h-[22px] mt-[3px] text-orange-500 font-inter font-semibold text-px18">R{'$'} 200,00</p>
                            <button className="w-[75px] h-6 mt-2.5 flex rounded bg-blue-900 text-white font-inter font-medium text-px12 leading-14.5 items-center justify-center">Detalhes</button>
                        </div>
                    </div>

                </div>
            </section>
            <Footer />
        </>
    )
}