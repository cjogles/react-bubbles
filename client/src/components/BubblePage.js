import React, { useState, useEffect } from "react";
import {axiosWithAuth} from "../axiosWithAuth/AxiosWithAuth";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    axiosWithAuth().get('http://localhost:5000/api/api/colors')
        .then(res => {setColorList(res)}
    )
  },[])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
      <h2>Bubbles!</h2>
            {console.log(colorList.data)}
            <h1>
                { colorList.data !== undefined ? colorList.data.map(bubble => (
                    bubble.name + " "
                )) : null}
            </h1>
    </>
  );
};

export default BubblePage;
