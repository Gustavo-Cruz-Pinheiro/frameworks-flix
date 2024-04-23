import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Navbar } from "../navbar";

export function Header() {
    const { nome } = useContext(UserContext);

    return(
        <>
            <Navbar />
            {nome && (
                <p>Logado como: {nome}</p>
            )}
        </>
    )
}