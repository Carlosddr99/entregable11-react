import {createBrowserRouter, Link} from "react-router-dom";
import Users from "./paginas/Users";
import UserDetail, {loader as userLoader,} from "./paginas/UserDetail";
import Private from "./paginas/Private";
import AuthRoute from "./paginas/AuthRoute";
import Public from "./paginas/Public";

export const Routes = createBrowserRouter([
    {path: "/", element: <div><span>Bienvenida</span><br/><Link to={`./users`}>Ver Usuarios</Link>
    </div>},
    {path: "/users", element: <Users/>},
    {path: "users/userDetail/:userId", element: <UserDetail />, loader: userLoader,},
    {path:"/private", element: <AuthRoute><Private/></AuthRoute>},
    {path:"/public", element: <Public/>}
    ]);