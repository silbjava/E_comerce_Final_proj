export function Footer() {
    return (
        <>
            <div className="flex bg-blue-900 w-screen h-[350px] pb-9">
                <div className=" bg-lime-400 m-0 p-0 flex w-[292px] h-[76px] mt-[51px] ml-[208px]" >
                    <img id="logo" className=" w-[81.8px] h-[32px] m-0 p-0" src="src\assets\Logo E-Rede.png" alt="Logo E-rede" />
                    <p className="w-[182px] h-[60px] font-inter text-px12 leading-14.5 font-normal text-zinc-50">Lorem ipsum lorem ipsum lorem lorem  ipsum lorem loram lorem lorem lorem ipsum ipsum ipsum  </p>
                    <div className="flex w-[91.29px] h-4 gap-[24.45px] text-zinc-50">
                        <i className="w-[13.81px] h-4" src="src\assets\facebook.png" alt="icone de link para o facebook" />
                        <i className=" w-[13.81px] h-4" src="src\assets\insta.png" alt="icone de link para o instagram" />
                        <i className=" w-[13.81px] h-4" src="src\assets\whatsapp.png" alt="icone de link para o whatsapp" />
                    </div>
                </div>
                <div id="informações" className="flex flex-col w-[125px] h-[101px] mt-[45px] ml-[96px] gap-[11px]">
                    <label className="text-white font-inter font-semibold text-px12 leading-14.5" >Informações</label>
                    <ul className="flex flex-col text-slate-50 font-inter text-px12 leading-14.5 gap-[5px]">
                        <li><a href="Sobre o E-Rede Store">Sobre o E-Rede Store</a></li>
                        <li><a href="Segurança">Segurança</a></li>
                        <li><a href="Lista de desejos">Lista de desejos</a></li>
                        <li><a href="Trabalhe Conosco">Trabalhe Conosco</a></li>
                    </ul>
                </div>
                <div id="informações 2" className="flex flex-col w-[101px] h-[73px] mt-[45px] ml-[60px] gap-[11px]">
                    <label className="text-white font-inter font-semibold text-px12 leading-14.5">Informações</label>
                    <ul className="flex flex-col text-slate-50 font-inter text-px12 leading-14.5 gap-[5px]">
                        <li><a href="Tênis">Tênis</a></li>
                        <li><a href="Camiseta">Camiseta</a></li>
                        <li><a href="Acessórios">Acessórios</a></li>
                        <li><a href="Esportivo">Esportivo</a></li>
                    </ul>
                </div>
                <div className=" flex  flex-col w-[174px] h-[59px] mt-[45px] ml-[104px] gap-2.5">
                    <label className="text-white font-inter font-semibold text-px12 leading-14.5 ">Localização</label>
                    <ul className=" text-slate-50 font-inter  text- text-px12 leading-14.5 gap-[5px]">
                        <li>
                            <a href="Localização"> Bairro de Fátima, Fortaleza-CE Rua Martinho Rodrigues, 331</a>
                        </li>
                    </ul>
                </div>
                <section className=" mb-0">
                    <hr className=" w-[1256px] h-px bg-zinc-50" />
                    <p className="font-inter items-end text-slate-100">2023 Irede</p>
                </section>
            </div>
        </>
    )
}