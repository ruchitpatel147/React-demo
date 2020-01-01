import React , {useState, useEffect} from 'react'

function HookEffect () {
  const [count, setCounter] = useState(0)

  useEffect(() => {
    document.title = `You clicked ${count}`
  })
  return(
    <div>
      <button onClick={() => setCounter(count +1)}>click {count}</button>
    </div>
  )
}

export default HookEffect
