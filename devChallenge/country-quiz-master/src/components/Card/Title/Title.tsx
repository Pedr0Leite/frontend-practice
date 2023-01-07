import { HTMLAttributes } from 'react';
import * as Styled from './Title.styled';

import { CardLogo } from './Logo/LogoImg';

interface DivProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    logo: string;
    showFinishCard: boolean
  }


  export function CardTitleAndLogo({ title, logo, showFinishCard, ...props }: DivProps) {
    return (
        <Styled.CardTitleAndLogo >  
        <Styled.CardTitle data-testid="cardtitle">{title}</Styled.CardTitle>
      {showFinishCard ? <CardLogo logo={logo}></CardLogo> : null}
      </Styled.CardTitleAndLogo>
    )
}