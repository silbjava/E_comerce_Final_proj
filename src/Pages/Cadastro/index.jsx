import { useState } from "react";

export default function Cadastro() {

    const [cadastroState, setCadastroState] = useState({ nome: '', email: '', password: '' })

    const onChangeCadastro = (e, chave) => {
        setCadastroState({ ...cadastroState, [chave]: e.target.value })
    }

    const aoCadastrar = (e) => {
        e.preventDefault()
        console.log(cadastroState)
    }

    return (
        <>
            <section className="w-screen h-[1024px] bg-blue-900 items-center ">
                <div className="flex w-1/2 h-[1024px] bg-slate-100 items-center justify-center">
                    <div className="w-[450px] h-[503px] pt-8 pl-[75px] ml-[9.376vw] mt-[261px] bg-white">
                        <h1 className=" font-inter font-semibold text-px30 leading-36.3 text-black mb-[34px]">Cadastre-se</h1>
                        <form onSubmit={aoCadastrar}>
                            <div className="flex flex-col w-[300px] h-[70px] rounded-lg mb-5 gap-2">
                                <label className=" font-inter font-semibold text-px16 leading-19.36" >Nome:*</label>
                                <input className="h-[43px] font-inter font-medium text-px16 text-stone-500 leading-19.36 pl-3 items-center bg-slate-100 rounded-lg " type="text" placeholder="Digite seu nome" required
                                    value={cadastroState.nome}
                                    onChange={(e) => onChangeCadastro(e, 'nome')}
                                />
                            </div>
                            <div className="flex flex-col w-[300px] h-[70px] rounded-lg mb-5 gap-2">
                                <label className=" font-inter font-semibold text-px16 leading-19.36" >Email:*</label>
                                <input className="h-[43px] font-inter font-medium text-px16 text-stone-500 leading-19.36 pl-3 items-center bg-slate-100 rounded-lg " type="email" placeholder="Digite seu e-mail" required
                                    value={cadastroState.email}
                                    onChange={(e) => onChangeCadastro(e, 'email')}
                                />
                            </div>
                            <div className="flex flex-col w-[300px] h-[70px] rounded-lg mb-5 gap-2">
                                <label className=" font-inter font-semibold text-px16 leading-19.36" >Senha*</label>
                                <input className="h-[43px] font-inter font-medium text-px16 text-stone-500 leading-19.36 pl-3 items-center bg-slate-100 rounded-lg " type="password" placeholder="Digite sua senha" required
                                    value={cadastroState.password}
                                    onChange={(e) => onChangeCadastro(e, 'password')}
                                />
                            </div>
                            <button type="submit" className="w-[300px] h-[60px] rounded-lg bg-orange-500  flex pl-[111px] pt-5  mt-6 font-inter font-semibold text-px16 leading-19.36 text-white"> Cadastrar</button>
                            <div className="flex pl-[25px] font-inter text-px16 leading-19.36 gap-1">
                                <p className="text-stone-900">já possui cadastro? </p>
                                <button className="text-orange-500">Clique aqui</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="flex flex-col w-1/2 h-screen pl-[12.917vw]">
                    <p className="w-[389px] h-[78px] mt-[384px] text-white font-inter text-px32 leading-38.7">
                        Sua nova experiência em
                        compras online
                    </p>
                    <div className="flex w-[389px] h-[150px] items-center">
                        <img src="src\assets\Logo_cadastro.png" alt="Logo irede na tela cadastro" />
                    </div>
                </div>

            </section>

            <section className="hidden flex flex-col px-2 pb-9 w-screen h-auto bg-blue-900 items-center">
            <img id="logo" className="w-[71.56px] h-7 mt-[33px]" src="src\assets\Logo E-Rede.png" alt="Logo E-rede" />
                <div className="flex flex-col w-[304px] pb-6 mt-7 bg-white items-center">
                    <h1 className="font-inter font-semibold text-px24 leading-normal text-black">Cadastre-se</h1>
                    <form className="flex flex-col items-center" onSubmit={aoCadastrar}>
                        <div className="flex flex-col w-[260px] h-[70px] rounded-lg mb-5 gap-2">
                            <label className=" font-inter font-semibold text-px16 leading-19.36" >Nome:*</label>
                            <input className="h-[43px] font-inter font-medium text-px16 text-stone-500 leading-19.36 pl-3 items-center bg-slate-100 rounded-lg " type="text" placeholder="Digite seu nome" required
                                value={cadastroState.nome}
                                onChange={(e) => onChangeCadastro(e, 'nome')}
                            />
                        </div>
                        <div className="flex flex-col w-[260px] h-[70px] rounded-lg mb-5 gap-2">
                            <label className=" font-inter font-semibold text-px16 leading-19.36" >Email:*</label>
                            <input className="h-[43px] font-inter font-medium text-px16 text-stone-500 leading-19.36 pl-3 items-center bg-slate-100 rounded-lg " type="email" placeholder="Digite seu e-mail" required
                                value={cadastroState.email}
                                onChange={(e) => onChangeCadastro(e, 'email')}
                            />
                        </div>
                        <div className="flex flex-col w-[260px] h-[70px] rounded-lg mb-5 gap-2">
                            <label className=" font-inter font-semibold text-px16 leading-19.36" >Senha*</label>
                            <input className="h-[43px] font-inter font-medium text-px16 text-stone-500 leading-19.36 pl-3 items-center bg-slate-100 rounded-lg " type="password" placeholder="Digite sua senha" required
                                value={cadastroState.password}
                                onChange={(e) => onChangeCadastro(e, 'password')}
                            />
                        </div>
                        <button type="submit" className=" w-[260px] h-[60px] items-center justify-items-center rounded-lg bg-orange-500 font-inter font-semibold text-px16 leading-19.36 text-white"> Cadastrar</button>
                        <div className="flex font-inter text-px16 leading-19.36 gap-1 ">
                            <p className="text-stone-900">já possui cadastro? </p>
                            <button className="text-orange-500">Clique aqui</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}