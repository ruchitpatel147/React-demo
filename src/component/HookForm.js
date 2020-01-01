import React , {useState} from 'react';

function HookForm (){
  const [name, setName] = useState({firstName: '' , lastName: ''})

  const change = e => {
    setName({...name, [e.target.name]: e.target.value})
  }
  return(
    <div>
      <form>
        <div>
          <input type='text' name='firstName' value={name.firstName} onChange={change}/>
        </div>
        <div>
          <input type='text' name='lastName' value={name.lastName} onChange={change}/>
        </div>
        <button type='submit'>submit</button>
      </form>
      <div>
        FIRST NAME IS :- {name.firstName}
        LAST NAME IS :- {name.lastName}
      </div>
    </div>
  )
}

export default HookForm