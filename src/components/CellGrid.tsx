import React from 'react';
import { useRecoilValue } from 'recoil';
import cellGridState from '../states/CellGridState';
import CellRow from './CellRow';

const CellGrid = () => {
  const cellGridSize = useRecoilValue(cellGridState);
  const cellList = [];
  for (let i = 0; i < cellGridSize.width; i++) {
    cellList.push(<CellRow key={i} row={i} width={cellGridSize.width} />);
  }

  return <>{cellList}</>;
};

export default CellGrid;
