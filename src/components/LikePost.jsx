import React, { useState } from 'react'

export default function LikePost() {

  const [likePostCounter, setPostCounter] = useState(0);

  const handlePostCount = ()=>{
    setPostCounter(likePostCounter+1);
  }

  return (
    <>
      <button 
      style={
        { backgroundColor: 'black', color: 'white' }
        }
        onClick={handlePostCount}>Like Post {likePostCounter}</button>
    </>
  )
}
