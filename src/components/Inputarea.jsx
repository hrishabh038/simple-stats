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
        <label htmlFor={id} className="text-sm font-semibold text-neutral-500">
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
          border border-neutral-300 dark:border-neutral-600
          bg-white dark:bg-neutral-800
          text-neutral-700 dark:text-neutral-100
          placeholder-neutral-500 dark:placeholder-neutral-400
          px-4 py-2
          rounded-lg 
          outline-none 
          focus:ring-2 focus:ring-blue-500 focus:border-transparent
          transition-all duration-200
          hover:border-neutral-400 dark:hover:border-neutral-500
          ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        `}
      />
    </div>
  );
};

export default Inputarea;
