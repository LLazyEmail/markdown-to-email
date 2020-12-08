import React from 'react';

const Table = ({
  className, children, style, width, align,
}) => (
  <table
    align={align}
    className={className}
    border={0}
    cellPadding={0}
    cellSpacing={0}
    style={style}
    width={width}
  >
    {children}
  </table>
);

export default Table;
