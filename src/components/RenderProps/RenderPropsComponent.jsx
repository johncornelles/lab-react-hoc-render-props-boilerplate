import React, {useState} from 'react'

const RenderPropsComponent = (props) => {
    let [count, setCount] = useState(0);
  
    const increment = () => {
      setCount(count + 1);
    };
  return (
    <>
        {props.render(count, increment)}
    </>
  )
}

export default RenderPropsComponent