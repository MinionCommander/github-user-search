import React from 'react';

interface ButtonProps {
  label: string;
  onClick: (e: React.FormEvent) => void;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
}) => {
  const baseClasses = 'rounded-lg transition-all duration-300 font-bold';
  const variantClasses = {
    primary: 'bg-primary hover:bg-blue-400 text-white',
    secondary: 'bg-gray-500 hover:bg-gray-400 text-white',
    danger: 'bg-red-500 hover:bg-red-400 text-white',
  };
  const sizeClasses = {
    small: 'py-1 px-3 text-sm',
    medium: 'py-2 px-6 text-base',
    large: 'py-3 px-8 text-lg',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
