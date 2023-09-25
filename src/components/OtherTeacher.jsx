// import React from 'react'
function OtherTeacher(props) {
  return (
    <div className="main-other-teacher">
      <div className="otherTeacher-pic-holder">
        <img src={props.img} alt="" />
      </div>
      <div className="details-parents">
        <h4 className="teachers-name">{props.mode}</h4>
        <h4 className="teacher-details">{props.designation}</h4>
      </div>
    </div>
  );
}

export default OtherTeacher;
