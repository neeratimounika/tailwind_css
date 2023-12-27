import React from 'react'


const User = (props) => {
    console.log(props)
  return (
    <div className='border-2 solid border-green-400 w-10/12 m-20'>
        <h1 className='font-serif text-xl text-red-600' >id:{props.id}</h1>
      <h1 className='font-serif text-xl text-green-600' >User:{props.name}</h1>
      <p className='font-serif text-xl text-blue-400' >Age:{props.age}</p>
      <p className='font-serif text-xl text-pink-300'>Place:{props.place}</p>
    </div>
  )
}

export default User
