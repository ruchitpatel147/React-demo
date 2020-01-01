import React , {useState, useEffect} from 'react'



function HookMousePosition () {

  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);

  const move = e => {
    console.log('mouse move')
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(() => {
    console.log('Effect')
    window.addEventListener('mousemove', move)

    return () => {
      console.log('Component unmount code');
      window.removeEventListener('mousemove', move)
    }
  }, [])

  return(
    <div>
      x is {X}
      y is {Y}
    </div>
  )

}

export default HookMousePosition