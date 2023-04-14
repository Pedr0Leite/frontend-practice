import React, { useState } from 'react'
import styles from "@/styles/Search.module.css";
import lent from "../../../public/icons/magnifying-glass.svg";
import Image from "next/image";

interface SearchInputInterface {
  handleChangeInput: (e:string) => void;
}

// export default function SearchInput({handleChangeInput}:SearchInputInterface) {
export default function SearchInput(props:any) {

  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e:React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newValue = e.currentTarget.value;

    setSearchInput(newValue);
    props.handleChangeInput(newValue);
  }

  return (
    <>
    <form className={styles.formSearch} action="">
    <input className={styles.inputSearch} type="text" onChange={(e:any) => handleChange(e)} placeholder='Search for a country...'/>
    <Image alt="lent" src={lent} />
    </form>
    </>
  )
}
