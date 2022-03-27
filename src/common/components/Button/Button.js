import React from "react"

export default function Button({ onClick, children, disabled }) {
  return (
    <button
      disabled={disabled ? true : false}
      type="button"
      onClick={() => {
        onClick ? onClick() : null
      }}
      className={`focus:outline-nonefirst-letter: rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white focus:ring-4 focus:ring-blue-300
        ${disabled ? "cursor-not-allowed" : "cursor-pointer hover:bg-blue-800"}
      `}
    >
      {children}
    </button>
  )
}
