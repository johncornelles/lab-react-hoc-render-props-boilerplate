import React, { useState } from 'react'

export default function LikeImage() {

  const [likeImageCounter, setLikeImageCounter] = useState(0);

  const handleLikeImageCount = ()=>{
    setLikeImageCounter(likeImageCounter+1);
  }

  return (
    <>
      <button
       style={
        { backgroundColor: 'white', border: "1px solid black" }
        }
       onClick={handleLikeImageCount}>
       Like Image {likeImageCounter}
       </button>
    </>
  )
}
