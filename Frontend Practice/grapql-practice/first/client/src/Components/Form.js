import React, { useState } from "react";
import { CREATE_USER_MUTATION } from '../GraphQL/Mutations';
import { useMutation } from "@apollo/client";

function Form() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // The firt variable has to be the same defined on the backend
    const [createUser, { error }] = useMutation(CREATE_USER_MUTATION)

    const addUser = () => {
        createUser({
            variables: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
            }
        })

        if(error){
            console.log('Mutation Error: ' + error);
        }

        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
    };

  return (
    <div>
      <input
        value={firstName}
        type="text"
        placeholder="First Name"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <input
        value={lastName}
        type="text"
        placeholder="Last Name"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <input
      value={email}
        type="text"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
      value={password}
        type="text"
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={addUser}> Create User</button>
    </div>
  );
}

export default Form;