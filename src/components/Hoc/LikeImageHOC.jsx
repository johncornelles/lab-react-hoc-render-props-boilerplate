import React from 'react'
// import 'App.css'
const LikeImageHOC = ({increment, count}) => {
  return (
    <>
        <button className=' like-image-hoc' onClick={increment}>Like image {count}</button>
    </>
  )
}

export default LikeImageHOC