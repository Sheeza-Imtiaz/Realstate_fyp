import React from 'react'

const Mydetail = () => {
    const data=JSON.parse(sessionStorage.getItem('editdata'));
    console.log(data.id)
  return (
    <div>Mydetail</div>
  )
}

export default Mydetail