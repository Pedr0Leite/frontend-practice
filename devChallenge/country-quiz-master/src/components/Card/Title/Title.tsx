import { HTMLAttributes, ReactNode } from 'react';
import * as Styled from './Title.styled';

import { CardLogo } from './Logo/LogoImg';

interface DivProps extends HTMLAttributes<HTMLDivElement> {
    // children: ReactNode;
    title: string;
    logo: string;
  }


  export function CardTitleAndLogo({ title, logo, ...props }: DivProps) {
    return (
        <Styled.CardTitleAndLogo>  
        <Styled.CardTitle>{title}</Styled.CardTitle>
      <CardLogo logo={logo}></CardLogo>
      </Styled.CardTitleAndLogo>
    )
}