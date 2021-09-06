import React from 'react';

function SvgComponent(props) {
  return (
    <svg
      viewBox='0 0 24 24'
      width={24}
      height={24}
      stroke='currentColor'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
      fill='none'
      shapeRendering='geometricPrecision'
      {...props}
    >
      <path d='M1 1l22 22M9 9v3a3 3 0 005.12 2.12M15 9.34V4a3 3 0 00-5.94-.6' />
      <path d='M17 16.95A7 7 0 015 12v-2m14 0v2a7 7 0 01-.11 1.23M12 19v4M8 23h8' />
    </svg>
  );
}

export default SvgComponent;
