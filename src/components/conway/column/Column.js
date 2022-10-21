import React from 'react'
import { Row } from '../rows/Row'
import './Column.css'

export const Column = ({ row, toggleCellState, columnIndex }) => {

  const toggleCellStateRow = (rowIndex, cellState) => {
    toggleCellState(columnIndex, rowIndex, cellState)
  }

  return (
    <div className="grid__column"
    >
      {row.map((row, rowIndex) =>
        <Row
          row={row}
          key={rowIndex}
          toggleCellStateRow={toggleCellStateRow}
          rowIndex={rowIndex}
        />
      )}
    </div>
  )
}
