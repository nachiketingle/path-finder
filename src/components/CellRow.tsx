import React from 'react';
import CellComponent from './CellComponent';

type CellRowProps = {
  row: number;
  width: number;
};

const CellRow = ({ row, width }: CellRowProps) => {
  const cellElements = [];
  for (let i = 0; i < width; i++) {
    cellElements.push(<CellComponent key={`${row} ${i}`} row={row} col={i} />);
    cellElements.push(<div className="spacer" />);
  }
  return <div className="CellRow">{cellElements}</div>;
};

export default CellRow;
