import React from 'react';
import { useRecoilValue } from 'recoil';
import cellStateFamily from '../states/CellStateFamily';

interface CellComponent {
  row: number;
  col: number;
}

const CellComponent = ({ row, col }: CellComponent) => {
  const cellState = useRecoilValue(cellStateFamily([row, col]));
  return (
    <div>
      {cellState.row} {cellState.col}
    </div>
  );
};

export default CellComponent;
