import { HTMLAttributes, ReactNode } from 'react';

import * as Styled from './LeftSideMainDiv.styled';


interface LeftsideDivProps extends HTMLAttributes<HTMLHeadingElement> {
    children: ReactNode;
    showSearch: boolean;
  }

  export function LeftSideMainDiv({children,showSearch,...props }: LeftsideDivProps) {
    return (<Styled.LeftSideMainDiv showSearch={showSearch}>{children}</Styled.LeftSideMainDiv>);
  }