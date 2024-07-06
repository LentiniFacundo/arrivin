import React, { useState } from 'react'

const ItemCount = ({stock}) => {
    let [counter, setCounter] = useState(0)

    const countUp = () => {
        (counter < stock) && setCounter(counter + 1);
    }

    const countDown = () => {
      counter && setCounter(counter - 1);
    }

  return (
    <div>
      <p>ItemCount: {counter}</p>
      <p>Stock: {stock}</p>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </div>
  )
}

export default ItemCount