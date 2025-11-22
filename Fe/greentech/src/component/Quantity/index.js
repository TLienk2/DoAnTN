import { memo, useState, useRef, useEffect } from "react";
import "./style.scss";

const Quantity = () => {
  const [value, setValue] = useState(1);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      const length = value.toString().length;
      inputRef.current.style.width = `${length + 1}ch`; // +1 cho khoảng padding
    }
  }, [value]);

  return (
    <div className="quantity_container">
      <div className="quantity">
        <span
          className="qty_btn"
          onClick={() => setValue((prev) => Math.max(1, prev - 1))}
        >
          -
        </span>

        <input
          ref={inputRef}
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <span className="qty_btn" onClick={() => setValue((prev) => prev + 1)}>
          +
        </span>
      </div>
    </div>
  );
};

export default memo(Quantity);
