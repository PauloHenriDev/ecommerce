export default function Button({ nome, largura, altura }) {
    return(
        <div>
            <button 
                className="bg-red-500 rounded-[5px] cursor-pointer"
                // também posso usar className={`bg-red-500 rounded-[2px] text-white w-[${largura}] h-[${altura}]`}
                style={{
                    width: largura,
                    height: altura,
                }}
            >
                <p className="text-white">{nome}</p>
            </button>
        </div>
    )
}