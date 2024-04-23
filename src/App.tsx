import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import './App.css'
import { UserProvider } from './context/UserContext'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <>
      <UserProvider>
        <CartProvider>
          <RouterProvider router={ router } />
        </CartProvider>
      </UserProvider>
    </>
  )
}

export default App
