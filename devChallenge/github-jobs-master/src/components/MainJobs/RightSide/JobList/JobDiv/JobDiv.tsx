import { HTMLAttributes } from 'react';

import * as Styled from './JobDiv.styled';

interface JobDivProps extends HTMLAttributes<HTMLDivElement>{
}

export function JobDiv({...props}: JobDivProps){
    return(
        <Styled.RighSideJobsDiv>
            
        </Styled.RighSideJobsDiv>
    )
}