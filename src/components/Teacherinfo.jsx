import faisal from "../assets/faisalsir.jpg";
import head from "../assets/hasansir.jpg";
import imgNot from "../assets/imgNot.jpg";
import rahimsir from "../assets/rahimsir.jpg";
import surajitsir from "../assets/surujitsir.jpg";
import OtherTeacher from "./OtherTeacher";
function Teacherinfo() {
  return (
    <div className="">
      <h1 className="middleman versiontwo">Department Head</h1>

      <div className="head-sir-flex">
        <div className="head-pic">
          <img src={head} />
        </div>
        <div className="head-sir-details">
          <h3>Professor</h3>
          <h1>Mohammad Hassanul Islam</h1>
          <h4>Department Head</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
            officia quam, odit, eveniet vero veniam provident libero sapiente
            veritatis, minus ducimus vitae possimus! Nam aliquam consequatur
            optio nostrum repellendus et?
          </p>
        </div>
      </div>

      <h1 className="middleman">Other faculty Member</h1>

      <div className="other-teacher-flex">
        <OtherTeacher
          mode="Laila Arjuman Banu"
          img={imgNot}
          designation="Associate Professor"
        />

        <OtherTeacher
          mode="Abdur Rahim"
          img={rahimsir}
          designation="Assistant Professor"
        />

        <OtherTeacher
          mode="Surajit Barua"
          img={surajitsir}
          designation="Assistant Professor"
        />

        <OtherTeacher
          mode="Jesmin Akter"
          img={imgNot}
          designation="Assistant Professor"
        />

        <OtherTeacher
          mode="Faisal Mohammad Mainol Quader"
          img={faisal}
          designation="Lecturer"
        />
      </div>
    </div>
  );
}

export default Teacherinfo;
