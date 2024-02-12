export function CampoCadastro(props) {
    return (
        <>
            <div>
                <label>{props.label}</label>
                <input placeholder={props.placeholder} />
                <button className="relative w-80 h-16 mt-[340px]  ml-[69.44vw] font-inter text-xl rounded-lg bg-orange-500 text-white font-semibold p-2.5 justify-center">{props.botao}</button>
            </div>
        </>
    )
}