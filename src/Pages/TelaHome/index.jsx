import { Cards } from "../../Components/Cards";
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";

export default function TelaHome() {
    return (
        <>
            <Header />
            <div className="hidden sl:flex relative w-screen">
                <img className="w-screen h-[37.5vw]" src="src\assets\CardShoes.jpg" alt="Card tênis em promoção" />

                {/* <button className="absolute w-80 h-16 mt-[340px] ml-[69.44vw] font-inter text-xl rounded-lg bg-orange-500 text-white font-semibold p-2.5 justify-center">
                    Aproveitar Oferta
                </button> */}
                 {/* <button className="flex w-40 h-10 mt-[170px] ml-[70vw] font-inter text-px16 rounded-lg bg-orange-500 text-white font-semibold items-center justify-center">
                    Aproveitar Oferta
                </button> */}
            </div>
            <div className="sl:hidden flex w-screen relative justify-center items-center ">
                <img className="w-screen h-[auto]" src="src\assets\cardmobile.png" alt="Card tênis" />
                
                    <button className="absolute flex items-center justify-center w-[276px] h-10 mt-[287px] rounded-lg bg-orange-500 text-white font-inter text-px16 leading-19.36">
                        Aproveitar Oferta
                    </button>
            </div>
            <Cards />
            <Footer />
        </>

    )
}