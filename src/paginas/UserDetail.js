import { useEffect, useState } from 'react';
import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
    const userId = params.userId;
    return { userId };
}

export default function UserDetail(){

    const { userId } = useLoaderData();

    const[ user, setUser] = useState()

    useEffect(()=>{
        console.log(`https://jsonplaceholder.typicode.com/users/${userId}`);
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).
        then(response => response.json()).
        then(data => (setUser(data)))
    },[]);

    return(
        <div>
            {user!=null ? <div><span>Id: {user.id}</span><br/><span>Nombre: {user.name}</span></div> : null}
        </div>
    )
}