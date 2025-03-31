export default function Card({ img, texto, valor, valorAntigo, estrelas, reviews }) {
    
    const desconto = valorAntigo && valor
    ? Math.round(((valorAntigo - valor) / valorAntigo ) * 100)
    : 0;
    
    
    return (
        <div className="flex flex-col w-fit h-fit gap-4 cursor-pointer">
            {/* Apliquei a classe 'group' aqui no contêiner da imagem */}
            <div className="relative flex bg-[#F5F5F5] rounded-[3px] group">
                {/* Imagem do produto */}
                {img && <img src={img} alt="Imagem do produto" className="object-cover" width={215} height={200} />}

                {/* Desconto */}
                {desconto > 0 && (
                    <div className="absolute top-2 left-2 bg-red-600 text-white text-sm font-bold w-[55px] h-[26px] flex items-center justify-center rounded-md">
                        {desconto}%
                    </div>
                )}

                {/* Ícones que aparecem ao passar o mouse */}
                <div className="absolute left-42 top-2 flex opacity-0 group-hover:opacity-100">
                    <div className="flex flex-col gap-4">
                        {/* Substitua as imagens pelos ícones depois */}
                        <div className="bg-gray-500 p-2 rounded-full">
                            <img src="icone1.png" alt="" width={25} height={25} />
                        </div>
                        <div className="bg-gray-500 p-2 rounded-full">
                            <img src="icone2.png" alt="" width={25} height={25} />
                        </div>
                    </div>
                </div>


                {/* Botão "Adicionar ao Carrinho" */}
                <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-center py-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-1 transition-all duration-500 ease-in-out">
                    <button className="w-full cursor-pointer">Adicionar ao Carrinho</button>
                </div>
            </div>


            {/* Card Informations */}
            <div className="flex flex-col gap-1 text-[16px]">
                <p>{texto}</p>
                <div className="flex gap-3">
                    <p className="text-green-800">{valor}</p>
                    <p className="text-red-800 line-through">{valorAntigo}</p>
                </div>
                <div className="flex gap-[8px]">
                    <p>{estrelas}</p>
                    <p>{reviews}</p>
                </div>
            </div>
        </div>
    );
}