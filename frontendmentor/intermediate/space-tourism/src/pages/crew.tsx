import React, { useState, useRef, useEffect } from 'react';
import crew1 from "../assets/crew-0.png";

export const Crew = () => {

  const [selectedBtn, setSelectedBtn] = useState(0);
  const button0ref = React.useRef<HTMLButtonElement>(null);
  const button1ref = React.useRef<HTMLButtonElement>(null);
  const button2ref = React.useRef<HTMLButtonElement>(null);
  const button3ref = React.useRef<HTMLButtonElement>(null);

  useEffect(() =>{

    if(selectedBtn === 0){
      // console.log(button0ref)
      button0ref.classList.add()
    }else if(selectedBtn === 1){
    
    }else if(selectedBtn === 2){
    
    }else{

    }

  }, [selectedBtn])

  const onBtnClick = (value:number) => {
    setSelectedBtn(value);
  }
  
  // if(modalShow) {
  //   document.body.classList.add('active-modal')
  // } else {
  //   document.body.classList.remove('active-modal')
  // }

    return(
        <div className="crew-main-div">
          <div className="crew-img"><img alt="moon" src={crew1}></img></div>
        <div className="crew-subtitle">
          <span>02</span> CREW
        </div>
        <div className="crew-role">
        ROLE
        </div>
        <div className="crew-name">
        NAME
        </div>
        <div className="crew-sub-info">
        Let’s face it; if you want to go to space,
        you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, 
      and relax because we’ll give you a truly out of this world experience!
      </div>
      <div className="crew-main-btn">
        <button ref={button0ref} onClick={() => onBtnClick(0)} className="crew-btn"></button>
        <button ref={button1ref} onClick={() => onBtnClick(1)} className="crew-btn"></button>
        <button ref={button2ref} onClick={() => onBtnClick(2)} className="crew-btn"></button>
        <button ref={button3ref} onClick={() => onBtnClick(3)} className="crew-btn"></button>
      </div>
        </div>
    )
}