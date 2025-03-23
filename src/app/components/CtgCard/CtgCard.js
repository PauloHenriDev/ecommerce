export default function CtgCard({
    icon, nome
}) {
    return (
        <div>
            <div>
                {icon && <img src={icon} alt="Icone da Categoria" width={200} height={200} />}
            </div>
            <div>
                <p>{nome}</p>
            </div>

        </div>
    )
}