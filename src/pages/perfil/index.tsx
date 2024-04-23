import { FormEvent, useContext, useState } from "react";
import { Input } from "../../components/input";
import "./style.css";
import { UserContext } from "../../context/UserContext";

export function Perfil() {
    const { atualizarUsuario, nome } = useContext(UserContext);

    const [name, setName] = useState(nome)

    function handleSubmit(e: FormEvent) {
        e.preventDefault()

        if (name === '') {
            alert('Por favor, preencha todos os campos!')
            return
        }

        atualizarUsuario(name);
    }

    return (
        <div className="bg">
            <div className="form-container">
                <form onSubmit={handleSubmit} className="form">
                    <p className="titulo-perfil">Alterar nome de usuário</p>

                    <Input
                        placeholder="Ex: fulano"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="input"
                    />

                    <div className="center">
                        <button type="submit" className="button">Confirmar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}