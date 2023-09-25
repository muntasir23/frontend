// import React from 'react'

import { useState } from "react";
import LetsTry from "../components/LetsTry";
import Records from "../data/data.json";

function Teacher() {
  const [product, setProduct] = useState(Records);
  return (
    <div>
      <LetsTry product={product} setProduct={setProduct} />
    </div>
  );
}

export default Teacher;
