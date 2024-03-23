import React, { useEffect, useState } from "react";

function Api3() {
  useEffect(() => {
    Api();
  }, []);
  const [variable, setvariable] = useState([]);
  const Api = async () => {
    const Myapi = await fetch("https://fakestoreapi.com/products");
    const Myjsonapi = await Myapi.json();

    setvariable(Myjsonapi);
  };
  return (
    <>
      {variable.length > 0 ? (
              <div className="div-main">
        <>
          {variable.map((items) => {
            return (
              <>
                  <div className="container-1">
                    <div className="title">
                      TITLE: <h2>{items.title}</h2>
                    </div>
                    <div className="image">
                      IMAGE: <img src={items.image} width="30%" alt="image1" />
                    </div>
                    <div className="price">
                      PRICE:<h2>{items.price}</h2>
                    </div>
                    <div className="category">
                      CATEGORY:<h2>{items.category}</h2>
                    </div>
                    <div className="desp">
                      DESCRIPTION:<h2>{items.description}</h2>
                    </div>
                    <div className="rate">
                      RATE:<h2>{items.rating.rate}</h2>
                    </div>
                    <div className="count">
                      COUNT:<h2>{items.rating.count}</h2>
                    </div>
                  </div>
              </>
            );
        }
        
        )}
        </>
        </div>
      ) : (
        <>
          {/* <h1>hello</h1> */}
          {/* <h1>loading...</h1> */}

          <img
            src="https://media.tenor.com/1s1_eaP6BvgAAAAC/rainbow-spinner-loading.gif"
            alt="spinner"
            className="spinner"
          />
        </>
      )}
    </>
  );
}

export { Api3 };
