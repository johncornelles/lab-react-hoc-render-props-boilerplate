import React from 'react'

const LikeImageRender = ({count, increment}) => {
  return (
    <button
    className='like-image-render'
    onClick={increment}>
        like image render {count}
    </button>
  )
}

export default LikeImageRender