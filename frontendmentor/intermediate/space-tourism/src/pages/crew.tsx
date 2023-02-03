import React, { useState, useRef, useEffect, useContext } from 'react';
import useSetCrewActiveButton from '../hooks/useSetCrewActiveButton';
import { DataContext } from '../context/DataContext';
import { CurrentCrewProvider } from "../context/CurrentCrewContext";
import { CrewCarrosselButtons } from '../components/CrewPage/CrewCarrosselButtons';
import { CrewMainDiv } from '../components/CrewPage/CrewMainDiv';
import { CrewPageInfo } from '../components/CrewPage/CrewPageInfo';
import { CrewImg } from '../components/CrewPage/CrewImg/CrewImg';

export const Crew = () => {
  // const { crewData, setCrewData } = useContext(CurrentCrewContext);

    return (
      <CurrentCrewProvider>
        <CrewMainDiv>
          <CrewImg />
          <CrewPageInfo />
          <CrewCarrosselButtons />
        </CrewMainDiv>
      </CurrentCrewProvider>
    );
}