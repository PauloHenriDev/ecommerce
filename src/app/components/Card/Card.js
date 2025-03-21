export default function Card({ img, nome, valor, valorAntigo, estrelas }) {
    return (
        <div className="flex flex-col w-fit h-fit gap-4 cursor-pointer">
            {/* Apliquei a classe 'group' aqui no contêiner da imagem */}
            <div className="relative flex bg-[#F5F5F5] rounded-[3px] group">
                {/* Imagem do produto */}
                {img && <img src={img} alt="Imagem do produto" width={200} height={200} />}

                {/* Ícones que aparecem ao passar o mouse */}
                <div className="absolute inset-0 flex opacity-0 group-hover:opacity-100">
                    <div className="flex flex-col gap-4">
                        {/* Substitua as imagens pelos ícones depois */}
                        <div className="bg-gray-500 p-2 rounded-full">
                            <img src="icone1.png" alt="" width={30} height={30} />
                        </div>
                        <div className="bg-gray-500 p-2 rounded-full">
                            <img src="icone2.png" alt="" width={30} height={30} />
                        </div>
                    </div>
                </div>

                {/* Botão "Adicionar ao Carrinho" */}
                <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-center py-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-5 transition-all duration-500 ease-in-out">
                    <button className="w-full cursor-pointer">Adicionar ao Carrinho</button>
                </div>
            </div>

            {/* Informações do card */}
            <div className="flex flex-col gap-1 text-[16px]">
                <p>{nome}</p>
                <div className="flex gap-3">
                    <p className="text-green-800">{valor}</p>
                    <p className="text-red-800 line-through">{valorAntigo}</p>
                </div>
                <p>{estrelas}</p>
            </div>
        </div>
    );
}
