import React from "react";

const menuCards = ({ menuData }) => {
    
  return (
    <>
    <div className="container">
    <div className="row" >
      {menuData.map((curElem) => {
        const {id, name, category, discription, image} = curElem;
        return (
          <>
              <div className="col-lg-4">
                <div className="card" key={id}>
                
                <div className="card-body">
                   <div>
                    <span className="card-no">{id}</span>
                  </div> 
                  <div className="card-author subtitle">{category}</div>
                  <h3 className="card-title">{name}</h3>
                  <div className="dis">{discription}</div>

                  <div className="card-read"> Read </div>
                </div>
                <img src={image} alt="images" className="card-media" />

                <div className="card-tag"> 
                 <button className="btn btn-primary">Order Now</button> 
                </div>
              </div>
            </div>
            
          </>
        );
      })}
      </div>
      </div>
    </>
  );
};

export default menuCards;
