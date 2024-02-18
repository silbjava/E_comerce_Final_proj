import { Cards } from "../../Components/Cards";
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";

export default function TelaHome() {
    return (
        <>
        <Header/>
            <div className=" max-[321px]:hidden flex w-screen relative">
                <img className="w-screen h-[37.5vw]" src="src\assets\CardShoes.jpg" alt="Card tênis em promoção" />
                <div className=" absolute">
                    <button className="w-80 h-16 mt-[340px] ml-[69.44vw] font-inter text-xl rounded-lg bg-orange-500 text-white font-semibold p-2.5 justify-center">
                        Aproveitar Oferta
                    </button>
                </div>
            </div>
            <div className=" sl:hidden flex w-screen relative">
                <img className="w-screen h-[354px]" src="src\assets\cardmobile.png" alt="Card tênis" />
                <div className=" absolute w-screen">
                    <button className="w-[276px] h-10 rounded-lg bg-orange-500 text-white font-inter text-px16 leading-19.36">
                        Aproveitar Oferta
                    </button>
                </div>
            </div>
            <Cards />
            <Footer/>
        </>

    )
}