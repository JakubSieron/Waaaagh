import React from 'react';
import './Button.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  className = '',
  ...props
}) => {
  return (
    <button
      className={`button button--${variant} button--${size} ${
        fullWidth ? 'button--full-width' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}; 