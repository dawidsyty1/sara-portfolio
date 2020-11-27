import React, { useState } from 'react';

const Footer = () => {
  const [state, setState] = useState(false);

  return (
    <footer id="footer" class={state ? "show" : 'hide'} onClick={() => setState(!state)}>
      <p href="#" class="info fa fa-info-circle"><span>About</span></p>
      <div class="inner">
        <div class="content">
          <h3>Zajmuje sie szyciem</h3>
          <p>Jako pierwszą maszynę do szycia można uznać dzieło niemieckiego wynalazcy o nazwisku: Charles Frederick Wiesenthal. Przebywając w Anglii skonstruował maszynę potrafiącą wiązać ścieg przy użyciu podwójnie zaostrzonej igły z centralnie umieszczonym oczkiem. Za ten wynalazek w 1755 roku otrzymał brytyjski patent o nr 701.</p>
        </div>
        <div class="copyright">
          <h3>Znajdziesz mnie na</h3>
          <ul class="icons">
            <li><a href="/" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
            <li><a href="/" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
            <li><a href="/" class="icon fa-instagram"><span class="label">Instagram</span></a></li>
            <li><a href="/" class="icon fa-dribbble"><span class="label">Dribbble</span></a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
};


export default Footer;