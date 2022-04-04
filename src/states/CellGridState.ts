import { atom, selector } from 'recoil';
import cellStateFamily from './CellStateFamily';
import Cell from '../models/Cell';

type CoordType = {
  width: number;
  height: number;
};

const cellGridState = atom({ key: 'CellGridState', default: { width: 0, height: 0 } });

export const cellListState = selector<Cell[][] | CoordType>({
  key: 'CellListState',
  get: ({ get }) => {
    return get(cellGridState);
  },
  set: ({ set }, cellArrays) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    for (const cellArray of cellArrays) {
      for (const cell of cellArray) {
        set(cellStateFamily([cell.row, cell.col]), cell);
      }
    }
  },
});

export default cellGridState;
