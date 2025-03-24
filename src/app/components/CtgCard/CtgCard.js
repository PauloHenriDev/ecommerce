export default function CtgCard({ icon, nome }) {
    return (
        <div>
            <div>
                {icon && <img src={icon} alt="Icone da Categoria" width={100} height={100} />}
            </div>
            <div>
                <p>{nome}</p>
            </div>
            border-b
        </div>
    )
}