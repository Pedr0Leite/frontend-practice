/* eslint-disable react-hooks/rules-of-hooks */
import { render } from "@testing-library/react";
import { HTMLAttributes, ReactNode, useReducer, useContext } from "react";
import { AlwaysTheSameDescriptionContext, ShowSpecificJobContext, SpecificJobSelectedContext } from '../../../../../../App';

import * as Styled from "./JobCard.styled";

const convertTime = (miliseconds:number) => {
var valueDate = new Date(miliseconds * 1000);
return valueDate.toLocaleDateString();
}


interface JobDivCardProps extends HTMLAttributes<HTMLDivElement> {
//   children: ReactNode;
  title: string;
  jobRole: string;
  logo: string;
  company: string;
  postedOn: number;
  guid: string;
  locationRestrictions: Array<string>;
  categories: Array<string>;
  children?:ReactNode;
}


export function JobDivCard({ title, logo, company, jobRole, postedOn, guid, locationRestrictions, categories, ...props }: JobDivCardProps) {
    const cardObj = {
      title: title,
      jobRole: jobRole,
      logo: logo,
      company: company,
      postedOn: postedOn,
      guid: guid,
      locationRestrictions: locationRestrictions,
      categories: categories,
    };

    const description = useContext(AlwaysTheSameDescriptionContext);
    
    const ShowSpecificJobObj = useContext(ShowSpecificJobContext);
    if(!ShowSpecificJobObj){
        return null
    }
    const {showSpecificJob, setShowSpecificJob} = ShowSpecificJobObj;

    const specificJobObj = useContext(SpecificJobSelectedContext)
    if(!specificJobObj){ 
        return null
    }

    const {specificJob, setSpecificJob} = specificJobObj;

    const handleClick = (() => {
        setSpecificJob(cardObj);
        setShowSpecificJob(true);
        
    })

    return (
      <div className="card" onClick={() => {handleClick()}}>
        <img className="card-logo" key={guid} alt={guid} src={logo}></img>
        <div className="card-job-info">
          <div className="card-company">{company}</div>
          <div className="card-job">{jobRole}</div>
          <div className="card-type-of-role">Full-Time</div>
        </div>
        <div className="card-location">{locationRestrictions.length !== 0 ? locationRestrictions : 'Remote'}</div>
        <div className="card-posted">{convertTime(postedOn)}</div>
      </div>
  );
}
