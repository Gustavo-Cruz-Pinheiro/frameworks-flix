import { Link } from "react-router-dom"
import "./style.css"

export function Notfound() {
    return(
        <div className="error">
            <img src="src/assets/image/erro.jpg" alt="" className="img-error"/>
            <button className="button"><Link to={"/"} className="link">Voltar a Home</Link></button>
        </div>
    )
}