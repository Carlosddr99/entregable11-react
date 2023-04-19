import { useEffect, useState } from 'react';
import {Link} from "react-router-dom";

export default function Users(){

    const[ users, setUsers] = useState([])

    useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/users').
        then(response => response.json()).
        then(data => (setUsers(data)))
    
    },[]);

    return(
        <div>
            {users.map(item =>(
                <div>
                    <span>Nombre Usuario: {item.name}</span>
                    <br/>
                    <span>Email: {item.email}</span>   
                    <br/>
                    <Link to={`./userDetail/${item.id}`}>Ver Destalle</Link>
                    <br/>
                    <br/>
                </div>
            ))}
        </div>
    )
}