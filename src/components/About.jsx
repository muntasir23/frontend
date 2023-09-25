// import React from 'react'

function About() {
  return (
    <div className="flex-about">
      <div className="card-about">
        <i className="bi bi-person-video3"></i>
        <div>
          <h3>Faculty Member</h3>
          <h3>8+</h3>
        </div>
      </div>

      <div className="card-about">
        <i className="bi bi-people"></i>
        <div>
          <h3>Students</h3>
          <h3>600+</h3>
        </div>
      </div>

      <div className="card-about">
        <i className="bi bi-person-vcard"></i>
        <div>
          <h3>Stuff</h3>
          <h3>3+</h3>
        </div>
      </div>
    </div>
  );
}

export default About;
