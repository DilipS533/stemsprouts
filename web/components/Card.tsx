import React from 'react';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

export default function Card({ children, className = '', ...rest }: Props) {
  return (
    <div className={`card ${className}`} {...rest}>
      {children}
    </div>
  );
}
