import React from 'react';

const Student = (props) => {
    const {name, id, department, blood} = props;

    const displayName = name || 'N/A';
    const displayId = id || 'N/A';
    const displayDepartment = department || 'N/A';
    const displayBlood = blood || 'N/A' ;
  
    return (
      <div className="card">
        <div className="cardImg">
            <img src="user.png"/>
        </div>
        <div className="cardInfo">
            <h2>Name: {displayName}</h2>
            <p>ID: {displayId}</p>
            <p>Department: {displayDepartment}</p>
            <p>Blood Group: {displayBlood}</p>
        </div>
      </div>
    );
};
  

export default Student