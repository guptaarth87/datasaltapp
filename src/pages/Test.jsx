import React, { useEffect, useState } from "react";
import "./Test.css";


const Test = () => {
  const [cursor, setCursor] = useState("");
  const text = "hello giyuigsdfbshihbv shfbvhfbfvhbhfs"
  const handleKeyDown = (event) => {
    if (event.keyCode === 32) {
      setCursor(cursor + " ");
    }
  };

  return (
    <div onKeyDown={handleKeyDown}>
      <span className="cursor" dangerouslySetInnerHTML={{ __html: cursor }} />
      <span>{text}</span>
    </div>
  );
};

export default Test;

