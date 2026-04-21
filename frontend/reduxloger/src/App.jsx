// src/App.js

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cakeActions } from "./features/cake/cakeSlice";
import { icecreamActions } from "./features/icecream/iceCreamSlice";

function App() {
  const cakes = useSelector((state) => state.cake.numOfCakes);
  const icecreams = useSelector((state) => state.icecream.numOfIcecreams);

  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Redux Toolkit Demo</h1>

      <h2>Cakes: {cakes}</h2>
      <h2>Ice Creams: {icecreams}</h2>

      <button onClick={() => dispatch(cakeActions.cake_ordered(1))}>
        Buy Cake (Free IceCream 🍦)
      </button>

      <br /><br />

      <button onClick={() => dispatch(icecreamActions.icecream_sold(1))}>
        Buy IceCream
      </button>
    </div>
  );
}

export default App;