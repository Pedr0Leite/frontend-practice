import React, { useEffect, useState }  from 'react';
import './App.css';

//Data
import quizdata from "./quizdata.json";

//Logos
import logo from './assets/undraw_adventure_4hum 1.svg';
import finishLogo from './assets/undraw_winners_ao2o 2.svg';

//Components
import { CardTitleAndLogo } from './components/Card/Title/Title';
import { FinishCard } from './components/Finish Card/Card/FinishCard';
import { CardGame } from './components/Card/Card';

//Hooks
// 


function App() {

  const [data, setData] = useState(quizdata.questions);
  const [currentQuestion, setCurrentQuestion] = useState(data[0]);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(data[0].number);
  const [correctAnswer, setCorrectAnswer] = useState(data[0].correct_answer);
  const [numberOfCorrect, setNumberOfCorrect] = useState(0);
  const [showFinishCard, setShowFinishCard] = useState(false);

  const [classChoice1, setClassChoice1] = useState('');
  const [classChoice2, setClassChoice2] = useState('');
  const [classChoice3, setClassChoice3] = useState('');
  const [classChoice4, setClassChoice4] = useState('');
  
  useEffect(() => {
    if(data.length === 0){
      setShowFinishCard(true);
    }else{
      setCurrentQuestion(data[0]);
      setCorrectAnswer(data[0].correct_answer);
      setCurrentQuestionNumber(data[0].number);
    }
  }, [data]);
  
  const onClickOption = (optionNumber: Number) => {
    if(correctAnswer === optionNumber){
      setNumberOfCorrect(Number(numberOfCorrect) + 1);
      //correct answer
      switch (optionNumber) {
        case 1:
          setClassChoice1('-right')
          setClassChoice2('-disabled');
          setClassChoice3('-disabled');
          setClassChoice4('-disabled');
          break;
          case 2:
          setClassChoice2('-right')
          setClassChoice1('-disabled');
          setClassChoice3('-disabled');
          setClassChoice4('-disabled');
          break;
          case 3:
          setClassChoice3('-right')
          setClassChoice1('-disabled');
          setClassChoice2('-disabled');
          setClassChoice4('-disabled');
          break;
          case 4:
          setClassChoice4('-right')
          setClassChoice1('-disabled');
          setClassChoice2('-disabled');
          setClassChoice3('-disabled');
          break;
      }

    }else{
      //Wrong answer
      switch (correctAnswer) {
        case 1:
          setClassChoice1('-right')
          setClassChoice2('-disabled');
          setClassChoice3('-disabled');
          setClassChoice4('-disabled');
          break;
          case 2:
          setClassChoice2('-right')
          setClassChoice1('-disabled');
          setClassChoice3('-disabled');
          setClassChoice4('-disabled');
          break;
          case 3:
          setClassChoice3('-right')
          setClassChoice1('-disabled');
          setClassChoice2('-disabled');
          setClassChoice4('-disabled');
          break;
          case 4:
          setClassChoice4('-right')
          setClassChoice1('-disabled');
          setClassChoice2('-disabled');
          setClassChoice3('-disabled');
          break;
      }

      switch (optionNumber) {
        case 1:
          setClassChoice1('-wrong');
          break;
          case 2:
          setClassChoice2('-wrong')
          break;
          case 3:
          setClassChoice3('-wrong')
          break;
          case 4:
          setClassChoice4('-wrong')
          break;
      }
    }
  }

  const nextQuestion = (e: any) => {
      e.preventDefault();
      setClassChoice1('');
      setClassChoice2('');
      setClassChoice3('');
      setClassChoice4('');

      const removeQuestion = data.filter(obj => obj.number !== currentQuestionNumber);
      if(removeQuestion.length !== 0){
        setData(removeQuestion);
      }else{
        setShowFinishCard(true);
      }
  }

  const tryAgain = () => {
    setClassChoice1('');
    setClassChoice2('');
    setClassChoice3('');
    setClassChoice4('');
    setNumberOfCorrect(0);
    setData(quizdata.questions);
    setShowFinishCard(false);
  }

  return (
    <div className="App">
      <CardTitleAndLogo title="country quiz" logo={logo} showFinishCard={!showFinishCard}></CardTitleAndLogo>
      {showFinishCard ? <FinishCard finishLogo={finishLogo} correctAnswers={numberOfCorrect} onclickforbutton={tryAgain}></FinishCard> : null}
      {!showFinishCard ? <CardGame onClickOption={onClickOption} classChoice1={classChoice1} classChoice2={classChoice2} classChoice3={classChoice3} classChoice4={classChoice4} currentQuestionAnswer={currentQuestion.answers} question={currentQuestion.question} nextQuestion={(e) => {nextQuestion(e)}}></CardGame> : null}
      <footer>
     <span className="created-by-text-span">created by Pedr0Leite - devChallenges.io</span>
     </footer>
</div>
  );
}

export default App;