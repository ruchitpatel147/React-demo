import React , {useState} from 'react'


function HookCounterTwo () {
  const initialCount = 0;
  const [count, setCounter] = useState(initialCount)

  const fun = () => {
    setCounter(prevCount => prevCount+5)
  }
  return(
    <div>
      Count: {count}
      <button onClick={() => setCounter(initialCount)}>Reset</button>
      <button onClick={() => setCounter(prevCount => prevCount + 1)}>Increment</button>
      <button onClick={() => setCounter(prevCount => prevCount - 1)}>Decrement</button>
      <button onClick={fun}>5 +</button>
    </div>
  )
}

export default HookCounterTwo