import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { useState } from 'react';

export default function Detalhes() {
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
            <section className="flex flex-col items-center sm:flex-row sm:items-start sm:pl-[18vw] pt-[9vw] pb-[12vw] sm:pr-[10vw] gap-[5vw]">
                <div className="flex flex-col">
                    <img className="w-[220px] h-[170px] sm:flex sm:w-[18vw] sm:h-[20vw]" src="./../src/assets/SmartWatch.png" alt="smartwatch" />
                    <p className="hidden sm:flex font-inter font-semibold text-px14 text-blue-900 leading-29.05 pt-1">Quantidade disponível</p>
                    <p className="hidden sm:flex font-inter font-medium sm:text-px20 text-stone-500 leading-29.05 pt-2">100 itens disponíveis</p>
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
                    <div className="flex flex-col justify-start sm:flex-row pt-4 gap-6">
                    <form className="flex justify-center gap-2 sm:justify-normal sm:gap-0 sm:flex-col sm:items-center">
                        <h2 className=" font-inter font-semibold text-px16 sm:text-px24 leading-19.36 sm:leading-29.05">Quantidade:</h2>
                        <div className=" relative">
                            <img className="absolute  top-6 left-[51px] sm:left-[67px] " onClick={decrement} src=".\..\src\assets\VectorDown.png" alt="vector down" />
                            <input
                                type="number"
                                className=" font-inter font-semibold text-px16 sm:text-px24 leading-19.36 sm:leading-29.05 pl-5 pr-2 w-20 h-10 sm:w-24 sm:h-10 border border-black rounded  "
                                value={value}
                                onChange={e => setValue(e.target.value)}
                                min={0}
                            />
                            <img className=" absolute top-2 right-[11px] " onClick={increment} src=".\..\src\assets\VectorUp.png" alt="vector down" />
                        </div>

                    </form>
                        <button className="flex sm:w-[24vw] h-[70px] sm:h-[5vw] bg-blue-900 rounded-lg items-center justify-center font-inter font-semibold text-px16 leading-19.36 sm:text-lg  lg:text-px24 lg:leading-29.05 text-[#FFFFFF]"> Comprar</button>
                    </div>

                </div>
            </section>
            <Footer />
        </>
    )
}