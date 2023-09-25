// import React from 'react'
import { useState } from "react";
import ProductDetails from "../data/data.json";
function LetsTry() {
  const [product, setProduct] = useState(ProductDetails);

  const filterproduct = (product) => {
    const update = ProductDetails.filter((x) => {
      return x.cat === product;
    });
    setProduct(update);
  };

  //  const AllProducts = () =>{
  //   setProduct (Productdetails);
  // }

  // console.log(ProductDetails);
  return (
    <>
      <h1 className="letsTry-flex-h1">Seminar Booklist</h1>
      <div className="letsTry-flex">
        <div className="sidebarLets">
          <div className="sidebarfixed">
            <ul>
              <h3>You Can Filter</h3>
              <li onClick={() => filterproduct("hons1")}> Hons First Year</li>
              <li onClick={() => filterproduct("hons2")}>Hons Second Year</li>
              <li onClick={() => filterproduct("hons4")}>Hons Fouth Year</li>
            </ul>
          </div>
        </div>

        <div className="recods">
          <div className="records-flex">
            {product &&
              product.map((value, index) => {
                return (
                  <>
                    <div className="main-holder-bosss">
                      <div className="productBox" key={index}>
                        <img src={value.img} height={"100%"} width={"100%"} />
                      </div>
                      <div className="btn-holder">
                        <button className="btn-product">
                          {value.title}{" "}
                          <i
                            className="bi bi-book-fill"
                            style={{ marginLeft: "5px" }}
                          ></i>
                        </button>
                        <button className="btn-product link-product">
                          <a
                            href={value.link}
                            target="_blank"
                            style={{ color: "#f1eef5" }}
                            rel="noreferrer"
                          >
                            {" "}
                            visit{" "}
                            <i
                              className="bi bi-send-fill"
                              style={{ marginLeft: "5px" }}
                            ></i>
                          </a>
                        </button>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default LetsTry;
