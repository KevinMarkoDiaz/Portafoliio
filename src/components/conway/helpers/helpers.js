import { typeCellState } from "../config/Config";

//En esta función se valida y cuantifica el estado del entorno de la célula

const computeAliveNeighboursAmount = (columnIndex, rowIndex, grid, cellsState) => {
  let aliveneighborAmount = 0;

  const neighborOffsets = [
    [-1, 0], //left
    [-1, 1], //top left
    [0, 1], //top
    [1, 1], //top right
    [1, 0], //right
    [1, -1], //bottom right
    [0, -1], //bottom
    [-1, -1], //bottom left
  ];

  for (const neighbourOffsetKey in neighborOffsets) {

    const [xOfffset, yOffset] = neighborOffsets[neighbourOffsetKey];
    let newColumOffset = columnIndex + xOfffset;
    let newRowOffset = rowIndex + yOffset;

    if (newColumOffset < 0 || newColumOffset > grid.columAmount - 1) {
      continue
    };
    if (newRowOffset < 0 || newRowOffset > grid.rowAmount - 1) {
      continue
    };

    const neighborState = cellsState[newColumOffset][newRowOffset];

    if (neighborState === typeCellState.ALIVE) {
      aliveneighborAmount++
    };
  };
  return aliveneighborAmount;
};

/*
En esta función se asigna el estado de la célula
en la siguiente generación basándonos en el resultado de la validación del 
entorno con la función "computeAliveNeighboursAmount"
*/

export const computeNewCellState = (columnIndex, rowIndex, cellsState, grid) => {
  const aliveneighborAmount =
    computeAliveNeighboursAmount(
      columnIndex,
      rowIndex,
      grid,
      cellsState
    );
  const currentCellState = cellsState[columnIndex][rowIndex];

  if (currentCellState === typeCellState.ALIVE) {

    if (aliveneighborAmount > 3) {
      return typeCellState?.DEAD;
    } else if (aliveneighborAmount < 2) {
      return typeCellState?.DEAD;
    } else if (aliveneighborAmount < 3 || aliveneighborAmount > 2) {
      return typeCellState?.ALIVE;
    }

  } else if (currentCellState === typeCellState?.DEAD) {

    if (aliveneighborAmount === 3) {
      return typeCellState?.ALIVE
    } else {
      return currentCellState
    };
  };
};
/*
En esta función generamos el grid de la siguiente generación de células basándonos en:
 1. Si es la primera generación el estado de la unidad celular es DEAD

 2. Si no es la primera generación el estado celular depende de la
    validación del entorno y la asignación del estado en sí de la misma
    generado con la función "computeNewCellState"
*/
export const gridGenerator = (cellsState, grid, turnOfLife) => {

  if (turnOfLife === 0) {
    const cellsGrida = []

    for (let columnIndex = 0; columnIndex < grid.columAmount; columnIndex++) {
      cellsGrida[columnIndex] = []
      for (let rowIndex = 0; rowIndex < grid.rowAmount; rowIndex++) {
        cellsGrida[columnIndex][rowIndex] = typeCellState.DEAD
      }
    }
    return cellsGrida
    
  } else {
    const cellsGridb = []

    for (let columnIndex = 0; columnIndex < grid.columAmount; columnIndex++) {
      cellsGridb[columnIndex] = []
      for (let rowIndex = 0; rowIndex < grid.rowAmount; rowIndex++) {
        cellsGridb[columnIndex][rowIndex] =
          computeNewCellState(
            columnIndex,
            rowIndex,
            cellsState,
            grid
          );
      }
    }
    return cellsGridb
  }
};