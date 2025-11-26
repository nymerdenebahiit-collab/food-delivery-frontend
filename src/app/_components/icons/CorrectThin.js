import * as React from "react";
const CorrectThin = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={9}
    fill="none"
    {...props}
    className={className}
  >
    <path
      stroke="#E4E4E7"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.167.5 3.833 7.833.5 4.5"
    />
  </svg>
);
export default CorrectThin;
