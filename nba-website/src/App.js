import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

function App() {
  return (
    <div className="dropdown">
      <DropdownButton
        alignCenter
        title="Choose a stat"
        id="dropdown-menu-align-left"
        //onSelect={handleSelect}
          >
            <Dropdown.Item tag={Link} eventKey="Offensive Rating">Offensive Rating</Dropdown.Item>
            <Dropdown.Item tag={Link} eventKey="Defensive Rating">Defensive Rating</Dropdown.Item>
            <Dropdown.Item tag={Link} eventKey="Net Rating">Net Rating</Dropdown.Item>
            <Dropdown.Item tag={Link} eventKey="Pace">Pace</Dropdown.Item>
            <Dropdown.Item tag={Link} eventKey="Free Throw Rate">Offensive Rating</Dropdown.Item>
            <Dropdown.Item tag={Link} eventKey="3pt Attempt Rate">Defensive Rating</Dropdown.Item>
            <Dropdown.Item tag={Link} eventKey="True Shooting %">Net Rating</Dropdown.Item>
            <Dropdown.Item tag={Link} eventKey="Effective Field Goal %">Effective Field Goal %</Dropdown.Item>
            <Dropdown.Item tag={Link} eventKey="Turnover %">Turnover %</Dropdown.Item>
            <Dropdown.Item tag={Link} eventKey="Offensive Rebound %">Offensive Rebound %</Dropdown.Item>
            <Dropdown.Item tag={Link} eventKey="Free Throws per Field Goal Attempt">Free Throws per Field Goal Attempt</Dropdown.Item>
            <Dropdown.Item tag={Link} eventKey="Opponent Effective Field Goal %">Opponent Effective Field Goal %</Dropdown.Item>
            <Dropdown.Item tag={Link} eventKey="Salary Cap">Salary Cap</Dropdown.Item>
        </DropdownButton> 
    </div> 
  );

}

export default App;
