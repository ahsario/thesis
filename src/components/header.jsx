import React from 'react';
import { styled } from 'linaria/react';

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  background-color: white;
  border-bottom: 2px solid #a0a0a0;
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

const Picture = styled.div`
  width:30px;
  height:25px;
  background: ${props => props.image};
`;

const Hamburger = styled.div`
  width:30px;
  height:20px;
  background: url('../../../src/gamb.png') no-repeat ;
  background-size: contain;
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
          <Picture
            image="url('../../../src/sprite.png') 130px 378px"
          />
        </li>
        <li>
          <Picture
            image="url('../../../src/sprite.png') 355px 378px"
          />
        </li>
        <li>
          <Picture
            image="url('../../../src/sprite.png') 355px 315px"
          />
        </li>
        <li>
          <Picture
            image="url('../../../src/sprite.png') 243px 190px"
          />
        </li>
        <li>
          <Picture
            image="url('../../../src/sprite.png') 469px 440px"
          />
        </li>
        <li>
          <Picture
            image="url('../../../src/sprite.png') 130px 128px"
          />
        </li>
      </Right>
    </Head>
  );
};
export default Header;
