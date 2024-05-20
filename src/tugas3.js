import React from 'react';

function Myprop({ text,judul }) {
  return (
    <div>
    <h3>{judul}</h3>
      <h1>{text}</h1>
    </div>
  );
}

export default Myprop;