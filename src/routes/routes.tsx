import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { LoginView } from "../pages/Login MVVM/loginView"
import { Login } from "../pages/Login Sem MVVM/login";


const router = createBrowserRouter([
  {
    path: '/login-com-mvvm',
    element: <LoginView />,
  },
  {
    path: '/login-sem-mvvm',
    element: <Login/>
  }
]);

export function Router() {
  return (
    <RouterProvider router={router} />
  )
}