import { Cards } from "../../Components/Cards";
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";

export default function TelaHome() {
    return (
        <>
            <Header />
            <div className="hidden sm:flex relative w-screen">
                <img className="w-screen h-[37.5vw]" src="src\assets\CardShoes.jpg" alt="Card tênis em promoção" />

                <button className="absolute w-[25vw] h-[6vw] top-[24vw] right-[5vw] font-inter lg:leading-24.2 lg:text-xl lg:font-semibold md:text-px18 md:font-medium sm:text-px14 sm:font-light rounded-lg bg-orange-500 text-white justify-center">
                    Aproveitar Oferta
                </button>
            </div>
            <div className=" sm:hidden flex w-screen relative justify-center items-center ">
                <img className="w-screen h-[auto]" src="src\assets\cardmobile.png" alt="Card tênis" />
                
                    <button className="absolute flex items-center justify-center w-[80vw] h-10 mt-[88vw] rounded-lg bg-orange-500 text-white font-inter text-px16 leading-19.36">
                        Aproveitar Oferta
                    </button>
            </div>
            <Cards />
            <Footer />
        </>

    )
}