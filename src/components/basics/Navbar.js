import React from "react";

const Navbar = ({ filterItem, menuList }) => {
  return (
    <>
      <div className="container">
        <nav>
          {menuList.map((curElem) => {
            return (
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  onClick={() => filterItem(curElem)}
                >
                  {curElem}
                </button>
            );
          })}        
        </nav>
      </div>
    </>
  );
};

export default Navbar;
