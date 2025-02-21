import { NavLink } from "react-router";

function Header() {
  return (
    <>
      <header className="header">
        <div className="container-fluid">
          <nav className="navigation d-flex align-items-center justify-content-between py-16">
            <a href="/" className="d-flex align-items-center">
              <img
                src="/savory/assets/media/logo.png"
                alt="/logo"
                className="header-logo"
              />
            </a>
            <div className="menu-button-right">
              <div className="main-menu__nav">
                <ul className="main-menu__list">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <NavLink to="/products">Shop</NavLink>
                  </li>
                  <li>
                    <NavLink to="/menu">Menu</NavLink>
                  </li>
                  <li className="dropdown">
                    <a href="javascript:void(0);" className="active">
                      Pages
                    </a>
                    <ul>
                      <li>
                        <NavLink to="/login">Login</NavLink>
                      </li>
                      <li>
                        <NavLink to="/register">Register</NavLink>
                      </li>
                      {/* <li>
                        <NavLink to="/my-account">My Account</NavLink>
                      </li> */}
                    </ul>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact Us</NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="main-menu__right">
              <div className="search-heart-icon d-sm-flex d-none align-items-center gap-24">
                <NavLink className="cus-btn" to="/admin">
                  <span className="text">Admin</span>
                </NavLink>
              </div>
              <a
                href="#"
                className="d-xl-none d-flex main-menu__toggler mobile-nav__toggler"
              >
                <img src="/savory/assets/media/icons/menu-2.png" alt />
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;