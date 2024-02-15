import { useState } from "react";

export default function Cadastro() {

    const [loginState, setLoginState] = useState({ email: '', password: '' })

    const loginOnChange = (evento, chave) => {
        setLoginState({ ...loginState, [chave]: evento.target.value })
    }
    const aoLogar = (e) => {
        e.preventDefault()
        console.log(loginState)
    }
    return (
        <>
            <section className="flex w-screen h-screen bg-blue-900">
                <div className=" w-1/2 h-full bg-slate-100 ">
                    <div className="w-[450px] h-[503px] pt-8 pl-[75px] ml-[9.375vw] mt-[261px] bg-white">
                        <h1 className=" font-inter font-semibold text-px30 leading-36.3 text-black mb-[34px]">Fazer Login</h1>
                        <form onSubmit={aoLogar}>
                            <div className="flex flex-col w-[300px] h-[70px] rounded-lg mb-5 gap-2">
                                <label className=" font-inter font-semibold text-px16 leading-19.36" >Email:*</label>
                                <input className="h-[43px] font-inter font-medium text-px16 text-stone-500 leading-19.36 pl-3 items-center bg-slate-100 rounded-lg " type="email" placeholder="Digite seu e-mail" required
                                    value={loginState.email}
                                    onChange={(e) => loginOnChange(e, 'email')}
                                />
                            </div>
                            <div className="flex flex-col w-[300px] h-[70px] rounded-lg mb-5 gap-2">
                                <label className=" font-inter font-semibold text-px16 leading-19.36" >Senha*</label>
                                <input className="h-[43px] font-inter font-medium text-px16 text-stone-500 leading-19.36 pl-3 items-center bg-slate-100 rounded-lg " type="password" placeholder="Digite sua senha" required
                                    value={loginState.password}
                                    onChange={(e) => loginOnChange(e, 'password')}
                                />
                            </div>
                            <button className="w-[300px] h-[60px] rounded-lg bg-orange-500  flex pl-[111px] pt-5  mt-6 font-inter font-semibold text-px16 leading-19.36 text-white"> Fazer Login</button>
                            <div className="flex pl-[25px] font-inter text-px16 leading-19.36 gap-1">
                                <p className="text-stone-900">já possui cadastro? </p>
                                <nav className="text-orange-500">Clique aqui</nav>
                            </div>
                        </form>
                    </div>

                </div>
                <div className="flex flex-col w-1/2 h-screen pl-[12.917vw] pt-[384px]">
                    <p className="w-[389px] h-[78px] text-white font-inter text-px32 leading-38.7">
                        Sua nova experiência em
                        compras online
                    </p>
                    <div className="flex w-[389px] h-[150px] items-center">
                        <img src="src\assets\Logo_cadastro.png" alt="Logo irede na tela cadastro" />
                    </div>
                </div>

            </section>

        </>
    )
}