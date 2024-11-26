import React from 'react';
import { DocumentProvider } from './context/DocumentContext';
import Editor from './components/Editor';
import Sidebar from './components/Sidebar';
import UndoRedoPanel from './components/UndoRedoPanel';

const App = () => {
  return (
    <DocumentProvider>
      <div className="app">
        <Sidebar />
        <div className="editor-container">
          <Editor />
          <UndoRedoPanel />
        </div>
      </div>
    </DocumentProvider>
  );
};

export default App;
