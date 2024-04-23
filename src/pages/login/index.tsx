import { FormEvent, useContext, useState } from "react";
import { Input } from "../../components/input";
import { auth } from "../../services/firebaseConnection";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../login/style.css";
import { UserContext } from "../../context/UserContext";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";

export function Login() {
    const { logar } = useContext(UserContext);

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
            .then(async () => {
                console.log('Autenticação realizada com sucesso!');

                const userCollection = collection(db, 'user');
                const queryRef = query(userCollection);

                const snapshot = await getDocs(queryRef);

                let nome = "";

                snapshot.forEach((doc) => {
                    nome = doc.data().nome;
                })

                logar(nome, email);

                navigate('/', { replace: true })
            })
            .catch((error) => {
                alert('Erro ao realizar autenticação! Por favor verifiques o e-mail e senha informados!');
                console.log(error);
            })
    }

    return (
        <div className="bg">
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
        </div>
    )
}