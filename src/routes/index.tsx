import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/index'

const ApplicationNavigation: React.FC = () => (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />}/>
  </Routes>
</BrowserRouter>

);

export default ApplicationNavigation;


//  <Router history={history}>
//   <Switch>
//     <Route path="/" exact component={Login} />
//   </Switch>
// </Router> 