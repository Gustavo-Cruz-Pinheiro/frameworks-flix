import "./style.css";

export interface TittleProps {
    titulo: string
}

export const Tittle: React.FC<TittleProps> = ({
    titulo
}) => {
    return (
        <>
            <p className="tittle">
                {titulo}
            </p>
        </>
    )
}