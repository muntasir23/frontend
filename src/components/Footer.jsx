import logo from "../assets/greeLogo.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-flex">
        <div>
          <img src={logo} height={"80px"} />
          <h5>
            <span> Department of</span> <br /> Mathematics
          </h5>
          <h6>Chawkbazar, Chittagong </h6>
          <h6>+8801882372807</h6>
        </div>

        <div>
          <h5>Quick Links</h5>
          <h6>
            <a href="#">National University</a>
          </h6>
          <h6>
            <a href="#">Chittagong College</a>
          </h6>
          <h6>
            <a href="#">News Page</a>
          </h6>
          <h6>
            <a href="#">Math-Family</a>
          </h6>
        </div>

        <div>
          <h5>Seminar Assistant</h5>
          <h6>Contact Number : +018*******</h6>
          <h6>Email Address: demo@gmai.com</h6>
        </div>
      </div>
    </div>
  );
}
