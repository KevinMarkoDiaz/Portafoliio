import React, { useEffect, useState } from 'react'
import { typeCellState } from '../config/Config'
import './Row.css'

export const Row = ({ row, toggleCellStateRow, rowIndex }) => {
  
  const [cellState, setCellState] = useState(false);

  useEffect(() => {
    setCellState(row)
  }, [row])

  const cellStateRepresentation = cellState === typeCellState?.ALIVE ? "black" : "white"; 
  
  const handleChangeCellState = () => {
    setCellState(!cellState);
    toggleCellStateRow(rowIndex, cellState);
  };

  return (
    <div
    onMouseOver={handleChangeCellState}
      className={`grid__row grid__row--${cellStateRepresentation}`}
    >      
    </div>
  )
}
