import React from "react";
import styles from "../../styles/Users.module.css";
import Link from "next/link"

//Runs at build time
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { users: data }
  }
};

interface UsersInterface {
  users: Array<Object>
}

export default function Users({ users }: UsersInterface) {
  return (
    <div>
      <h1>All Users sing a song!</h1>
      { users.map((_user:any) => (
        <Link href={`/users/${_user.id}`} key={_user.id} className={styles.singleUser}>
            <h3>{_user.name}</h3>
        </Link>
      ))}
    </div>
  );
}
