import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux/cake/cakeAction";
// import { BUY_CAKE } from "../redux/cake/cakeType";
// import store from '../redux/store'

const HooksCakeContainer = () => {
  const [number, setNumber] = useState(1);
  const cakeNubs = useSelector((state) => state.cakes.numOfCakes);
  const dispatch = useDispatch(number);
  console.log("cakeNubs :", cakeNubs);
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <h2>
          蛋糕现货： <span>{cakeNubs}</span> 个
        </h2>
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button onClick={() => dispatch(buyCake(number))}>
          我要 {number} 个
        </button>
      </div>
    </div>
  );
};

export default HooksCakeContainer;
