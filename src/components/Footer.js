import React, { useState } from 'react';

const Footer = () => {
  const [state, setState] = useState(false);

  return (
    <footer id="footer" className={state ? "show" : 'hide'} onClick={() => setState(!state)}>
      <p href="#" className="info fa fa-info-circle"><span>About</span></p>
      <div className="inner">
        <div className="content">
          <h3>Zajmuje sie szyciem</h3>
          <p>Jako pierwszą maszynę do szycia można uznać dzieło niemieckiego wynalazcy o nazwisku: Charles Frederick Wiesenthal. Przebywając w Anglii skonstruował maszynę potrafiącą wiązać ścieg przy użyciu podwójnie zaostrzonej igły z centralnie umieszczonym oczkiem. Za ten wynalazek w 1755 roku otrzymał brytyjski patent o nr 701.</p>
        </div>
        <div className="copyright">
          <h3>Znajdziesz mnie na</h3>
          <ul className="icons">
            <li><a href="https://www.facebook.com/SaraSzyje-104242944737985" target="_blank" rel="noreferrer" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="https://www.instagram.com/sarenka_handmade/?hl=pl" target="_blank" rel="noreferrer" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
};


export default Footer;