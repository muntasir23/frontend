// import React from "react";

import { useState } from "react";
import Player from "./Player";

function MathClub() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div className="MathClub">
        <h1>Lets Discuss About Our Club</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis illo
          atque impedit accusantium quae, consequuntur earum nihil esse quos
          voluptas sit necessitatibus repellendus quas, suscipit porro deserunt
          reprehenderit corporis eius officia vel ullam! Modi, id?
        </p>
        <button onClick={() => setShow(true)} className="btn-mathclub">
          Watch Us{" "}
          <i
            className="bi bi-youtube"
            style={{ marginLeft: "10px", fontSize: "30px" }}
          ></i>
        </button>
        {show !== false ? (
          <>
            <div className="video">
              <Player />
              <i className="bi bi-x-octagon" onClick={() => setShow(false)}></i>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default MathClub;
