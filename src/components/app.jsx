import React from 'react';
import Header from './header';
import BreadCrumbs from './breadCrumbs';
import FormsPage from './forms';
import ColorsPage from './colorsPage';


const App = () => {
  return (
    <div>
      <Header />
      <BreadCrumbs />
      <FormsPage />
      <ColorsPage />
    </div>
  );
};

export default App;
