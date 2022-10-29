import React from 'react'

function Container({array,title}) {


  return (
    <div>
      <h2>{title}</h2>
      {
        array.map((item,idx) => {
          return (<div key={idx}>
            {item.text}
          </div>)
        })
      }
    </div>
  );
}

export default Container;