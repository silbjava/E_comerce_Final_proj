export function Footer() {
    return (
        <>
            <div className=" hidden sm:flex flex-col bg-blue-900 w-screen pb-9 pt-12">
                <section className="ml-[14.45vw] flex flex-wrap">
                    <div className="flex m-0 p-0 w-[292px] h-[76px]" >
                        <div className="flex flex-col justify-between">
                            <img id="logo" className="flex w-[81.8px] h-[32px] m-0 p-0" src=".\..\src\assets\Logo E-Rede.png" alt="Logo E-rede" />
                            <ul className="flex w-[91.29px] h-4 gap-[24.45px] text-zinc-50">
                                <li><a href="facebook"><img className=" w-[13.81px] h-4" src=".\..\src\assets\facebook.png" alt="icone de link para o facebook" /></a></li>
                                <li><a href="instagram"><img className=" w-[13.81px] h-4" src=".\..\src\assets\insta.png" alt="icone de link para o instagram" /></a></li>
                                <li><a href="whatsapp"><img className=" w-[13.81px] h-4" src=".\..\src\assets\whatsapp.png" alt="icone de link para o whatsapp" /></a></li>
                            </ul>
                        </div>
                        <p className="w-[182px] h-[60px] ml-[18.7px] font-inter text-px12 leading-14.5 font-normal text-zinc-50">Lorem ipsum lorem ipsum lorem lorem  ipsum lorem loram lorem lorem lorem ipsum ipsum ipsum  </p>
                    </div>
                    <div id="informações" className="flex flex-col w-auto ml-[6vw] justify-between">
                        <label className="text-white font-inter font-semibold text-px12 leading-14.5" >Informações</label>
                        <ul className="flex flex-col text-slate-50 font-inter text-px12 leading-14.5 gap-[5px]">
                            <li><a href="Sobre o E-Rede Store">Sobre o E-Rede Store</a></li>
                            <li><a href="Segurança">Segurança</a></li>
                            <li><a href="Lista de desejos">Lista de desejos</a></li>
                            <li><a href="Trabalhe Conosco">Trabalhe Conosco</a></li>
                        </ul>
                    </div>
                    <div id="informações 2" className="flex flex-col w-auto ml-[5vw] justify-between gap-3">
                        <label className="text-white font-inter font-semibold text-px12 leading-14.5">Informações</label>
                        <ul className="flex flex-col text-slate-50 font-inter text-px12 leading-14.5 gap-[5px]">
                            <li><a href="Tênis">Tênis</a></li>
                            <li><a href="Camiseta">Camiseta</a></li>
                            <li><a href="Acessórios">Acessórios</a></li>
                            <li><a href="Esportivo">Esportivo</a></li>
                        </ul>
                    </div>
                    <div className=" flex  flex-col w-[174px] h-[59px] ml-[7vw] justify-between">
                        <label className="text-white font-inter font-semibold text-px12 leading-14.5 ">Localização</label>
                        <ul className=" text-slate-50 font-inter text-px12 leading-14.5 gap-[5px]">
                            <li><a href="Loc1"> Bairro de Fátima, Fortaleza-CE</a></li>
                            <li><a href="Loc2">Rua Martinho Rodrigues, 331</a></li>
                        </ul>
                    </div>
                </section>

                <section className=" mt-[5vw] flex flex-col items-center">
                    <hr className="flex w-[87.22vw] h-px bg-zinc-50" />
                    <p className=" mt-9 font-inter text-slate-100">2023 Irede</p>
                </section>
            </div>

            <div className=" flex flex-col bg-blue-900 pt-[25px] pb-4 sm:hidden">
                <section className=" flex pl-6 flex-wrap pt-[22.76px] gap-4">
                    <div className=" flex m-0 p-0" >
                        <div className="flex flex-col">
                            <img id="logo" className="flex w-[71.56px] h-7 m-0 p-0" src=".\..\src\assets\Logo E-Rede.png" alt="Logo E-rede" />
                            <ul className="flex w-[91.29px] h-4 justify-between text-zinc-50 mt-[27px]">
                                <li><a href="facebook"><img className=" w-[13.81px] h-4" src=".\..\src\assets\facebook.png" alt="icone de link para o facebook" /></a></li>
                                <li><a href="instagram"><img className=" w-[13.81px] h-4" src=".\..\src\assets\insta.png" alt="icone de link para o instagram" /></a></li>
                                <li><a href="whatsapp"><img className=" w-[13.81px] h-4" src=".\..\src\assets\whatsapp.png" alt="icone de link para o whatsapp" /></a></li>
                            </ul>
                        </div>
                        <p className="w-[182px] h-9 font-inter text-px10 leading-3 text-zinc-50">Lorem ipsum lorem ipsum lorem lorem  ipsum lorem loram lorem lorem lorem ipsum ipsum ipsum   </p>
                    </div>
                    <div id="informações" className="flex flex-col gap-[14px]">
                        <label className="text-white font-inter font-semibold text-px12 leading-14.5" >Informações</label>
                        <ul className="flex flex-col text-slate-50 font-inter text-px12 leading-14.5 gap-2">
                            <li><a href="Sobre o E-Rede Store">Sobre o E-Rede Store</a></li>
                            <li><a href="Segurança">Segurança</a></li>
                            <li><a href="Lista de desejos">Lista de desejos</a></li>
                            <li><a href="Trabalhe Conosco">Trabalhe Conosco</a></li>
                        </ul>
                    </div>
                    <div id="informações 2" className="flex flex-col ml-9 gap-[14px]">
                        <label className="text-white font-inter font-semibold text-px12 leading-14.5">Informações</label>
                        <ul className="flex flex-col text-slate-50 font-inter text-px12 leading-14.5 gap-2">
                            <li><a href="Tênis">Tênis</a></li>
                            <li><a href="Camiseta">Camiseta</a></li>
                            <li><a href="Acessórios">Acessórios</a></li>
                            <li><a href="Esportivo">Esportivo</a></li>
                        </ul>
                    </div>
                    <div className=" flex flex-col h-[59px] gap-3">
                        <label className="text-white font-inter font-semibold text-px12 leading-14.5 ">Localização</label>
                        <ul className="flex flex-col text-slate-50 font-inter text-px12 leading-14.5 gap-2">
                            <li>
                                <a href="Localização">Rua Martinho Rodrigues, 331</a>
                            </li>
                            <li>
                                <a href="Localização2"> Bairro de Fátima, Fortaleza-CE</a>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className=" mt-[19px] flex flex-col items-center gap-4">
                    <hr className="flex w-[87.22vw] h-auto bg-zinc-50" />
                    <p className="font-inter text-slate-100">2023 Irede</p>
                </section>
            </div>
        </>
    )
}