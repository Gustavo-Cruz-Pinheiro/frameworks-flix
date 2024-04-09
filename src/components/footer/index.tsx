import { FacebookLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import "./style.css";

export function Footer() {
    return (
        <footer className="footer">
            <section className="information">
                <span>
                    <a href="https://instagram.com/gusttavo.cruz_/">
                        <InstagramLogo size={28} weight="fill" className="social-network" />
                    </a>
                    <a href="https://www.linkedin.com/in/gustavo-cruz-pinheiro">
                        <LinkedinLogo size={28} weight="fill" className="social-network" />
                    </a>

                    <a href="https://www.facebook.com/gustavocruzpinheiro/">
                        <FacebookLogo size={28} weight="fill" className="social-network" />
                    </a>
                </span>
                <p>Feito por: Gustavo Cruz Pinheiro. Todos os direitos reservados.</p>
            </section>
        </footer>
    )
}