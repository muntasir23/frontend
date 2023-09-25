function Location() {
  return (
    <div className="locaton-flex">
      <div>
        <h1>Our Contact Info</h1>
        <h6>
          <i className="bi bi-map-fill"></i>Chawkbazar, Chittagong
        </h6>
        <h6>
          <i className="bi bi-envelope-fill"></i> demo@gmail.com
        </h6>
        <h6>
          <i className="bi bi-facebook"></i> Chittagong College
        </h6>
        <h6>
          <i className="bi bi-telephone-fill"></i> +8801882372807
        </h6>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.0174043198704!2d91.83428287417117!3d22.352971679648785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad2766a8247ce5%3A0xe89af28ebcae8e8!2sChittagong%20College!5e0!3m2!1sen!2sbd!4v1694534031274!5m2!1sen!2sbd"
          width="500"
          height="400"
          style={{ border: "0px" }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Location;
