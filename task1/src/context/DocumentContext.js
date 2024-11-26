import React, { createContext, useContext, useState, useReducer, useMemo } from 'react';

// Context initialization
const DocumentContext = createContext();

// Reducer to manage undo/redo history
const documentReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_CONTENT':
      return {
        ...state,
        content: action.payload,
        history: [...state.history, state.content],
        future: [],
      };
    case 'UNDO':
      const previousState = state.history[state.history.length - 1] || '';
      return {
        ...state,
        content: previousState,
        history: state.history.slice(0, -1),
        future: [state.content, ...state.future],
      };
    case 'REDO':
      const nextState = state.future[0] || '';
      return {
        ...state,
        content: nextState,
        history: [...state.history, state.content],
        future: state.future.slice(1),
      };
    default:
      return state;
  }
};

// Provider component to wrap around the app
export const DocumentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(documentReducer, {
    content: '',
    history: [],
    future: [],
    collaborators: [],
  });

  const value = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <DocumentContext.Provider value={value}>
      {children}
    </DocumentContext.Provider>
  );
};

// Custom hook to use context
export const useDocumentContext = () => useContext(DocumentContext);
