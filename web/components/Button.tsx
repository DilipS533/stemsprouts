import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'outline';
};

export default function Button({ variant = 'primary', children, className = '', ...rest }: Props) {
  const base = variant === 'primary' ? 'btn' : 'btn-outline';
  return (
    <button className={`${base} ${className}`} {...rest}>
      {children}
    </button>
  );
}
