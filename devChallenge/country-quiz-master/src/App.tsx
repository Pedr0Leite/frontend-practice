import React, { useState }  from 'react';
import './App.css';
import quizdata from "./quizdata.json";
import logo from './assets/undraw_adventure_4hum 1.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

import { Button } from './components/Button/Button';
import { CardTitleAndLogo } from './components/Card/Title/Title';
import { CardSubTitle } from './components/Card/SubTitle/CardSubTitle.styled';

function App() {

  const [data, setData] = useState(quizdata.questions);
  const [currentQuestion, setCurrentQuestion] = useState(data[0]);
  const [correctAnswer, setCorrectAnswer] = useState(data[0].correct_answer);

  //fa-regular fa-circle-check
  //fa-regular fa-circle-xmark
  

  return (
    <div className="App">
      <CardTitleAndLogo title="country quiz" logo={logo}></CardTitleAndLogo>
      <div id='card-div' className='card-div'>
        <CardSubTitle>{currentQuestion.question}</CardSubTitle>
        <ul id='card-ul' className='card-ul'>
        {
          <>
          <li className='card-li-choice-right'><span id='card-li-first-span' className='card-li-first-span'>A</span><span id='card-li-second-span' className='card-li-second-span'>{currentQuestion.answers[0]}</span><FontAwesomeIcon className="icon-correct" icon={faCircleCheck} /></li>
          <li className='card-li-choice-wrong'><span id='card-li-first-span' className='card-li-first-span'>B</span><span id='card-li-second-span' className='card-li-second-span'>{currentQuestion.answers[1]}</span><FontAwesomeIcon className="icon-wrong" icon={faCircleXmark} /></li>
          <li className='card-li-choice'><span id='card-li-first-span' className='card-li-first-span'>C</span><span id='card-li-second-span' className='card-li-second-span'>{currentQuestion.answers[2]}</span></li>
          <li className='card-li-choice'><span id='card-li-first-span' className='card-li-first-span'>D</span><span id='card-li-second-span' className='card-li-second-span'>{currentQuestion.answers[3]}</span></li>
          </> 
        }
          {/* <li><span id='card-li-first-span' className='card-li-first-span'>A</span><span id='card-li-second-span' className='card-li-second-span'>QUESTION ONE</span></li>
          <li><span id='card-li-first-span' className='card-li-first-span'>B</span><span id='card-li-second-span' className='card-li-second-span'>QUESTION TWO</span></li>
          <li><span id='card-li-first-span' className='card-li-first-span'>C</span><span id='card-li-second-span' className='card-li-second-span'>QUESTION THREE</span></li>
          <li><span id='card-li-first-span' className='card-li-first-span'>D</span><span id='card-li-second-span' className='card-li-second-span'>QUESTION FOUR</span></li> */}
        </ul>
      <div className="card-button">
        <Button content="Next !"></Button>
      </div>
      </div>
    </div>
  );
}

export default App;


// const object1 = {
//   "number": 1,
//   "question": "Eighteen thousandths, written as a decimal, is:",
//   "answers": [
//     "0.00018",
//     "0.0018",
//     "0.018",
//     "0.18"
//   ],
//   "correct_answer": 1
// }

// for (const [key, value] of Object.entries(object1)) {
// console.log(`${key}: ${value}`);
// }

// // expected output:
// //"number: 1"
// //"question: Eighteen thousandths, written as a decimal, is:"
// //"answers: 0.00018,0.0018,0.018,0.18"
// //"correct_answer: 1"