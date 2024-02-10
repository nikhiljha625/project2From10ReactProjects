import React from 'react'

function Btn(props) {

  let name=props.name

  return (
    <div>
      <button>{name}</button>

    </div>
  )
}

export default Btn