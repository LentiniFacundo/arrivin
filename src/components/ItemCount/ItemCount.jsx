import React, { useState } from 'react'
import Count from './Count';

const ItemCount = ({stock}) => {
    let [counter, setCounter] = useState(1)

    const countUp = () => {
        (counter < stock) && setCounter(counter + 1);
    }

    const countDown = () => {
      (counter > 1) && setCounter(counter - 1);
    }

    const clearCounter = () => setCounter(1)

  return (
    <Count counter={counter} countUp={countUp} countDown={countDown} clearCounter={clearCounter} stock={stock} />
  )
}

export default ItemCount