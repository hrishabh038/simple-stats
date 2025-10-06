import React from "react";

/**
 * A reusable loader/spinner component.
 */
const Loader = () => (
  <svg
    className="animate-spin h-5 w-5 text-current"
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      fill="currentColor"
    />
  </svg>
);

/**
 * A versatile button component with variants, color schemes, loading, and disabled states.
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The content of the button.
 * @param {() => void} [props.onClick] - Function to call when the button is clicked.
 * @param {'button' | 'submit' | 'reset'} [props.type='button'] - The button's type.
 * @param {'solid' | 'outline' | 'ghost'} [props.variant='solid'] - The button's visual style.
 * @param {'primary' | 'secondary' | 'success' | 'danger' | 'error' | 'warning'} [props.colorScheme='primary'] - The button's color scheme.
 * @param {boolean} [props.isLoading=false] - If true, shows a loader and disables the button.
 * @param {boolean} [props.isDisabled=false] - If true, disables the button.
 * @param {string} [props.className=''] - Additional classes to apply to the button.
 */
const Button = ({
  children,
  onClick,
  type = "button",
  variant = "solid",
  colorScheme = "primary",
  isLoading = false,
  isDisabled = false,
  className = "",
  ...rest
}) => {
  // Base styles for all buttons - UPDATED LINE BELOW
  const baseStyles =
    "relative inline-flex items-center justify-center font-semibold rounded-md transition duration-200 ease-in-out focus:outline-none focus:ring-[2px] focus:ring-offset-[1px] focus:ring-offset-transparent active:scale-[0.9] px-4 py-2 cursor-pointer";

  // Styles for different variants and color schemes
  const variantStyles = {
    solid: {
      primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
      secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",
      success:
        "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",
      danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
      error: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
      warning:
        "bg-amber-500 text-white hover:bg-amber-600 focus:ring-amber-500",
    },
    outline: {
      primary:
        "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500",
      secondary:
        "border border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white focus:ring-gray-500",
      success:
        "border border-green-600 text-green-600 hover:bg-green-600 hover:text-white focus:ring-green-500",
      danger:
        "border border-red-600 text-red-600 hover:bg-red-600 hover:text-white focus:ring-red-500",
      error:
        "border border-red-600 text-red-600 hover:bg-red-600 hover:text-white focus:ring-red-500",
      warning:
        "border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white focus:ring-amber-500",
    },
    ghost: {
      primary: "text-blue-600 hover:bg-blue-100 focus:ring-blue-500",
      secondary: "text-gray-600 hover:bg-gray-100 focus:ring-gray-500",
      success: "text-green-600 hover:bg-green-100 focus:ring-green-500",
      danger: "text-red-600 hover:bg-red-100 focus:ring-red-500",
      error: "text-red-600 hover:bg-red-100 focus:ring-red-500",
      warning: "text-amber-500 hover:bg-amber-100 focus:ring-amber-500",
    },
  };

  // Disabled and loading styles
  const disabledStyles = "opacity-50 cursor-not-allowed";

  // Combine all classes
  const combinedClassName = [
    baseStyles,
    variantStyles[variant][colorScheme],
    isDisabled || isLoading ? disabledStyles : "",
    className,
  ]
    .join(" ")
    .trim();

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled || isLoading}
      className={combinedClassName}
      {...rest}
    >
      {isLoading && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Loader />
        </div>
      )}
      <span className={isLoading ? "opacity-0" : "opacity-100"}>
        {children}
      </span>
    </button>
  );
};

export default Button;
