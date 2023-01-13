import { HTMLAttributes, ReactNode } from 'react';

import * as Styled from './Button.styled';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    content: ReactNode;
  }

  export function Button({ content, ...props }: ButtonProps) {
    return <Styled.NextButton data-testid="cardnextbutton" {...props}>{content}</Styled.NextButton>;
  }