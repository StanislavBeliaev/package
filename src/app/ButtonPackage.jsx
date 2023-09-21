import React, { useState } from "react";

export function Button({ isClicked, onClick, children }) {
  const buttonStyle = {
    backgroundColor: isClicked ? "#E2E2E4" : "initial",
  };

  return (
    <button
      class="text-xs md:text-md font-medium grow rounded-full p-1 md:p-3 transition-colors ease-out focus-visible:outline-none focus-visible:shadow-focus-inset max-w-[33.3%] text-primary bg-tertiary"
      onClick={onClick}
      style={buttonStyle}
    >
      {children}
    </button>
  );
}
