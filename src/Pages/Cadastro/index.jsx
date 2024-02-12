import { CampoCadastro } from "../../Components/campoCadastro";

export default function Cadastro() {
    const aoSalvar = (e) => {
        e.preventDefault()
        console.log('Cadastro submetido')
    }
    return (
        <>
            <section className=" w-1/2 h-full bg-slate-100">
                <h1 className=" font-inter font-normal text-px16 leading-19.36">Cadastre-se</h1>
                <form onSubmit={aoSalvar}>
                    <h2> Preencha os dados para criar o card do colaborador</h2>
                    <CampoCadastro label="Nome:*" placeholder="Digite seu nome" required={true} />
                    <CampoCadastro label="Email:*" placeholder="Digite seu e-mail" required={true} />
                    <CampoCadastro label="Senha*" placeholder="Digite sua senha" required={true} />
                    <CampoCadastro botao="Cadastrar" />
                </form>
            </section>
            <div className=" w-1/2 h-full">

            </div>
        </>
    )
}