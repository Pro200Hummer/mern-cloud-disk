import React from 'react';
import {Link} from "react-router-dom";
import {Routing} from "../features/Routing";

export const App = () => {
  return <>
          <div>
              <Link to={'/login'}>Login</Link>
              <Link to={'/registration'}>Registration</Link>
          </div>
          <div>
              <Routing/>
          </div>
  </>

};

