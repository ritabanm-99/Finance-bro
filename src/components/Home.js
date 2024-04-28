import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

const Home = () => {
  return (
    <div className="card-container">
      <Link to="/investments">
        <Card title="Investments" content="Investing Analytics." />
      </Link>
      <Link to="/savings">
        <Card title="Savings" content="Savings Analytics." />
      </Link>
    </div>
  );
};

export default Home;
