import { useState } from "react";
import { Link } from "react-router-dom";

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
            <section className=" hidden sm:flex">
                <div className="flex flex-col w-1/2 h-screen bg-slate-100 items-center justify-center">
                    <div className="w-[34vw] bg-white pl-[5vw] pt-[2vw] pb-3">
                        <h1 className=" font-inter font-semibold sm:text-xl lg: text-2xl xl:text-px30 xl:leading-36.3 text-black">Cadastre-se</h1>
                        <form onSubmit={aoCadastrar}>
                            <div className="flex flex-col w-[26vw] h-[70px] rounded-lg mb-5 gap-2 mt-[2vw]">
                                <label className=" font-inter font-semibold text-px16 leading-19.36" >Nome:*</label>
                                <input className="h-[43px] font-inter font-medium text-px16 text-stone-500 leading-19.36 pl-3 items-center bg-slate-100 rounded-lg " type="text" placeholder="Digite seu nome" required
                                    value={cadastroState.nome}
                                    onChange={(e) => onChangeCadastro(e, 'nome')}
                                />
                            </div>
                            <div className="flex flex-col w-[26vw] h-[70px] rounded-lg mb-5 gap-2">
                                <label className=" font-inter font-semibold text-px16 leading-19.36" >Email:*</label>
                                <input className="h-[43px] font-inter font-medium text-px16 text-stone-500 leading-19.36 pl-3 items-center bg-slate-100 rounded-lg " type="email" placeholder="Digite seu e-mail" required
                                    value={cadastroState.email}
                                    onChange={(e) => onChangeCadastro(e, 'email')}
                                />
                            </div>
                            <div className="flex flex-col w-[26vw] h-[70px] rounded-lg mb-5 gap-2">
                                <label className=" font-inter font-semibold text-px16 leading-19.36" >Senha*</label>
                                <input className="h-[43px] font-inter font-medium text-px16 text-stone-500 leading-19.36 pl-3 items-center bg-slate-100 rounded-lg " type="password" placeholder="Digite sua senha" required
                                    value={cadastroState.password}
                                    onChange={(e) => onChangeCadastro(e, 'password')}
                                />
                            </div>
                            <button type="submit" className="w-[24vw] h-[5vw] rounded-lg bg-orange-500 text-white flex items-center justify-center font-inter font-semibold sm:text-xs md:text-base lg:text-px16 leading-19.36 text-whi"> Cadastrar</button>
                            <div className="flex md:justify-center font-inter sm:text-xs md:text-sm lg:text-px16 leading-19.36 gap-1">
                                <p className="text-stone-900">já possui cadastro? </p>
                                <button className="text-orange-500">Clique aqui</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="flex flex-col w-1/2 h-screen bg-blue-900 items-center justify-center">
                    <p className=" w-[30vw] flex-wrap text-white font-inter sm: text-lg md:text-2xl lg:text-px32 g:leading-38.7">
                        Sua nova experiência em
                        compras online
                    </p>
                    <div className="flex w-[27vw] h-[11vw] mt-5">
                        <img src="src\assets\Logo_cadastro.png" alt="Logo irede na tela cadastro" />
                    </div>
                </div>

            </section>

            <section className="sl:hidden flex flex-col px-2 pb-[107px] w-screen bg-blue-900 items-center">
                <img id="logo" className="w-[71.56px] h-7 mt-[33px]" src="src\assets\Logo E-Rede.png" alt="Logo E-rede" />
                <div className="flex flex-col w-[304px]  mt-7 pt-[14px] pb-10 bg-white items-center">
                    <h1 className="font-inter font-semibold text-px24 leading-normal text-black">Cadastre-se</h1>
                    <form className="flex flex-col items-center" onSubmit={aoCadastrar}>
                        <div className="flex flex-col w-[260px] h-[70px] rounded-lg mb-5 mt-[4vh] gap-2">
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
                            <button className="text-orange-500"><Link to="/login">Clique aqui</Link></button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}