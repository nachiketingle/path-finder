import { atomFamily } from 'recoil';
import Cell from '../models/Cell';

const cellStateFamily = atomFamily<Cell, [number, number]>({
  key: 'CellStateFamily',
  default: { row: 0, col: 0, walls: [true, true, true, true] },
});

export default cellStateFamily;
