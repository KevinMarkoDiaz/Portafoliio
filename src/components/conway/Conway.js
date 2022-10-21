import { useEffect, useState } from "react";
import { Column } from "./column/Column";
import { gridGenerator } from "./helpers/helpers";
import './App.css'

function Conway() {

  const cellsGrid = [];

  const initialValueGrid = {
    columAmount: 60,
    rowAmount: 15
  };
  //Manejo de estados de la app
  const [grid] = useState(initialValueGrid);
  const [cellsState, setCellsState] = useState([]);
  const [intervalId, setIntervalId] = useState(0);
  const [stateGame, setStateGame] = useState(false);
  const [turnOfLife, setTurnOfLife] = useState(0);
  /*
  Con este efecto ejecuto la función "gridGenerator" que me genera el grid, 
  como dependencia escucha "turnOfLife" que representa la generación celular
  */
  useEffect(() => {

    setCellsState(
      gridGenerator(
        cellsState,
        grid,
        turnOfLife,
        cellsGrid
      ))
  }, [turnOfLife]);
  //Esta función le permite al usuario con un clic en la célula cambiar su estado
  const toggleCellState = (columnIndex, rowIndex, currentCellState) => {
    const newGridState = [...cellsState];
    newGridState[columnIndex][rowIndex] = !currentCellState;
    setCellsState(newGridState);
  };
  /*
  En esta sección están los controladores del estado del la app que permiten pausar,
  reiniciar e iniciar la misma se valida el estado de la app y del setInterval 
  para ejecutar la acción a realizar 
  */
  const handleGamepause = () => {
    if (intervalId && stateGame === true) {

      clearInterval(intervalId);
      setIntervalId(0);
      setStateGame(false);
      return;
    }
  };

  const handleGameStart = () => {
    if (stateGame === false) {

      const newIntervalId = setInterval(() => {

        setTurnOfLife(prevCount => prevCount + 1)
      }, 300);
      setIntervalId(newIntervalId);
    }
    setStateGame(true)
  };

  const handleGamerestart = () => {
    setTurnOfLife(0);
    clearInterval(intervalId);
    setIntervalId(0);
    setStateGame(false);
  };

  return (
    <div className="app__container">
      <div className="grid__button--container">
        <div>

          <div
            onClick={handleGameStart}
            className='grid__button'
          >
            <p>Iniciar</p>
          </div>
          <div
            onClick={handleGamepause}
            className='grid__button'
          >
            <p>Detener</p>
          </div>
          <div
            onClick={handleGamerestart}
            className='grid__button'
          >
            <p>Reiniciar</p>
          </div>
        </div>
        <p className="generation">Generacion #{turnOfLife}</p>
      </div>
      <div className="grid__container">
        {cellsState.map((row, columnIndex) =>
          <Column
            key={columnIndex}
            row={row}
            toggleCellState={toggleCellState}
            columnIndex={columnIndex}
          />)
        }
      </div>
    </div>
  );
}

export default Conway;
