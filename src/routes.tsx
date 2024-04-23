import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout";
import { Home } from "./pages/home";
import { Produto } from "./pages/produto";
import { Favoritos } from "./pages/favoritos";
import { Login } from "./pages/login";
import { Notfound } from "./pages/notfound";
import { Private } from "./routes/private";
import { Perfil } from "./pages/perfil";
import { Cart } from "./pages/cart";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/produto/:id',
                element: <Private> <Produto /> </Private>
            },
            {
                path: '/favoritos',
                element: <Private> <Favoritos /> </Private>,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/perfil',
                element: <Private> <Perfil /> </Private>,
            },
            {
                path: '/carrinho',
                element: <Private> <Cart /> </Private>,
            },
            {
                path: '*',
                element: <Notfound />
            }
        ]
    }
])

export { router}