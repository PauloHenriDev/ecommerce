export default function Button({ texto, largura, altura, cor }) {
    return(
        <div>
            <button 
                className="bg-red-500 rounded-[5px] cursor-pointer hover:bg-blue-500"
                // também posso usar className={`bg-red-500 rounded-[2px] text-white w-[${largura}] h-[${altura}]`}
                style={{
                    width: largura,
                    height: altura,
                    background: cor,
                }}
            >
                <p className="text-white">{texto}</p>
            </button>
        </div>
    )
}