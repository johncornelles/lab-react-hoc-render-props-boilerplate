import React, { useState } from 'react';

const HOC = ( PassedComponent ) => {
  
  const NewComponent = () => {
    let [count, setCount] = useState(0);
  
    const increment = () => {
      setCount(count + 1);
    };
    return (
      <>
        <PassedComponent increment={increment} count={count} />
      </>
    );
  };

  return NewComponent;
};

export default HOC;
