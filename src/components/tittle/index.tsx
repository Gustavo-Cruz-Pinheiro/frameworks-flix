export interface TittleProps {
    titulo: string
}

export const Tittle: React.FC<TittleProps> = ({
    titulo
}) => {
    const style = {
        fontSize: "30px",
        paddingBottom: "30px",
        display: "flex",
        justifyContent: "center"
    }

    return (
        <>
            <p className="tittle" style={style} >
                {titulo}
            </p>
        </>
    )
}