import { HTMLAttributes, ReactNode } from 'react';

interface CrewMainDivPropsInterface extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
  }

export const CrewMainDiv = ({children,...props} : CrewMainDivPropsInterface) => {
    return(
        <div className="crew-main-div">
        {children}
           </div>
    )
}