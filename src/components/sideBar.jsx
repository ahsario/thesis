import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { styled } from 'linaria/react';
import { connect } from 'react-redux';

const Menu = styled.div`
  height: 100%;
  width: ${props => props.width};
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 60px; 
  transition: 0.5s;
  color: white;
   li {
    display: flex;
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    transition: 0.3s;
  }
  li:hover {
    color: #f1f1f1;
  }
`;

const Picture = styled.div`
  width:30px;
  height:25px;
  background: ${props => props.image};
`;

const SideBar = ({ isOpen }) => {
  return (
    <Menu width={isOpen ? '250px' : '0'}>
      <li>
        <Picture image="url('../../../src/sprite.png') 469px 65px" />
        <NavLink to="/colors">Dashboard</NavLink>
      </li>
      THEME
      {/* <li>
        <Picture image="url('../../../src/sprite.png') 355px 378px" />
        <NavLink to="/colors">Colors</NavLink>
      </li>
      <li>
        <Picture image="url('../../../src/sprite.png') 469px 65px" />
        <NavLink activeStyle={{ color: 'orangered' }}>Typography</NavLink>
      </li>
      COMPONENTS
      <li>
        <Picture image="url('../../../src/sprite.png') 469px 65px" />
        <NavLink activeStyle={{ color: 'orangered' }}>Base</NavLink>
      </li>
      <li>
        <Picture image="url('../../../src/sprite.png') 469px 65px" />
        <NavLink activeStyle={{ color: 'orangered' }}>Buttons</NavLink>
      </li>
      <li>
        <Picture image="url('../../../src/sprite.png') 469px 65px" />
        <NavLink activeStyle={{ color: 'orangered' }}>Charts</NavLink>
      </li>
      <li>
        <Picture image="url('../../../src/sprite.png') 469px 65px" />
        <NavLink activeStyle={{ color: 'orangered' }}>Editors</NavLink>
      </li>
      <li>
        <Picture image="url('../../../src/sprite.png') 469px 65px" />
        <NavLink activeStyle={{ color: 'orangered' }} to="/forms">Forms</NavLink>
      </li>
      <li>
        <Picture image="url('../../../src/sprite.png') 469px 65px" />
        <NavLink activeStyle={{ color: 'orangered' }}>Google Maps</NavLink>
      </li>
      <li>
        <Picture image="url('../../../src/sprite.png') 469px 65px" />
        <NavLink activeStyle={{ color: 'orangered' }}>Icons</NavLink>
      </li>
      <li>
        <Picture image="url('../../../src/sprite.png') 469px 65px" />
        <NavLink activeStyle={{ color: 'orangered' }}>Notifications</NavLink>
      </li>
      <li>
        <Picture image="url('../../../src/sprite.png') 469px 65px" />
        <NavLink activeStyle={{ color: 'orangered' }}>Plugins</NavLink>
      </li>
      <li>
        <Picture image="url('../../../src/sprite.png') 469px 65px" />
        <NavLink activeStyle={{ color: 'orangered' }}>Tables</NavLink>
      </li>
      <li>
        <Picture image="url('../../../src/sprite.png') 469px 65px" />
        <NavLink activeStyle={{ color: 'orangered' }}>Widjets</NavLink>
      </li> */}
      EXTRAS
    </Menu>
  );
};

const mapStateToProps = (state) => {
  return {
    isOpen: state,
  }
};

export default connect(mapStateToProps)(SideBar);
