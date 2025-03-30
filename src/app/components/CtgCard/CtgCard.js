export default function CtgCard({ icon, texto }) {
    return (
        <div className="border justify-center items-center flex flex-col w-[170px] h-[145px] gap-[15px] hover:bg-red-500 transition-all duration-200 ease-in-out cursor-pointer" >
            <div>
                {icon && <img src={icon} alt="Icone da Categoria" width={56} height={56} />}
            </div>
            <div>
                <p className="text-[12px]">{texto}</p>
            </div>
        </div>
    )
}