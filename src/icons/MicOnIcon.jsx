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
      <path d='M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z' />
      <path d='M19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8' />
    </svg>
  );
}

export default SvgComponent;
