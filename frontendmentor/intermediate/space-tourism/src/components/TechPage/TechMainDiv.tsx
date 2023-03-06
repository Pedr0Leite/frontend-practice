import { HTMLAttributes, ReactNode } from 'react';


interface TechMainDivPropsInterface extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
  }

export const TechMainDiv = ({children, ...props} : TechMainDivPropsInterface) => {
  
    return(
        <div className="tech-main-div">
           {children}
        </div>
    )
}