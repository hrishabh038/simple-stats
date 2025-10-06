import React from "react";

const Inputarea = ({
  label = "Label", // Default label text
  placeholder = "Enter text...", // Default placeholder
  value = "", // Controlled component value
  onChange, // Change handler function
  type = "text", // Input type (text, email, password, etc.)
  required = false, // Required attribute
  disabled = false, // Disabled state
  autoFocus = false, // Auto-focus on mount
  className = "", // Additional classes
  id, // Unique ID for label association
}) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label htmlFor={id} className="text-sm font-semibold text-gray-500">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        autoFocus={autoFocus}
        className={`
          border border-gray-300 dark:border-gray-600
          bg-white dark:bg-gray-800
          text-gray-700 dark:text-gray-100
          placeholder-gray-500 dark:placeholder-gray-400
          px-4 py-2
          rounded-lg 
          outline-none 
          focus:ring-2 focus:ring-blue-500 focus:border-transparent
          transition-all duration-200
          hover:border-gray-400 dark:hover:border-gray-500
          ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        `}
      />
    </div>
  );
};

export default Inputarea;
