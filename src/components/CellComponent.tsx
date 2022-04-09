import React from 'react';
import { useRecoilValue } from 'recoil';
import cellStateFamily from '../states/CellStateFamily';
import './CellComponent.scss';

interface CellComponent {
  row: number;
  col: number;
}

const CellComponent = ({ row, col }: CellComponent) => {
  const cellState = useRecoilValue(cellStateFamily([row, col]));

  let borderSides = '';
  borderSides += cellState.walls[0] ? ' north' : '';
  borderSides += cellState.walls[1] ? ' east' : '';
  borderSides += cellState.walls[2] ? ' south' : '';
  borderSides += cellState.walls[3] ? ' west' : '';

  return (
    <div className="Cell">
      <div className={`Square ${borderSides}`}>
        {cellState.row} {cellState.col}
      </div>
    </div>
  );
};

export default CellComponent;
