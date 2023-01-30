import React from 'react';
import { useParams } from 'react-router-dom';


export function PersonalChangeInfo() {
    //We can access whatever value is set to :id param here, maybe fetch a single user info
    const { id } = useParams();

    return (
        <div className="personal-info-change-div">
            <ul className="personal-info-change-ul">
                <li className="personal-info-change-li">Id: {id}</li>
                <li className="personal-info-change-li">First Name: Pedro</li>
                <li className="personal-info-change-li">Last Name: Leite</li>
                <li className="personal-info-change-li">Age: 30</li>
                <li className="personal-info-change-li">Gender: M</li>
            </ul>
        </div>
        )
  }