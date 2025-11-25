import * as React from "react";
const Remove = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={11}
    height={1}
    fill="none"
    {...props}
    className={className}
  >
    <path
      stroke="#09090B"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M.5.5h9.333"
    />
  </svg>
);
export default Remove;
