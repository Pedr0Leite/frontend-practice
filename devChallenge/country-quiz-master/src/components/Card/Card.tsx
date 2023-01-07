import { HTMLAttributes } from 'react';
import * as Styled from './Card.styled';

//Sub-Components
import { CardSubTitle } from './SubTitle/CardSubTitle.styled';
import { Button } from './../Button/Button';

//Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';


interface DivProps extends HTMLAttributes<HTMLDivElement> {
    question: string;
    nextQuestion: (e: any) => void;
    onClickOption: (value: number) => void;
    classChoice1: string;
    classChoice2: string;
    classChoice3: string;
    classChoice4: string;
    currentQuestionAnswer: Array<string>;
  }

interface ListProps extends HTMLAttributes<HTMLUListElement>  {
    onClickOption: (value: number) => void;
    classChoice1: string;
    classChoice2: string;
    classChoice3: string;
    classChoice4: string;
    currentQuestionAnswer: Array<string>;
    
}

function ListOfQuestions({onClickOption, classChoice1, classChoice2, classChoice3, classChoice4,currentQuestionAnswer, ...props}: ListProps){
    return (
        <>
            <li data-testid="cardlirightchoice" onClick={() => {onClickOption(1)}} className={'card-li-choice' + classChoice1}>
                <Styled.CardLiFirstSpan>A</Styled.CardLiFirstSpan>
                <Styled.CardLiSecondSpan data-testid="cardlispanoption">{currentQuestionAnswer[0]}</Styled.CardLiSecondSpan>
                {classChoice1 === '-right' ? <FontAwesomeIcon id="icon-correct1" className="icon-correct1" icon={faCircleCheck}/> : null}
                {classChoice1 === '-wrong' ? <FontAwesomeIcon id="icon-wrong1" className="icon-wrong1" icon={faCircleXmark}/> : null}
            </li>
            <li data-testid="cardliwrongchoice" onClick={() => {onClickOption(2)}} className={'card-li-choice' + classChoice2}>
                <Styled.CardLiFirstSpan>B</Styled.CardLiFirstSpan>
                <Styled.CardLiSecondSpan data-testid="cardlispanoption">{currentQuestionAnswer[1]}</Styled.CardLiSecondSpan>
                {classChoice2 === '-right' ? <FontAwesomeIcon id="icon-correct2" className="icon-correct2" icon={faCircleCheck}/> : null}
                {classChoice2 === '-wrong' ? <FontAwesomeIcon id="icon-wrong2" className="icon-wrong2" icon={faCircleXmark}/> : null}
            </li>
            <li data-testid="cardlidisablechoice" onClick={() => {onClickOption(3)}} className={'card-li-choice' + classChoice3}>
                <Styled.CardLiFirstSpan>C</Styled.CardLiFirstSpan>
                <Styled.CardLiSecondSpan data-testid="cardlispanoption">{currentQuestionAnswer[2]}</Styled.CardLiSecondSpan>
                {classChoice3 === '-right' ? <FontAwesomeIcon id="icon-correct3" className="icon-correct3" icon={faCircleCheck}/> : null}
                {classChoice3 === '-wrong' ? <FontAwesomeIcon id="icon-wrong3" className="icon-wrong3" icon={faCircleXmark}/> : null}
            </li>
            <li onClick={() => {onClickOption(4)}} className={'card-li-choice' + classChoice4}>
                <Styled.CardLiFirstSpan>D</Styled.CardLiFirstSpan>
                <Styled.CardLiSecondSpan data-testid="cardlispanoption">{currentQuestionAnswer[3]}</Styled.CardLiSecondSpan>
                {classChoice4 === '-right' ? <FontAwesomeIcon id="icon-correct4" className="icon-correct4" icon={faCircleCheck}/> : null}
                {classChoice4 === '-wrong' ? <FontAwesomeIcon id="icon-wrong4" className="icon-wrong4" icon={faCircleXmark}/> : null}
            </li>
        </> 
    )
}

export function CardGame({question, nextQuestion,onClickOption, classChoice1, classChoice2, classChoice3, classChoice4,currentQuestionAnswer, ...props }: DivProps) {
return (
    <Styled.CardDiv>
        <CardSubTitle>{question}</CardSubTitle>
            <Styled.CardUl data-testid="card-ul">
            <ListOfQuestions data-testid="card-li" onClickOption={onClickOption} classChoice1={classChoice1} classChoice2={classChoice2} classChoice3={classChoice3} classChoice4={classChoice4} currentQuestionAnswer={currentQuestionAnswer}></ListOfQuestions>
            </Styled.CardUl>
            <Styled.CardButtonDiv>
        <Button onClick={nextQuestion} content="Next !"></Button>
      </Styled.CardButtonDiv>
    </Styled.CardDiv>
)}