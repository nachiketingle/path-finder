import React from 'react';
import { PrimaryButton } from '@fluentui/react';
import maze from '../assets/maze.json';
import { useSetRecoilState } from 'recoil';
import cellGridState, { cellListState } from '../states/CellGridState';

const ControlPanel = () => {
  const setCellGridState = useSetRecoilState(cellGridState);
  const setCellListState = useSetRecoilState(cellListState);

  const onClick = () => {
    const cellsArrays = maze.cells;
    const width = cellsArrays.length;
    const height = cellsArrays[0].length;
    setCellGridState({ width, height });
    setCellListState(cellsArrays);
  };

  return <PrimaryButton onClick={onClick}>Load the maze</PrimaryButton>;
};

export default ControlPanel;
