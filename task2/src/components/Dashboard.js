import React from 'react';
import { useStore } from '../store/useStore';

const Dashboard = () => {
  const { cart, user } = useStore();

  const totalValue = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <p>Total Cart Value: ${totalValue}</p>
      {user.loggedIn ? (
        <p>Welcome, {user.profile?.name}</p>
      ) : (
        <p>Please log in to see your activity.</p>
      )}
    </div>
  );
};

export default Dashboard;
