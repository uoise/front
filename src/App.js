import React from 'react';
import { Route } from 'react-router-dom';
import HeaderContainer from './containers/Base/HeaderContainer';
import { Home, Auth, Table } from './pages';

function App() {
  return (
    <div>
      <HeaderContainer/>
      <Route exact path="/" component={Home}/>
      <Route path="/user" component={Auth}/>
      <Route path="/table" component={Table}/>
    </div>
  );
}

export default App;
