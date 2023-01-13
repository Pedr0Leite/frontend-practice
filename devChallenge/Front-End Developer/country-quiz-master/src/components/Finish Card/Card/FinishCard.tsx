import { HTMLAttributes, ReactNode } from 'react';
import * as Styled from './FinishCard.styled';

import { FinishCardTitle } from './../Finish Title/FinishCardTitle';


interface CardLogoProps extends HTMLAttributes<HTMLImageElement> {
    logo: string
  }

interface FinishCardDivProps extends HTMLAttributes<HTMLDivElement> {
    // children: ReactNode;
    correctAnswers: number;
    finishLogo: string;
    onclickforbutton: () => void;
  }

  interface TryAgainProps extends HTMLAttributes<HTMLButtonElement> {
    content: string;
    onclicknext: () => void;
  }

function CardLogo({ logo, ...props }: CardLogoProps) {
    return (
        <Styled.CardSvgFinish src={logo}></Styled.CardSvgFinish>
    )
}

function TryAgainButton({content, onclicknext,...props} :TryAgainProps){
  return <Styled.CardButtonFinish data-testid="cardbuttontryagain" onClick={onclicknext}>{content}</Styled.CardButtonFinish>
}

export function FinishCard({finishLogo, correctAnswers, onclickforbutton, ...props }: FinishCardDivProps) {
    return (
    <Styled.CardDivFinish>
        <CardLogo logo={finishLogo}></CardLogo>
        <FinishCardTitle title="Results" correctAnswers={correctAnswers}></FinishCardTitle>
        <TryAgainButton onclicknext={onclickforbutton} content="Try Again"></TryAgainButton>
    </Styled.CardDivFinish>
    )
}