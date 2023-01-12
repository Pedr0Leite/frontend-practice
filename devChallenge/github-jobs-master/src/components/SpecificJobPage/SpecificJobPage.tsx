/* eslint-disable react-hooks/rules-of-hooks */
import { HTMLAttributes, ReactNode, useContext } from 'react';
import { AlwaysTheSameDescriptionContext, ShowSpecificJobContext, SpecificJobSelectedContext  } from '../../App';

import * as Styled from './SpecificJobPage.styled';

const convertTime = (miliseconds:number) => {
    var valueDate = new Date(miliseconds * 1000);
    return valueDate.toLocaleDateString();
    }

interface SpecificJobPageProps extends HTMLAttributes<HTMLDivElement>{

}

export function SpecificJobPage({...props}: SpecificJobPageProps){

    const description = useContext(AlwaysTheSameDescriptionContext);
    
    const ShowSpecificJobObj = useContext(ShowSpecificJobContext);
    if(!ShowSpecificJobObj){
        return null
    }

    const {showSpecificJob, setShowSpecificJob} = ShowSpecificJobObj;

    const specificJobObj = useContext(SpecificJobSelectedContext);

    if(!specificJobObj) return null
    const {specificJob, setSpecificJob} = specificJobObj;

     if(!specificJob) {
        return null;
     }
    
     const jobObj = Object(specificJob);

    const handleClick = (() => {
        setSpecificJob({});
        setShowSpecificJob(false);
    })

    return (
<div className="specific-job">
        <div className="specific-job-leftside">
          <a href="#" onClick={() =>{handleClick()}}> &#x2190; Back to Search</a>
          <h6>How to Apply</h6>
          <div className="specific-job-leftside-howtoapply">
            Please email a copy of your resume and online portfolio to 
            <a href={"mailto:sendusthecv@.com"}> sendusthecv@{jobObj.companyName}.com</a>
          </div>
        </div>
        <div className="specific-job-rightside">
          <div className="specific-job-title">
            <h3>{jobObj.jobRole}</h3>
            <div className="specific-job-card-type-of-role">Full-Time</div>
          </div>
          <div className="posted-on">{convertTime(jobObj.postedOn)}</div>
          <div className="specific-job-company-and-logo-and-location">
            <img className="card-logo" key={jobObj.guid} alt={jobObj.guid} src={jobObj.logo}></img>
            <div className="specific-job-company-and-location">
              <div className="specific-job-company">{jobObj.companyName}</div>
              <div className="specific-job-location">{jobObj.locationRestrictions.length !== 0 ? jobObj.locationRestrictions[0] : 'Remote'}</div>
            </div>
          </div>
          <div id="specific-job-description" className="specific-job-description">
            <h5>Description of the Role</h5>
           {description}
            </div>
        </div>
      </div>
    )
}