import { HTMLAttributes, ReactNode } from 'react';
import * as Styled from './FinishCardTitle.sytled';


interface FinishCardTitleDiv extends HTMLAttributes<HTMLImageElement> {
    // logo: string
    title: string;
    correctAnswers: number;
  }


  export function FinishCardTitle({title, correctAnswers, ...props }: FinishCardTitleDiv) {
    return (
        <Styled.CardTitleDivFinish>
            <Styled.CardTitleFinish>{title}</Styled.CardTitleFinish>
            <Styled.CardTitleSpanFinish>You got <Styled.CardTitleBFinish data-testid="correctanswers">{correctAnswers}</Styled.CardTitleBFinish> correct answers</Styled.CardTitleSpanFinish>
        </Styled.CardTitleDivFinish>
    )
}