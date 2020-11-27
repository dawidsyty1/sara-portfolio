import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const Header = () => {
  const [state, setState] = useState(false);
  const location = useLocation();
  const history = useHistory();

  const action = () => (location.pathname !== '/' && state ? history.push('/') : setState(!state));

  return (
    <header id="header" className={state ? "hide" : 'show'} onClick={() => action()}>
      <div className="inner">
        <div className="content">
          <h1>Sara Szyje</h1>
          <h2>Prezetuję wam moje portfolio!.</h2>
          <button className="button"><span>Otwórz</span></button>
        </div>
      </div>
    </header>
  )
}


export default Header;