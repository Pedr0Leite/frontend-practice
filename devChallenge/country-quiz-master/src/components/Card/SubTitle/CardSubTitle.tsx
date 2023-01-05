import { HTMLAttributes, ReactNode } from 'react';
import * as Styled from './CardSubTitle.styled';

interface DivProps extends HTMLAttributes<HTMLDivElement> {
    // children: ReactNode;
    subtitle: string;
  }


  export function CardTitleAndLogo({ subtitle, ...props }: DivProps) {
    return (
        <Styled.CardSubTitle></Styled.CardSubTitle>
    )
}