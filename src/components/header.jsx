import React from 'react';
import { styled } from 'linaria/react';

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  background-color: white;
  border-bottom: 3px solid #a0a0a0;
  color: grey;
  `;

const Left = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  li{
    display: flex;
    padding-left: 25px;
    align-items: center;
  }
`;

const Right = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  li{
    display: flex;
    padding-right: 25px;
  }
`;

const Hamburger = styled.div`
  width:30px;
  height:20px;
  background: url('../../../src/gamb.png') no-repeat ;
  background-size: contain;
`;

const image = `'../../../src/sprite.png'`;

const Picture = styled.div`
width:40px;
height:40px;
background: url(${props => props.image});

`;

const Header = () => {
  return (
    <Head>
      <Left>
        <Hamburger />
        <li>Dashboard</li>
        <li>Users</li>
        <li>Settings</li>
      </Left>
      <Right>
        <li>
          <Picture image={image} />
        </li>
        <li><Picture /></li>
        {/* <li><Picture /></li>
        <li><Picture /></li>
        <li><Picture /></li>
        <li><Picture /></li> */}
      </Right>
    </Head>
  );
};
export default Header;
