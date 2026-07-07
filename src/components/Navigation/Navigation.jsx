// import a css file containig header styles
import './Navigation.scss';

// Create a Header function returning the HTML of header block
function Nav() {
  return (
    <navigation className="navigation">
      <a className="navigation__link" href="#about">
        About
      </a>
      <a className="navigation__link" href="#services">
        Services
      </a>
      <a className="navigation__link" href="#contact">
        Contact
      </a>
    </navigation>
  );
}

export default Nav;
