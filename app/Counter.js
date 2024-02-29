import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, chagename } from "./counterSlice";

export function Counter() {
  const count = useSelector((c) => c.counter1.value);
  const name1 = useSelector((s) => s.counter1.name);

  const name2 = useSelector((s) => s.counter2.name);
  const dispatch = useDispatch();
  const [incrementAmount, setincrementAmount] = useState("chanaka");
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>
          {count}
          {name1}
          {name2}
        </span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <input
          type="text"
          value={incrementAmount}
          //  onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button onClick={() => dispatch(chagename(incrementAmount))}>
          Increment by Amount
        </button>
      </div>
    </div>
  );
}
