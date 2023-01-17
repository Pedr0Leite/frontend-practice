import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { LOAD_USERS } from '../GraphQL/Queries';

function GetUsers(){
// options that I can get
const { error, loading, data } = useQuery(LOAD_USERS);

const [users, setUsers] = useState([]);

useEffect(()=> {
    if(data){
        setUsers(data.getAllUsers);
        // setUsers(data.rockets);
    }
    console.log('users :', users);
}, [data])
            
    return(
        <div>
{users.map((val)=> {
    return <h1>{val.firstName}</h1>
})}
         </div>
//         <div>
// {users.map((val)=> {
//     return <h1>{val.name}</h1>
// })}
//         </div>
    )
}

export default GetUsers;