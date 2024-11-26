import React, { useState } from 'react';
import { useDocumentContext } from '../context/DocumentContext';

const Editor = () => {
  const { state, dispatch } = useDocumentContext();
  const [typing, setTyping] = useState(false);

  const handleChange = (event) => {
    dispatch({ type: 'UPDATE_CONTENT', payload: event.target.value });
    setTyping(true);

    setTimeout(() => {
      setTyping(false);
    }, 1000); // Mock "User X is typing..." delay
  };

  return (
    <div className="editor">
      <textarea
        value={state.content}
        onChange={handleChange}
        placeholder="Start typing..."
      />
      {typing && <div className="typing-status">User X is typing...</div>}
    </div>
  );
};

export default Editor;
