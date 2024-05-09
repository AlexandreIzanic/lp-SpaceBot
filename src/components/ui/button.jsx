import React, { useState } from "react";

function Button() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <button
      className="bg-[#272934] hover:bg-[#623dff] hover:font-bold rounded-lg px-3 py-2 text-white"
      onClick={handleClick}
    >
      Click me ({count})
    </button>
  );
}

export default Button;
