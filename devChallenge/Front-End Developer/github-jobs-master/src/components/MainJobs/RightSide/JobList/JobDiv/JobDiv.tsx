import React, { useEffect, useState, useContext, HTMLAttributes } from 'react';
// import { Pagination } from '../../../../Pagination/Pagination';
import { PaginationContext } from '../../../../../App';
import { Pagination } from 'antd';
import { JobDivCard } from "./JobCard/JobCard";

import * as Styled from "./JobDiv.styled";


interface JobDivProps extends HTMLAttributes<HTMLDivElement> {
  arrOfFive: Array<object>;
  initialData: Array<object>;
  loading: boolean;
  totalJobs: number;
  paginate: (number:number) => void;
}

export function JobDiv({ arrOfFive, initialData, totalJobs, loading, paginate, ...props }: JobDivProps) {
// This value comes from useContext aka state drilldown
    const jobsPerPage = useContext(PaginationContext);

  return (
    <Styled.RighSideJobsDiv>

     {!loading ? arrOfFive.map((job:any) => {
        return (
        <JobDivCard
        key={job.guid}
        title={job.title}
        logo={job.companyLogo} 
        company={job.companyName} 
        jobRole={job.title} 
        postedOn={job.pubDate} 
        guid={job.guid} 
        locationRestrictions={job.locationRestrictions} 
        categories={job.categories}
        >
        </JobDivCard>
        )
     }): null}

    {/* Pagination custom component not necessary since we are using 'antd' package*/}
    {/* <Pagination paginate={paginate} jobPerPage={jobsPerPage} totalJobs={totalJobs}/> */}
    <Pagination
    onChange={paginate}
    pageSize={Number(jobsPerPage)}
    total={totalJobs}
    showSizeChanger={false}
    />
    </Styled.RighSideJobsDiv>
  );
}