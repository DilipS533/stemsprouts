import React from 'react';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

export default function Container({ children, className = '', ...rest }: Props) {
  return (
    <div className={`container ${className}`} {...rest}>
      {children}
    </div>
  );
}
