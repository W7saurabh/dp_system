// Reusable Button Component
// Supports different variants and sizes

import React from 'react';
import { ButtonProps } from '@/types';

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false
}) => {
  // Base styles
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';

  // Variant styles
  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary-600 shadow-md hover:shadow-lg',
    secondary: 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white',
    outline: 'border-2 border-gray-300 text-gray-700 hover:border-primary hover:text-primary'
  };

  // Size styles
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
    >
      {children}
    </button>
  );
};

export default Button;

