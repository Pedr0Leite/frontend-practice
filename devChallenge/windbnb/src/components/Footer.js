import React, { useState } from "react";

export default function Footer(props) {

    const clicked = props.clicked;
    
  return (
    <footer className={clicked === false ? "footer-main-big" : "footer-main"}>
      <span className="created-by-text-span">
        created by <span className="footer-username">Pedr0Leite</span> -
        devChallenges.io
      </span>
    </footer>
  );
}
