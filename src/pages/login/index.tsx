import { FormEvent, useState } from "react";
import { Input } from "../../components/input";
import { auth } from "../../services/firebaseConnection";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../login/style.css";

export function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    function handleSubmit(e: FormEvent) {
        e.preventDefault()

        if (email === '' || password === '') {
            alert('Por favor, preencha todos os campos!')
            return
        }

        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                console.log('Autenticação realizada com sucesso!');
                navigate('/', { replace: true })
            })
            .catch((error) => {
                alert('Erro ao realizar autenticação!');
                console.log(error);
            })
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="form">
                <h1 className="title">Login</h1>

                <Input
                    placeholder="joãodasilva@gmail.com"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input"
                />

                <Input
                    placeholder="********"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input"
                />

                <div className="center">
                    <button type="submit" className="button">Entrar</button>
                </div>
            </form>
        </div>
    )
}