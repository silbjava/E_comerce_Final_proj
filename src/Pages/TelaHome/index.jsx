import {Cards} from "./../../Components/Cards"
export default function TelaHome() {
    return (
        <>
        <div className="flex w-screen relative ">
            <img className="w-screen h-[37.5vw]" src="src\assets\CardShoes.jpg" alt="Card tênis em promoção" />
            <div className=" absolute">
                <button className="w-[5.55wv] h-16 mt-[340px] ml-[69.44vw] font-inter text-xl rounded-lg bg-orange-500 text-white font-semibold p-2.5 justify-center">
                    Aproveitar Oferta
                </button>
            </div>
        </div>
        <Cards/>
        </>
        
    )
}