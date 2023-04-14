import React, { useState } from "react";
import Image from "next/image";
import * as Styled from "./Navbar.styled";
import moon from "../../public/icons/moon.svg";
import sun from "../../public/icons/sun.svg";

export default function Navbar() {
  const [lightOrDark, setLightOrDark] = useState(false);

  return (
    <Styled.NavMain>
      <Styled.Title>Where in the world</Styled.Title>
      <Styled.DarkLight onClick={() => setLightOrDark(!lightOrDark)}>
        {lightOrDark == false ? <Image src={moon} alt="moon" /> : <Image src={sun} alt="sun" />}
        {lightOrDark == false ? (
          <span>Dark Mode</span>
        ) : (
          <span>Light Mode</span>
        )}
      </Styled.DarkLight>
    </Styled.NavMain>
  );
}
