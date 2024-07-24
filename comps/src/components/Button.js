import className from "classnames";
import { twMerge } from "tailwind-merge";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  const classes = twMerge(
    className(
      rest.className,
      "px-3 py-1.5 mx-8 my-8 border flex items-center",
      {
        "border-blue-600 bg-blue-500 text-white": primary,
        "border-gray-900 bg-gray-800 text-white": secondary,
        "border-green-600 bg-green-500 text-white": success,
        "border-yellow-600 bg-yellow-500 text-white": warning,
        "border-red-600 bg-red-500 text-white": danger,
        "rounded-full": rounded,
        "bg-white": outline,
        "text-blue-500": outline && primary,
        "text-gray-900": outline && secondary,
        "text-green-500": outline && success,
        "text-yellow-400": outline && warning,
        "text-red-500": outline && danger,
      }
    )
  );
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

export default Button;
