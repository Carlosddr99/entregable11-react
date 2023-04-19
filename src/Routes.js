import {createBrowserRouter} from "react-router-dom";
import Users from "./paginas/Users";
import UserDetail, {loader as userLoader,} from "./paginas/UserDetail";

export const Routes = createBrowserRouter([
    {path: "/", element: <div>Bienvenida</div>},
    {path: "/users", element: <Users/>},
    {path: "users/userDetail/:userId", element: <UserDetail />, loader: userLoader,},
    ]);