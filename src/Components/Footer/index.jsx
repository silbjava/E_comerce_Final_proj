export function Footer() {
    return (
        <>
        <section className="flex flex-col w-[86.8vw] h-[613px] bg-white">
            <label className="w-[104px] h-[24px] text-blue-900 font-inter font-semibold leading-24.2 text-xl">Destaques</label>
            <p className="w-[31px] h-[15px] font-inter text-white"></p>
            <p className="w-[138px] h-6 text-blue-900 font-inter font-bold text-xl leading-24.2">Nique Air Surf</p>
            <p className="w-[92px] h-[22px] bg-orange-400 font-inter font-semibold text-px18">R{'$'} 200,00</p>
            <button className="w-[75px] h-6 rounded bg-blue-900 font-inter font-medium text-px12 leading-14.5 items-center">Comprar</button>
        </section>
            <div className="flex bg-blue-900 w-screen h-[350px] pb-9">
                <div className="relative mt-[51px] ml-[208px]" >
                    <img id="logo" className="w-[81.8px] h-[32px] ml-[107px]" src="src\assets\Logo E-Rede.png" alt="Logo E-rede" />
                    <p className="w-[182px] h-[60px]  font-inter text-px12 leading-14.5 font-normal text-zinc-50">Lorem ipsum lorem ipsum lorem lorem  ipsum lorem loram lorem lorem lorem ipsum ipsum ipsum  </p>
                    <img className="absolute w-[13.81px] h-4" src="src\assets\facebook.png" alt="icone de link para o facebook" />
                    <img className="absolute w-[13.81px] h-4" src="src\assets\insta.png" alt="icone de link para o instagram" />
                    <img className="absolute w-[13.81px] h-4" src="src\assets\whatsapp.png" alt="icone de link para o whatsapp" />
                </div>
                <div className="w-[125px] h-[101px]">
                    <label className="text-white font-inter font-semibold text-px12 leading-14.5 ">Informações</label>
                    <nav className=" text-slate-50 font-inter text-px12 leading-14.5 gap-[5px]">
                        <a href="Sobre o E-Rede Store">Sobre o E-Rede Store</a>
                        <a href="Segurança">Segurança</a>
                        <a href="Lista de desejos">Lista de desejos</a>
                        <a href="Trabalhe Conosco">Trabalhe Conosco</a>
                    </nav>
                </div>
                <div className="w-[101px] h-[73px]">
                    <label className="text-white font-inter font-semibold text-px12 leading-14.5 ">Informações</label>
                    <nav className=" text-slate-50 font-inter text-px12 leading-14.5 gap-[5px]">
                        <a href="Tênis">Tênis</a>
                        <a href="Camiseta">Camiseta</a>
                        <a href="Acessórios">Acessórios</a>
                        <a href="Esportivo">Esportivo</a>
                    </nav>
                </div>
                <div className="w-[174px] h-[59px]">
                    <label className="text-white font-inter font-semibold text-px12 leading-14.5 ">Localização</label>
                    <nav className=" text-slate-50 font-inter  text- text-px12 leading-14.5 gap-[5px]">
                        <a href="Bairro de Fátima, Fortaleza-CE">Bairro de Fátima, Fortaleza-CE</a>
                        <a href="Rua Martinho Rodrigues, 331">Rua Martinho Rodrigues, 331</a>
                    </nav>
                </div>

                <p className="flex font-inter items-end text-slate-100">2023 Irede</p>
            </div>
        </>
    )
}