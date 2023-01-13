import { HTMLAttributes, ReactNode } from 'react';

import * as Styled from './HeaderTitle.styled';

interface HeaderTitleH1 extends HTMLAttributes<HTMLHeadingElement> {
    content: ReactNode;
    boldPart: string;
  }

  export function HeaderTitle({ content, boldPart, ...props }: HeaderTitleH1) {
    return (<Styled.HeaderTitle ><Styled.HeaderTitleB>{boldPart}</Styled.HeaderTitleB>{content}</Styled.HeaderTitle>);
  }