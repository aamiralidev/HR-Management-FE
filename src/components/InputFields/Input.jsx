import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Input.css";

const Input = ({
  label,
  type,
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  error,
  className,
  icon, // New prop for icon
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const inputType = type === "password" && !showPassword ? "password" : "text";

  return (
    <div>
      {label && (
        <label htmlFor={name} className={`input-label ${error && "text-red"}`}>
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={inputType}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          className={`input-field ${error && "border-red"}`}
          {...rest}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 flex items-center px-3 focus:outline-none"
          >
            {showPassword ? (
              <FaEyeSlash className="text-quaternary" />
            ) : (
              <FaEye className="text-quaternary" />
            )}
          </button>
        )}
      </div>
      <div className="h-4 mt-1">
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default Input;
