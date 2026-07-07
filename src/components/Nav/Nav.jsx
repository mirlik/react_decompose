// import a css file containig header styles
import './Nav.scss';

// Create a Header function returning the HTML of header block
function Nav() {
  return (
    <nav className="nav">
      <a className="navigation__link" href="#about">
        About
      </a>
      <a className="navigation__link" href="#services">
        Services
      </a>
      <a className="navigation__link" href="#contact">
        Contact
      </a>
    </nav>
  );
}

export default Nav;
