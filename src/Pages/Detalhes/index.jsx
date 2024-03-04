import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";

export default function Detalhes() {
  
    return (
        <>
            <Header />
            <section className="flex flex-col items-center sm:flex-row sm:items-start sm:pl-[18vw] pt-[9vw] pb-[12vw] sm:pr-[10vw] gap-[5vw]">
                <div className="flex flex-col">
                    <img className="hidden sl:flex w-[18vw] h-[20vw]" src="./../src/assets/SmartWatch.png" alt="smartwatch" />
                    <p className="font-inter font-semibold text-px14 text-blue-900 leading-29.05 pt-1">Quantidade disponível</p>
                    <p className="font-inter font-medium sl:text-px20 text-stone-500 leading-29.05 pt-2">100 itens disponíveis</p>
                </div>
                <div className="flex flex-col ">
                    <h1 className=" font-inter font-semibold text-px24 sm:text-px40 leading-29.05 sm:leading-48.4 text-blue-900">Smart Watt</h1>
                    <p className="font-inter font-medium text-px16 sm:text-px20 text-stone-500 leading-19.36 sm:leading-29.05">Relógio</p>
                    <p className=" w-64 sm:w-[35vw]  font-inter font-medium  text-px14 lg:text-px24 text-stone-500 leading-16.94 sm:leading-29.05"> O smartwatch é o seu companheiro ideal para uma
                        vida mais saudável, conectada e cheia de estilo.
                        Com ele, você recebe notificações do seu smartphone,
                        monitora sua saúde (batimentos cardíacos, pressão arterial,
                        oxigênio no sangue e qualidade do sono), acompanha seus
                        treinos com diversos recursos e ainda desfruta de um
                        design elegante e moderno com diversas pulseiras intercambiáveis. </p>
                    <div className="flex pt-2">
                        <button className="flex w-[24vw] h-[5vw] bg-blue-900 rounded-lg items-center justify-center font-inter font-semibold text-px24 leading-29.05 text-[#FFFFFF]"> Comprar</button>
                    </div>

                </div>
            </section>
            <Footer />
        </>
    )
}