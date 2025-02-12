function Header() {
  return (
    <>
      <header className="header">
        <div className="container-fluid">
          <nav className="navigation d-flex align-items-center justify-content-between py-16">
            <a href="index-2.html" className="d-flex align-items-center">
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
                    <a href="index-2.html">Home</a>
                  </li>
                  <li>
                    <a href="shop.html">Shop</a>
                  </li>
                  <li>
                    <a href="menu.html">Menu</a>
                  </li>
                  <li className="dropdown">
                    <a href="javascript:void(0);" className="active">
                      Pages
                    </a>
                    <ul>
                      <li>
                        <a href="about.html">Login</a>
                      </li>
                      <li>
                        <a href="shop-list.html">Register</a>
                      </li>
                      <li>
                        <a href="shop-detail.html">My Account</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="contact.html">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="main-menu__right">
              <div className="search-heart-icon d-sm-flex d-none align-items-center gap-24">
                <a className="cus-btn" href="contact.html">
                  <span className="text">Admin</span>
                </a>
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