import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

const Home = () => {
  return (
    <div className="card-container">
      <Link to="/investments">
        <Card title="Investments" content="Equity & Options Research." />
      </Link>
      <Link to="/savings">
        <Card title="Savings" content="Savings Analytics." />
      </Link>
      <Link to = "/wealthmgmt">
        <Card title = "Wealth Management" content= "Wealth Management"/>
      </Link>
      <Link to = "/Insurance">
        <Card title = "Insurance" content = " Learn about your Insurance benefits"/>
      </Link>
    </div>
  );
};

export default Home;

