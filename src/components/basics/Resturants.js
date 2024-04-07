import React, { useState } from "react";
import "./Resturants.css";
import Menu from "../menuApi";
import MenuCards from "./menuCards";
import Navbar from "./Navbar";

const uniqueList = [
    ...new Set(
        Menu.map((curElem) =>{ 
            return curElem.category;
         })
    ),
    "All",
  ];

  console.log(uniqueList);

const Resturants = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList] = useState(uniqueList);

  

  const filterItem = (category) => {
    if(category === "All"){
       setMenuData(Menu);
       return
    }

    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });

    setMenuData(updatedList);
  };

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCards menuData={menuData} />
    </>
  );
};

export default Resturants;
