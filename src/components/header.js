import { Link} from "react-router-dom";

const Header = () => {
  return <>
    <header>
      <div className="header-wrapper">
        <div className="lg-nv">
          <div className="logo">ola.doc</div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
                </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/">How it works?</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="patient-login">
          <button className="btn-login">Patient Login</button>
        </div>
      </div>
    </header>
  </>
}

export default Header;
