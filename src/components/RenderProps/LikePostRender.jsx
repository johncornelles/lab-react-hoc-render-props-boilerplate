import React from 'react'

const LikePostRender = ({count, increment}) => {
  return (
    <button 
    className='like-post-render'
    onClick={increment}>
        like post render {count}
    </button>
  )
}

export default LikePostRender