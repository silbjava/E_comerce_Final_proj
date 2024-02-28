
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { NavLink } from "react-router-dom";

export default function Produtos() {
    const navLinkStyle = ({isActive}) => {
        return(
            isActive ? 'list-image-elipseCol' : 'list-image-elipse'
        )
    }
    return (
        <>
            <Header />
            <section className="hidden sm:flex w-auto h-auto gap-[6vw] pl-[6vw] pb-[18vh] pt-[6vw]">
                <div className=" flex w-[18vw] h-[19vw] pt-[3vw] pl-[2vw] border rounded-lg bg-zinc-50 shadow-card">
                    <ul className="flex flex-col font-inter font-semibold text-px16 leading-19.36 gap-8">
                        <li><NavLink style={navLinkStyle} to='/tenis'>Tênis</NavLink></li>
                        <li>Blusa</li>
                        <li>Acessórios</li>
                        <li>Calças</li>
                    </ul>
                </div>
                <div className=" grid grid-cols-4 mt-[26px]">
                    <div id="Card produto" className="flex-col w-[176px] h-[257px] shadow-card">
                        <img className="w-[176px] h-[134px]  rounded" src="src\assets\NiqueAirSurf.png" alt="Card do tênis Niquel Air surf" />
                        <p className="w-[138px] h-6 mt-[9px] text-blue-900 font-inter font-bold text-xl leading-24.2">Nique Air Surf</p>
                        <p className="w-[31px] h-[15px] mt-[3px] font-inter text-[#DDDDDD]">Tênis</p>
                        <p className="w-[92px] h-[22px] mt-[3px] text-orange-500 font-inter font-semibold text-px18">R{'$'} 200,00</p>
                        <button className="w-[75px] h-6 mt-2.5 flex rounded bg-blue-900 text-white font-inter font-medium text-px12 leading-14.5 items-center justify-center">Detalhes</button>
                    </div>
                    <div id="Card produto" className="flex-col w-[176px] h-[257px] shadow-card">
                        <img className="w-[176px] h-[134px]  rounded" src="src\assets\NiqueAirSurf.png" alt="Card do tênis Niquel Air surf" />
                        <p className="w-[138px] h-6 mt-[9px] text-blue-900 font-inter font-bold text-xl leading-24.2">Nique Air Surf</p>
                        <p className="w-[31px] h-[15px] mt-[3px] font-inter text-[#DDDDDD]">Tênis</p>
                        <p className="w-[92px] h-[22px] mt-[3px] text-orange-500 font-inter font-semibold text-px18">R{'$'} 200,00</p>
                        <button className="w-[75px] h-6 mt-2.5 flex rounded bg-blue-900 text-white font-inter font-medium text-px12 leading-14.5 items-center justify-center">Detalhes</button>
                    </div>
                    <div id="Card produto" className="flex-col w-[176px] h-[257px] shadow-card">
                        <img className="w-[176px] h-[134px]  rounded" src="src\assets\NiqueAirSurf.png" alt="Card do tênis Niquel Air surf" />
                        <p className="w-[138px] h-6 mt-[9px] text-blue-900 font-inter font-bold text-xl leading-24.2">Nique Air Surf</p>
                        <p className="w-[31px] h-[15px] mt-[3px] font-inter text-[#DDDDDD]">Tênis</p>
                        <p className="w-[92px] h-[22px] mt-[3px] text-orange-500 font-inter font-semibold text-px18">R{'$'} 200,00</p>
                        <button className="w-[75px] h-6 mt-2.5 flex rounded bg-blue-900 text-white font-inter font-medium text-px12 leading-14.5 items-center justify-center">Detalhes</button>
                    </div>
                    <div id="Card produto" className="flex-col w-[176px] h-[257px] shadow-card">
                        <img className="w-[176px] h-[134px]  rounded" src="src\assets\NiqueAirSurf.png" alt="Card do tênis Niquel Air surf" />
                        <p className="w-[138px] h-6 mt-[9px] text-blue-900 font-inter font-bold text-xl leading-24.2">Nique Air Surf</p>
                        <p className="w-[31px] h-[15px] mt-[3px] font-inter text-[#DDDDDD]">Tênis</p>
                        <p className="w-[92px] h-[22px] mt-[3px] text-orange-500 font-inter font-semibold text-px18">R{'$'} 200,00</p>
                        <button className="w-[75px] h-6 mt-2.5 flex rounded bg-blue-900 text-white font-inter font-medium text-px12 leading-14.5 items-center justify-center">Detalhes</button>
                    </div>
                    <div id="Card produto" className="flex-col w-[176px] h-[257px] shadow-card">
                        <img className="w-[176px] h-[134px]  rounded" src="src\assets\NiqueAirSurf.png" alt="Card do tênis Niquel Air surf" />
                        <p className="w-[138px] h-6 mt-[9px] text-blue-900 font-inter font-bold text-xl leading-24.2">Nique Air Surf</p>
                        <p className="w-[31px] h-[15px] mt-[3px] font-inter text-[#DDDDDD]">Tênis</p>
                        <p className="w-[92px] h-[22px] mt-[3px] text-orange-500 font-inter font-semibold text-px18">R{'$'} 200,00</p>
                        <button className="w-[75px] h-6 mt-2.5 flex rounded bg-blue-900 text-white font-inter font-medium text-px12 leading-14.5 items-center justify-center">Detalhes</button>
                    </div>
                    <div id="Card produto" className="flex-col w-[176px] h-[257px] shadow-card">
                        <img className="w-[176px] h-[134px]  rounded" src="src\assets\NiqueAirSurf.png" alt="Card do tênis Niquel Air surf" />
                        <p className="w-[138px] h-6 mt-[9px] text-blue-900 font-inter font-bold text-xl leading-24.2">Nique Air Surf</p>
                        <p className="w-[31px] h-[15px] mt-[3px] font-inter text-[#DDDDDD]">Tênis</p>
                        <p className="w-[92px] h-[22px] mt-[3px] text-orange-500 font-inter font-semibold text-px18">R{'$'} 200,00</p>
                        <button className="w-[75px] h-6 mt-2.5 flex rounded bg-blue-900 text-white font-inter font-medium text-px12 leading-14.5 items-center justify-center">Detalhes</button>
                    </div>
                    <div id="Card produto" className="flex-col w-[176px] h-[257px] shadow-card">
                        <img className="w-[176px] h-[134px]  rounded" src="src\assets\NiqueAirSurf.png" alt="Card do tênis Niquel Air surf" />
                        <p className="w-[138px] h-6 mt-[9px] text-blue-900 font-inter font-bold text-xl leading-24.2">Nique Air Surf</p>
                        <p className="w-[31px] h-[15px] mt-[3px] font-inter text-[#DDDDDD]">Tênis</p>
                        <p className="w-[92px] h-[22px] mt-[3px] text-orange-500 font-inter font-semibold text-px18">R{'$'} 200,00</p>
                        <button className="w-[75px] h-6 mt-2.5 flex rounded bg-blue-900 text-white font-inter font-medium text-px12 leading-14.5 items-center justify-center">Detalhes</button>
                    </div>
                    <div id="Card produto" className="flex-col w-[176px] h-[257px] shadow-card">
                        <img className="w-[176px] h-[134px]  rounded" src="src\assets\NiqueAirSurf.png" alt="Card do tênis Niquel Air surf" />
                        <p className="w-[138px] h-6 mt-[9px] text-blue-900 font-inter font-bold text-xl leading-24.2">Nique Air Surf</p>
                        <p className="w-[31px] h-[15px] mt-[3px] font-inter text-[#DDDDDD]">Tênis</p>
                        <p className="w-[92px] h-[22px] mt-[3px] text-orange-500 font-inter font-semibold text-px18">R{'$'} 200,00</p>
                        <button className="w-[75px] h-6 mt-2.5 flex rounded bg-blue-900 text-white font-inter font-medium text-px12 leading-14.5 items-center justify-center">Detalhes</button>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}