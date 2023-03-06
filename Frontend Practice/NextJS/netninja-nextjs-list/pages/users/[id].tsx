import React from 'react'

//Runs at build time - PATHS
export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((_user:any) => {
    return {
      params: { id: _user.id.toString() }
    }
  })

  return {
    paths: paths,
    fallback: false //fallback pages
  }
};


export const getStaticProps = async (context:any) => {
 
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();
  
  return {
    props: { user: data}
  }

};

interface DetailsInterface {
  user: {
    name?: string,
    email?: string,
    website?: string,
    address: {
      city: string
    }
  }
}


export default function Details({ user }: DetailsInterface) {
  return (
    <div>
       <h1>User {user.name}</h1>
       <p>{user.email}</p>
       <p>{user.website}</p>
       <p>{user.address.city}</p>
    </div>
  )
}
