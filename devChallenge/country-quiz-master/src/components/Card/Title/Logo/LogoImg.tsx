import { HTMLAttributes, ReactNode } from 'react';
import * as Styled from './LogoImg.styled';


interface ImgProps extends HTMLAttributes<HTMLImageElement> {
    logo: string
  }


  export function CardLogo({ logo, ...props }: ImgProps) {
    return (
        <Styled.CardSvg src={logo}></Styled.CardSvg>
    )
}