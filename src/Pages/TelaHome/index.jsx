export default function TelaHome() {
    return (
        <div className="flex">
            <img className="w-screen h-[540px]" src="src\assets\CardShoes.jpg" alt="Card tênis em promoção" />
            <div className="absolute">
                <button className="relative w-80 h-16 mt-[340px]  ml-[69.44vw] font-inter text-xl rounded-lg bg-orange-500 text-white font-semibold p-2.5 justify-center">
                    Aproveitar Oferta
                </button>
            </div>
        </div>
    )
}