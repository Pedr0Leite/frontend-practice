import { HTMLAttributes } from 'react';
import * as Styled from './CardSubTitle.styled';

interface CardSubTitleProps extends HTMLAttributes<HTMLDivElement> {
    subtitle: string;
  }


  export function CardTitleAndLogo({ subtitle, ...props }: CardSubTitleProps) {
    return (
        <Styled.CardSubTitle></Styled.CardSubTitle>
    )
}