import React from 'react';
import { useRecoilValue } from 'recoil';
import cellGridState from '../states/CellGridState';
import CellComponent from './CellComponent';

const CellGrid = () => {
  const cellGridSize = useRecoilValue(cellGridState);
  const cellComponentList = [];
  for (let i = 0; i < cellGridSize.width; i++) {
    const cellList = [];
    for (let j = 0; j < cellGridSize.height; j++) {
      cellList.push(<CellComponent key={`${i} ${j}`} row={i} col={j} />);
    }
    cellComponentList.push(cellList);
  }

  return <>{cellComponentList}</>;
};

export default CellGrid;
