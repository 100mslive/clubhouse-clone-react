import React from 'react';

function SvgComponent(props) {
  return (
    <svg
      viewBox='0 0 24 24'
      width={20}
      height={20}
      stroke='currentColor'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
      fill='none'
      shapeRendering='geometricPrecision'
      {...props}
    >
      <path d='M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2' />
      <circle cx={9} cy={7} r={4} />
      <path d='M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75' />
    </svg>
  );
}

export default SvgComponent;
