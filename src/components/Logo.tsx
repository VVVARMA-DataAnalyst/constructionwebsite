import React from 'react';

interface LogoProps extends React.SVGProps<SVGSVGElement> {}

export const Logo: React.FC<LogoProps> = (props) => {
  return (
    <svg
      viewBox="0 0 256 256"
      {...props}
    >
      {/* Rounded square dark blue background */}
      <rect width="256" height="256" rx="48" fill="#0F172A" />
      {/* Gold triangle 1 (bottom right) */}
      <path d="M 144 256 L 27.598 256 L 144 139.598 Z" fill="#C9A227" />
      {/* White main geometric shape */}
      <path d="M 256 207.5 L 200 256 L 200 56 L 0 56 L 48 0 L 256 0 Z" fill="#FFFFFF" />
      {/* Gold triangle 2 (bottom left) */}
      <path d="M 0 204.402 L 0 112 L 92.402 112 Z" fill="#C9A227" />
    </svg>
  );
};
