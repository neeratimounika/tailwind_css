
import React from 'react' 
import User from './User'


const App = () => {
  let users=[
    {
      id:1,
      name:"Mounika",
      age:30,
      place:"delhi"
    },
    {
      id:2,
      name:"Neerati",
      age:32,
      place:"Hyderabad"
    },
    {
      id:3,
      name:"Bubby",
      age:28,
      place:"Banglore"
    },
    {
      id:4,
      name:"Vedansh",
      age:30,
      place:"Chennai"
    },
     
  ]
  return (
    <div className='text-center mt-4'>
      {users.map(
        (u)=>{
          return <User id={u.id} name={u.name} age={u.age} place={u.place}/>
        }
      )}

     
    </div>
  )
}

export default App
