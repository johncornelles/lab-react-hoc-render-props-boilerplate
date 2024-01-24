import React from 'react'
import { useState } from 'react'
const LikePostHOC = ({increment, count}) => {
  return (
    <>
        <button className='like-post-hoc' onClick={increment}>Like image {count}</button>
    </>
  )
}

export default LikePostHOC