import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";

export default function Detalhes(){
    return(
       <>
       <Header/>
       <section className="flex">
        <div className="flex flex-col">
            <img src="./../src/assets/SmartWatch.png" alt="smartwatch" />
            <p>Quantidade disponível</p>
            <p>100 itens disponíveis</p>
        </div>
        <div>
            <p>Smart Watt</p>
            <p>Relógio</p>
            <p> O smartwatch é o seu companheiro ideal para uma
                 vida mais saudável, conectada e cheia de estilo. 
                 Com ele, você recebe notificações do seu smartphone,
                  monitora sua saúde (batimentos cardíacos, pressão arterial, 
                  oxigênio no sangue e qualidade do sono), acompanha seus 
                  treinos com diversos recursos e ainda desfruta de um 
                  design elegante e moderno com diversas pulseiras intercambiáveis. </p>
                  <div className="flex">
                    <button className="flex w-[24vw] h-[5vw] bg-blue-900 rounded-lg items-center justify-center font-inter font-semibold text-px16 leading-29.05 text-[#FFFFFF]"> Comprar</button>
                  </div>
                  
        </div>
       </section>
       <Footer/>
       </>
    )
}