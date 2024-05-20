import React, { useState, useEffect } from "react";

function Tugas4() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count has changed: ${count}`);
  }, [count]);

  return (
    <div>
      <h3>tugas 4</h3>
      <button onClick={() => setCount(count + 1)}>
        <h1>Menghitung samapai: {count}</h1>
      </button>
    </div>
  );
}

export default Tugas4;
