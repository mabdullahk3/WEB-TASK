import React from 'react';
import { useDocumentContext } from '../context/DocumentContext';

const Sidebar = () => {
  const { state } = useDocumentContext();

  return (
    <div className="sidebar">
      <h3>Active Collaborators</h3>
      <ul>
        {state.collaborators.length === 0 ? (
          <li>No collaborators online</li>
        ) : (
          state.collaborators.map((collaborator, index) => (
            <li key={index}>{collaborator}</li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
