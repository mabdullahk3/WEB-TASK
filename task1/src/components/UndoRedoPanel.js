import React from 'react';
import { useDocumentContext } from '../context/DocumentContext';

const UndoRedoPanel = () => {
  const { state, dispatch } = useDocumentContext();

  return (
    <div className="undo-redo-panel">
      <button onClick={() => dispatch({ type: 'UNDO' })} disabled={state.history.length === 0}>
        Undo
      </button>
      <button onClick={() => dispatch({ type: 'REDO' })} disabled={state.future.length === 0}>
        Redo
      </button>
    </div>
  );
};

export default UndoRedoPanel;
