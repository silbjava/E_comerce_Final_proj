import { useState } from "react";
import { Link } from "react-router-dom";

export default function Cadastro() {

    const [loginState, setLoginState] = useState({ email: '', password: '' })

    const loginOnChange = (evento, chave) => {
        setLoginState({ ...loginState, [chave]: evento.target.value })
    }
    const aoLogar = (e) => {
        e.preventDefault()

    }
    return (
        <>
            <section className="hidden sm:flex">
                <div className="flex flex-col w-1/2 bg-slate-100 items-center justify-center">
                    <div className="w-[34vw] h-[40vw] bg-white pl-[5vw] pt-[2vw]">
                        <h1 className=" font-inter font-semibold text-px30 leading-36.3 text-black mb-[34px]">Fazer Login</h1>
                        <form onSubmit={aoLogar}>
                            <div className="flex flex-col w-[26vw] h-[70px] rounded-lg mb-5 gap-2">
                                <label className=" font-inter font-semibold text-px16 leading-19.36" >Email:*</label>
                                <input className="h-[43px] font-inter font-medium text-px16 text-stone-500 leading-19.36 pl-3 items-center bg-slate-100 rounded-lg " type="email" placeholder="Digite seu e-mail" required
                                    value={loginState.email}
                                    onChange={(e) => loginOnChange(e, 'email')}
                                />
                            </div>
                            <div className="flex flex-col w-[26vw] h-[70px] rounded-lg mb-5 gap-2">
                                <label className=" font-inter font-semibold text-px16 leading-19.36" >Senha*</label>
                                <input className="h-[43px] font-inter font-medium text-px16 text-stone-500 leading-19.36 pl-3 items-center bg-slate-100 rounded-lg " type="password" placeholder="Digite sua senha" required
                                    value={loginState.password}
                                    onChange={(e) => loginOnChange(e, 'password')}
                                />
                            </div>
                            <button className="w-[26vw] h-[5vw] rounded-lg bg-orange-500 text-white flex items-center justify-center font-inter font-semibold text-px16 leading-19.36 text-whi"> Fazer Login</button>
                            <div className="flex pl-[25px] font-inter text-px16 leading-19.36 gap-1">
                                <p className="text-stone-900">já possui cadastro? </p>
                                <nav className="text-orange-500"> <Link to="/login">Clique aqui</Link></nav>
                            </div>
                        </form>
                    </div>

                </div>
                <div className="flex flex-col w-1/2 h-screen bg-blue-900 items-center justify-center">
                    <p className="w-[389px] h-[78px] text-white font-inter text-px32 leading-38.7">
                        Sua nova experiência em
                        compras online
                    </p>
                    <div className="flex w-[27vw] h-[11vw] mt-7">
                        <img src="src\assets\Logo_cadastro.png" alt="Logo irede na tela cadastro" />
                    </div>
                </div>
            </section>

            <section className="sl:hidden flex flex-col px-2 pb-5 w-screen h-[568px] bg-blue-900 items-center">
                <img id="logo" className="w-[71.56px] h-7 mt-[33px]" src="src\assets\Logo E-Rede.png" alt="Logo E-rede" />
                <div className="flex flex-col w-[304px]  mt-7 pt-[14px] pb-10 bg-white items-center">
                    <h1 className="font-inter font-semibold text-px24 leading-normal text-black">Fazer Login</h1>
                    <form className="flex flex-col items-center" onSubmit={aoLogar}>
                        <div className="flex flex-col w-[260px] h-[70px] rounded-lg mb-5 gap-2">
                            <label className=" font-inter font-semibold text-px16 leading-19.36" >Email:*</label>
                            <input className="h-[43px] font-inter font-medium text-px16 text-stone-500 leading-19.36 pl-3 items-center bg-slate-100 rounded-lg " type="email" placeholder="Digite seu e-mail" required
                                value={loginState.email}
                                onChange={(e) => loginOnChange(e, 'email')}
                            />
                        </div>
                        <div className="flex flex-col w-[260px] h-[70px] rounded-lg mb-5 gap-2">
                            <label className=" font-inter font-semibold text-px16 leading-19.36" >Senha*</label>
                            <input className="h-[43px] font-inter font-medium text-px16 text-stone-500 leading-19.36 pl-3 items-center bg-slate-100 rounded-lg " type="password" placeholder="Digite sua senha" required
                                value={loginState.password}
                                onChange={(e) => loginOnChange(e, 'password')}
                            />
                        </div>
                        <button type="submit" className=" w-[260px] h-[60px] items-center justify-items-center rounded-lg bg-orange-500 font-inter font-semibold text-px16 leading-19.36 text-white">Fazer Login</button>
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