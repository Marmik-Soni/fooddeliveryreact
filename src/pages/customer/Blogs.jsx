function Blogs() {
  return (
    <>
      <div id="scroll-container">
        {/* HEADER MENU START */}

        <div>
          <header className="header">
            <div className="container-fluid">
              <nav className="navigation d-flex align-items-center justify-content-between py-16">
                <a href="index-2.html" className="d-flex align-items-center">
                  <img
                    src="assets/media/logo.png"
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
                        <a href="javascript:void(0); " className="active">
                          Pages
                        </a>
                        <ul>
                          <li>
                            <a href="about.html">About Us</a>
                          </li>
                          <li>
                            <a href="shop-list.html">Shop List</a>
                          </li>
                          <li>
                            <a href="shop-detail.html">shop Detail</a>
                          </li>
                          <li>
                            <a href="our-team.html">Our Team</a>
                          </li>
                          <li>
                            <a href="blogs.html">Blogs</a>
                          </li>
                          <li>
                            <a href="blog-list.html">Blog List</a>
                          </li>
                          <li>
                            <a href="blog-detail.html">Blog Detail</a>
                          </li>
                          <li>
                            <a href="checkout.html">Checkout</a>
                          </li>
                          <li>
                            <a href="404.html">404</a>
                          </li>
                          <li>
                            <a href="coming-soon.html">Coming Soon</a>
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
                      <span className="text">reservation</span>
                    </a>
                  </div>
                  <a
                    href="#"
                    className="d-xl-none d-flex main-menu__toggler mobile-nav__toggler"
                  >
                    <img src="assets/media/icons/menu-2.png" alt />
                  </a>
                </div>
              </nav>
            </div>
          </header>
          {/* HEADER MENU END */}
          {/* TITLE BANNER START */}
          <section className="title-banner mb-80">
            <div className="container-fluid">
              <h2 className="title-content color-quat">Blogs</h2>
            </div>
          </section>
          {/* TITLE BANNER END */}
          {/* BLOG Section START */}
          <div className="blog-sec mb-80">
            <div className="container-fluid">
              <div className="row row-gap-4 mb-48">
                <div className="col-lg-4 col-md-6">
                  <div className="w-100">
                    <div className="w-100 drop-container">
                      <div
                        className="wrapper-dropdown medium-black"
                        id="dropdown-l"
                      >
                        <span className="selected-display" id="destination112">
                          Search Templates
                        </span>
                        <svg
                          id="drp-arrow12"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="arrow transition-all ml-auto rotate-180"
                        >
                          <path
                            d="M7 14.5l5-5 5 5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <ul className="topbar-dropdown w-100">
                          <li className="item white">Templates 1</li>
                          <li className="item white">Templates 2</li>
                          <li className="item white">Templates 3</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="w-100">
                    <div className="w-100 drop-container">
                      <div
                        className="wrapper-dropdown medium-black"
                        id="dropdown8"
                      >
                        <span className="selected-display" id="destination121">
                          Templates: View All
                        </span>
                        <svg
                          id="drp-arrow11"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="arrow transition-all ml-auto rotate-180"
                        >
                          <path
                            d="M7 14.5l5-5 5 5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <ul className="topbar-dropdown w-100">
                          <li className="item white">Templates 1</li>
                          <li className="item white">Templates 2</li>
                          <li className="item white">Templates 3</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-11">
                  <div className="w-100 d-lg-flex d-none align-items-center gap-16">
                    <div className="w-100 drop-container">
                      <div
                        className="wrapper-dropdown medium-black"
                        id="dropdown22"
                      >
                        <span className="selected-display" id="destination12">
                          Industrial: View All
                        </span>
                        <svg
                          id="drp-arrow1"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="arrow transition-all ml-auto rotate-180"
                        >
                          <path
                            d="M7 14.5l5-5 5 5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <ul className="topbar-dropdown w-100">
                          <li className="item white">Templates 1</li>
                          <li className="item white">Templates 2</li>
                          <li className="item white">Templates 3</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row row-gap-4 align-items-center">
                <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                  <div className="blog-content-area">
                    <div className="blog-img">
                      <a href="blog-detail.html">
                        <img className src="assets/media/blog/blog-1.jpg" alt />
                      </a>
                    </div>
                    <div className="blog-text-area">
                      <div className="d-flex gap-12 mb-8">
                        <p className="fw-500 light-gray">Dec 10, 2024</p>
                        <div className="d-flex align-items-center gap-8">
                          <div className="ingredients-ul" />
                          <p className="light-gray">2 Comment</p>
                        </div>
                      </div>
                      <a href="blog-detail.html" className="h6 dark-gray mb-16">
                        Two meat and cheese sandwiches
                      </a>
                      <p className="blog-smaller-text mb-24 fw-400">
                        Lorem ipsum dolor sit amet consectetur. Velit mi vitae
                        dolor curabitur duis sociis.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-inline-flex gap-6 align-items-center">
                          <i className="fa-light fa-clock-three light-gray" />
                          <p className="light-gray">5 Min Reads</p>
                        </div>
                        <a href="#" className="cus-btn">
                          learn more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                  <div className="blog-content-area">
                    <div className="blog-img">
                      <a href="blog-detail.html">
                        <img className src="assets/media/blog/blog-2.jpg" alt />
                      </a>
                    </div>
                    <div className="blog-text-area">
                      <div className="d-flex gap-12 mb-8">
                        <p className="fw-500 light-gray">Dec 10, 2024</p>
                        <div className="d-flex align-items-center gap-8">
                          <div className="ingredients-ul" />
                          <p className="light-gray">2 Comment</p>
                        </div>
                      </div>
                      <a href="blog-detail.html" className="h6 dark-gray mb-16">
                        A chicken roll in pita with grilled chicken
                      </a>
                      <p className="blog-smaller-text mb-24 fw-400">
                        Lorem ipsum dolor sit amet consectetur. Velit mi vitae
                        dolor curabitur duis sociis.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-inline-flex gap-6 align-items-center">
                          <i className="fa-light fa-clock-three light-gray" />
                          <p className="light-gray">5 Min Reads</p>
                        </div>
                        <a href="#" className="cus-btn">
                          learn more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                  <div className="blog-content-area">
                    <div className="blog-img">
                      <a href="blog-detail.html">
                        <img className src="assets/media/blog/blog-3.jpg" alt />
                      </a>
                    </div>
                    <div className="blog-text-area">
                      <div className="d-flex gap-12 mb-8">
                        <p className="fw-500 light-gray">Dec 10, 2024</p>
                        <div className="d-flex align-items-center gap-8">
                          <div className="ingredients-ul" />
                          <p className="light-gray">2 Comment</p>
                        </div>
                      </div>
                      <a
                        href="blog-detail.html"
                        className="h6 blog-hover-content dark-gray mb-16"
                      >
                        Indulge in a sesame bun burger, crispy fries
                      </a>
                      <p className="blog-smaller-text mb-24 fw-400">
                        Lorem ipsum dolor sit amet consectetur. Velit mi vitae
                        dolor curabitur duis sociis.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-inline-flex gap-6 align-items-center">
                          <i className="fa-light fa-clock-three light-gray" />
                          <p className="light-gray">5 Min Reads</p>
                        </div>
                        <a href="#" className="cus-btn">
                          learn more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                  <div className="blog-content-area">
                    <div className="blog-img">
                      <a href="blog-detail.html">
                        <img className src="assets/media/blog/blog-4.jpg" alt />
                      </a>
                    </div>
                    <div className="blog-text-area">
                      <div className="d-flex gap-12 mb-8">
                        <p className="fw-500 light-gray">Dec 10, 2024</p>
                        <div className="d-flex align-items-center gap-8">
                          <div className="ingredients-ul" />
                          <p className="light-gray">2 Comment</p>
                        </div>
                      </div>
                      <a
                        href="blog-detail.html"
                        className="h6 blog-hover-content dark-gray mb-16"
                      >
                        Hot dog dressed in mustard
                      </a>
                      <p className="blog-smaller-text mb-24 fw-400">
                        Lorem ipsum dolor sit amet consectetur. Velit mi vitae
                        dolor curabitur duis sociis.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-inline-flex gap-6 align-items-center">
                          <i className="fa-light fa-clock-three light-gray" />
                          <p className="light-gray">5 Min Reads</p>
                        </div>
                        <a href="#" className="cus-btn">
                          learn more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                  <div className="blog-content-area">
                    <div className="blog-img">
                      <a href="blog-detail.html">
                        <img className src="assets/media/blog/blog-5.jpg" alt />
                      </a>
                    </div>
                    <div className="blog-text-area">
                      <div className="d-flex gap-12 mb-8">
                        <p className="fw-500 light-gray">Dec 10, 2024</p>
                        <div className="d-flex align-items-center gap-8">
                          <div className="ingredients-ul" />
                          <p className="light-gray">2 Comment</p>
                        </div>
                      </div>
                      <a
                        href="blog-detail.html"
                        className="h6 blog-hover-content dark-gray mb-16"
                      >
                        Overhead shot of pepperoni burger
                      </a>
                      <p className="blog-smaller-text mb-24 fw-400">
                        Lorem ipsum dolor sit amet consectetur. Velit mi vitae
                        dolor curabitur duis sociis.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-inline-flex gap-6 align-items-center">
                          <i className="fa-light fa-clock-three light-gray" />
                          <p className="light-gray">5 Min Reads</p>
                        </div>
                        <a href="#" className="cus-btn">
                          learn more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                  <div className="blog-content-area">
                    <div className="blog-img">
                      <a href="blog-detail.html">
                        <img className src="assets/media/blog/blog-6.jpg" alt />
                      </a>
                    </div>
                    <div className="blog-text-area">
                      <div className="d-flex gap-12 mb-8">
                        <p className="fw-500 light-gray">Dec 10, 2024</p>
                        <div className="d-flex align-items-center gap-8">
                          <div className="ingredients-ul" />
                          <p className="light-gray">2 Comment</p>
                        </div>
                      </div>
                      <a
                        href="blog-detail.html"
                        className="h6 blog-hover-content dark-gray mb-16"
                      >
                        Penne pasta in meaty tomato sauce
                      </a>
                      <p className="blog-smaller-text mb-24 fw-400">
                        Lorem ipsum dolor sit amet consectetur. Velit mi vitae
                        dolor curabitur duis sociis.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-inline-flex gap-6 align-items-center">
                          <i className="fa-light fa-clock-three light-gray" />
                          <p className="light-gray">5 Min Reads</p>
                        </div>
                        <a href="#" className="cus-btn">
                          learn more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                  <div className="blog-content-area">
                    <div className="blog-img">
                      <a href="blog-detail.html">
                        <img className src="assets/media/blog/blog-7.jpg" alt />
                      </a>
                    </div>
                    <div className="blog-text-area">
                      <div className="d-flex gap-12 mb-8">
                        <p className="fw-500 light-gray">Dec 10, 2024</p>
                        <div className="d-flex align-items-center gap-8">
                          <div className="ingredients-ul" />
                          <p className="light-gray">2 Comment</p>
                        </div>
                      </div>
                      <a
                        href="blog-detail.html"
                        className="h6 blog-hover-content dark-gray mb-16"
                      >
                        Overhead shot of pepperoni pizza
                      </a>
                      <p className="blog-smaller-text mb-24 fw-400">
                        Lorem ipsum dolor sit amet consectetur. Velit mi vitae
                        dolor curabitur duis sociis.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-inline-flex gap-6 align-items-center">
                          <i className="fa-light fa-clock-three light-gray" />
                          <p className="light-gray">5 Min Reads</p>
                        </div>
                        <a href="#" className="cus-btn">
                          learn more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                  <div className="blog-content-area mb-48">
                    <div className="blog-img">
                      <a href="blog-detail.html">
                        <img className src="assets/media/blog/blog-8.jpg" alt />
                      </a>
                    </div>
                    <div className="blog-text-area">
                      <div className="d-flex gap-12 mb-8">
                        <p className="fw-500 light-gray">Dec 10, 2024</p>
                        <div className="d-flex align-items-center gap-8">
                          <div className="ingredients-ul" />
                          <p className="light-gray">2 Comment</p>
                        </div>
                      </div>
                      <a
                        href="blog-detail.html"
                        className="h6 blog-hover-content dark-gray mb-16"
                      >
                        Two meat and cheese sandwiches
                      </a>
                      <p className="blog-smaller-text mb-24 fw-400">
                        Lorem ipsum dolor sit amet consectetur. Velit mi vitae
                        dolor curabitur duis sociis.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-inline-flex gap-6 align-items-center">
                          <i className="fa-light fa-clock-three light-gray" />
                          <p className="light-gray">5 Min Reads</p>
                        </div>
                        <a href="#" className="cus-btn">
                          learn more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pagination">
                  <ul id="border-pagination">
                    <li>
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={30}
                          height={31}
                          viewBox="0 0 30 31"
                          fill="none"
                        >
                          <path
                            d="M11.8555 22.1405C11.8555 19.328 9.23047 15.578 6.23047 15.578M6.23047 15.578C7.94922 15.578 11.8555 14.6405 11.8555 9.0155M6.23047 15.578H24.043"
                            stroke="#FAFAFA"
                            strokeWidth="1.875"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="active">
                        1
                      </a>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">...</a>
                    </li>
                    <li>
                      <a href="#">9</a>
                    </li>
                    <li>
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={33}
                          height={32}
                          viewBox="0 0 33 32"
                          fill="none"
                        >
                          <path
                            d="M20.1953 22.9995C20.1953 19.9995 22.9953 15.9995 26.1953 15.9995M26.1953 15.9995C24.362 15.9995 20.1953 14.9995 20.1953 8.99951M26.1953 15.9995H7.19531"
                            stroke="#282525"
                            strokeWidth={2}
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* BLOG ARTICLE Section END */}
          {/* FOOTER START */}
          <footer className="footer">
            <div className="container-fluid">
              <div className="mb-48">
                <div className="row row-gap-4 align-items-center">
                  <div className="col-md-4">
                    <div className="information-1 text-center">
                      <h5 className="mb-24 color-ter">information</h5>
                      <p className="mb-8 white">
                        3910 S, Magna,ut, United States
                      </p>
                      <p className="mb-8 white">
                        Call us now: <a href="tel:+4733378901"> 0123-456-789</a>
                      </p>
                      <p className="mb-8 white">
                        Email:{" "}
                        <a href="mailto:sales@yourcompany.com">
                          sales@yourcompany.com
                        </a>
                      </p>
                    </div>
                    <div className="vr-line" />
                  </div>
                  <div className="col-md-4">
                    <div className="information-1 text-center">
                      <a href="index-2.html" className="mb-24">
                        <img src="assets/media/footer-logo.png" alt />
                      </a>
                      <p className="mb-24 white">
                        Sed ut perspiciatis unde omins iste natus error
                        <br />
                        accusantium doloremque laudantium.
                      </p>
                      <div className="social-icon">
                        <a href="#" className>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={25}
                            viewBox="0 0 24 25"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_21540_1716)">
                              <path
                                d="M17.6249 6.20312C18.0131 6.20312 18.3281 5.88812 18.3281 5.5V1.28125C18.3281 0.893125 18.0131 0.578125 17.6249 0.578125H13.4062C10.6921 0.578125 8.48431 2.78594 8.48431 5.5V9.01562H6.37494C5.98681 9.01562 5.67181 9.33063 5.67181 9.71875V13.9375C5.67181 14.3256 5.98681 14.6406 6.37494 14.6406H8.48431V23.875C8.48431 24.2631 8.79931 24.5781 9.18744 24.5781H13.4062C13.7943 24.5781 14.1093 24.2631 14.1093 23.875V14.6406H16.9218C17.2654 14.6406 17.5588 14.3922 17.6156 14.0533L18.3187 9.83453C18.3524 9.63062 18.2953 9.42203 18.1617 9.26406C18.0281 9.10656 17.8317 9.01562 17.6249 9.01562H14.1093V6.20312H17.6249ZM13.4062 10.4219H16.7948L16.326 13.2344H13.4062C13.0181 13.2344 12.7031 13.5494 12.7031 13.9375V23.1719H9.89056V13.9375C9.89056 13.5494 9.57556 13.2344 9.18744 13.2344H7.07806V10.4219H9.18744C9.57556 10.4219 9.89056 10.1069 9.89056 9.71875V5.5C9.89056 3.56172 11.4679 1.98438 13.4062 1.98438H16.9218V4.79688H13.4062C13.0181 4.79688 12.7031 5.11188 12.7031 5.5V9.71875C12.7031 10.1069 13.0181 10.4219 13.4062 10.4219Z"
                                fill="#FAFAFA"
                              />
                            </g>
                            <defs>
                              <clipPath>
                                <rect
                                  width={24}
                                  height={24}
                                  fill="white"
                                  transform="translate(-1.52588e-05 0.578125)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </a>
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={25}
                            viewBox="0 0 24 25"
                            fill="none"
                          >
                            <g>
                              <path
                                d="M14.242 10.7405L22.9844 0.578125H20.9127L13.3217 9.40196L7.25875 0.578125H0.265854L9.43422 13.9213L0.265854 24.5781H2.33765L10.354 15.2599L16.7569 24.5781H23.7498L14.2415 10.7405H14.242ZM11.4044 14.0389L10.4754 12.7102L3.08414 2.13773H6.26629L12.2312 10.6701L13.1601 11.9987L20.9137 23.0894H17.7316L11.4044 14.0394V14.0389Z"
                                fill="#FAFAFA"
                              />
                            </g>
                            <defs>
                              <clipPath>
                                <rect
                                  width={24}
                                  height={24}
                                  fill="white"
                                  transform="translate(-1.52588e-05 0.578125)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </a>
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={25}
                            viewBox="0 0 24 25"
                            fill="none"
                          >
                            <g>
                              <path
                                d="M12.2362 24.5781C12.1567 24.5781 12.0773 24.5781 11.9973 24.5777C10.116 24.5823 8.37781 24.5345 6.68738 24.4316C5.13757 24.3373 3.7229 23.8017 2.59607 22.8829C1.50879 21.9963 0.766296 20.7975 0.389282 19.3202C0.0611572 18.034 0.0437622 16.7715 0.0270996 15.5504C0.0150146 14.6742 0.00256348 13.636 0 12.5803C0.00256348 11.5201 0.0150146 10.4819 0.0270996 9.60571C0.0437622 8.38476 0.0611572 7.12225 0.389282 5.83593C0.766296 4.35864 1.50879 3.15984 2.59607 2.27325C3.7229 1.35442 5.13757 0.818841 6.68756 0.724542C8.37799 0.62182 10.1166 0.573846 12.0018 0.578424C13.8836 0.574396 15.6213 0.62182 17.3117 0.724542C18.8615 0.818841 20.2762 1.35442 21.403 2.27325C22.4905 3.15984 23.2328 4.35864 23.6098 5.83593C23.9379 7.12206 23.9553 8.38476 23.972 9.60571C23.9841 10.4819 23.9967 11.5201 23.9991 12.5759V12.5803C23.9967 13.636 23.9841 14.6742 23.972 15.5504C23.9553 16.7714 23.9381 18.0339 23.6098 19.3202C23.2328 20.7975 22.4905 21.9963 21.403 22.8829C20.2762 23.8017 18.8615 24.3373 17.3117 24.4316C15.6929 24.5301 14.0299 24.5781 12.2362 24.5781ZM11.9973 23.0912C13.8479 23.0956 15.5471 23.0487 17.1978 22.9484C18.3697 22.8772 19.752 22.1085 20.5844 21.4297C21.3538 20.8022 21.8837 19.9365 22.1593 18.8566C22.4325 17.7859 22.4482 16.6364 22.4634 15.5248C22.4753 14.6545 22.4878 13.6236 22.4903 12.5781C22.4878 11.5323 22.4753 10.5016 22.4634 9.63134C22.4482 8.51971 22.4325 7.37017 22.1593 6.29937C21.8837 5.21941 21.3538 4.35369 20.5844 3.72619C19.752 3.0476 18.3697 2.30144 17.1978 2.23021C15.5471 2.12969 13.8479 2.08336 12.0016 2.08739C10.1514 2.08299 8.45196 2.13519 6.80127 2.23571C5.62939 2.30694 4.37526 2.80952 3.54286 3.48811C2.77346 4.11561 2.10105 5.21941 1.82548 6.29937C1.55229 7.37017 1.53654 8.51952 1.52134 9.63134C1.50944 10.5024 1.49699 11.5338 1.49443 12.5803C1.49699 13.6221 1.50944 14.6537 1.52134 15.5248C1.53654 16.6364 1.55229 17.7859 1.82548 18.8566C2.10105 19.9365 2.63096 20.8022 3.40037 21.4297C4.23277 22.1083 5.62939 22.8772 6.80127 22.9484C8.45196 23.0489 10.1517 23.0958 11.9973 23.0912ZM11.9526 18.4374C8.72186 18.4374 6.0932 15.809 6.0932 12.5781C6.0932 9.34716 8.72186 6.71868 11.9526 6.71868C15.1835 6.71868 17.8119 9.34716 17.8119 12.5781C17.8119 15.809 15.1835 18.4374 11.9526 18.4374ZM12.0016 8.08301C9.36718 8.08301 7.51314 9.93705 7.51314 12.5759C7.51314 14.7728 9.17436 17.0911 11.9757 17.0911C14.1728 17.0911 16.457 15.0097 16.457 12.5759C16.457 10.379 14.781 8.08301 12.0016 8.08301ZM18.4682 4.84368C17.6916 4.84368 17.0619 5.4732 17.0619 6.24993C17.0619 7.02667 17.6916 7.65618 18.4682 7.65618C19.2449 7.65618 19.8744 7.02667 19.8744 6.24993C19.8744 5.4732 19.2449 4.84368 18.4682 4.84368Z"
                                fill="#FAFAFA"
                              />
                            </g>
                            <defs>
                              <clipPath>
                                <rect
                                  width={24}
                                  height={24}
                                  fill="white"
                                  transform="translate(0 0.578125)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </a>
                        <a href="#" className="social-icon-end">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={25}
                            viewBox="0 0 24 25"
                            fill="none"
                          >
                            <g>
                              <path
                                d="M8.78343 24.583C7.29093 24.583 5.83171 24.0622 4.6753 23.1162C3.15655 21.8741 2.28561 20.0403 2.28561 18.0851C2.28561 16.6611 2.73843 15.3083 3.59483 14.1734C4.42171 13.078 5.59827 12.2572 6.90796 11.863C8.07843 11.5105 9.31265 12.0959 9.77811 13.2251C9.80811 13.2973 9.83436 13.3723 9.85686 13.4464C10.0392 14.052 9.97499 14.6923 9.67593 15.2492C9.37686 15.8061 8.87858 16.2134 8.27296 16.3958C7.53515 16.618 7.01999 17.3126 7.01999 18.0851C7.01999 18.7025 7.35093 19.2833 7.8839 19.6011C8.17827 19.7769 8.51577 19.8617 8.8603 19.8472C9.80624 19.8069 10.5473 19.017 10.5473 18.0486V2.97265C10.5473 1.89265 11.2636 0.940617 12.2887 0.657961C12.4017 0.626554 12.518 0.604054 12.6333 0.590461C12.8475 0.564679 13.0645 0.568898 13.2787 0.601711C14.0953 0.723117 14.7989 1.27296 15.1158 2.03702C15.2353 2.3253 15.2958 2.62999 15.2958 2.94265C15.2958 4.19562 15.8653 5.35765 16.8586 6.13062C17.5692 6.68374 18.4205 6.97812 19.32 6.9814C20.2861 6.98468 21.15 7.56077 21.5212 8.44905C21.6834 8.83812 21.7378 9.26562 21.6778 9.68562C21.5114 10.8448 20.4914 11.7158 19.3026 11.7158C19.2984 11.7158 19.2947 11.7158 19.2905 11.7158C17.8781 11.7087 16.5136 11.3684 15.2817 10.723V18.0964C15.2817 18.1039 15.2817 18.1114 15.2812 18.1194C15.2705 20.0464 14.4117 21.8567 12.9244 23.0891C11.7619 24.0523 10.2914 24.583 8.78343 24.583ZM7.59327 13.1675C7.50046 13.1675 7.40624 13.1811 7.31296 13.2092C6.28686 13.5181 5.36483 14.1617 4.71702 15.0205C4.04624 15.9092 3.69186 16.9691 3.69186 18.0851C3.69186 19.6166 4.37483 21.0537 5.56593 22.0278C6.47202 22.7689 7.61483 23.1767 8.78343 23.1767C9.96421 23.1767 11.1164 22.7609 12.0267 22.0062C13.1953 21.0378 13.8689 19.6161 13.875 18.1053C13.875 18.1001 13.875 18.0941 13.8755 18.087V8.07218L14.9939 8.89062C16.2516 9.81124 17.7398 10.3016 19.2975 10.3095H19.3026C19.7962 10.3095 20.2181 9.95655 20.2856 9.4864C20.31 9.31483 20.2894 9.14843 20.2237 8.9914C20.0733 8.63187 19.7086 8.38905 19.3153 8.38765C18.1017 8.38343 16.9533 7.9864 15.9951 7.24015C14.6573 6.19859 13.89 4.63202 13.89 2.94265C13.89 2.81562 13.8656 2.69187 13.8173 2.57562C13.6884 2.26484 13.4025 2.04124 13.0716 1.99249L13.0655 1.99155C12.9773 1.97796 12.8883 1.97609 12.8001 1.98687C12.7547 1.99249 12.7087 2.0014 12.6633 2.01405C12.2447 2.1289 11.9531 2.52312 11.9531 2.97265V18.0486C11.9531 18.8722 11.6428 19.6564 11.0798 20.2569C10.5108 20.8639 9.74343 21.2173 8.91936 21.252C8.30015 21.2778 7.69311 21.125 7.16296 20.8086C6.20718 20.2386 5.61327 19.1947 5.61327 18.0851C5.61327 16.6976 6.53999 15.4494 7.86702 15.0495C8.11265 14.9755 8.31515 14.81 8.43655 14.5841C8.55796 14.3581 8.58421 14.098 8.51015 13.8523C8.50124 13.8223 8.48999 13.7914 8.4778 13.7614C8.32593 13.393 7.97296 13.1675 7.59327 13.1675ZM15.2808 18.1081V18.1142C15.2808 18.1123 15.2808 18.11 15.2808 18.1081Z"
                                fill="#FAFAFA"
                              />
                            </g>
                            <defs>
                              <clipPath>
                                <rect
                                  width={24}
                                  height={24}
                                  fill="white"
                                  transform="translate(0 0.578125)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </a>
                      </div>
                      <div className="vr-line" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="information-1 information-3 text-center">
                      <h5 className="mb-24 color-ter">working hours</h5>
                      <p className="mb-8 white">
                        Monday - Friday 08:00 am to 12:00 pm
                      </p>
                      <p className="mb-8 white">
                        Saturday 10:00 am to 03:00 pm
                      </p>
                      <p className="mb-8 white">Sunday 12:00 pm to 05:00 pm</p>
                    </div>
                    <div className="vr-line" />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <p className="white">
                  @2024 All Rights Copyright{" "}
                  <a href="index-2.html" className="color-ter fw-700">
                    Savory Bites.
                  </a>
                  Design &amp; Developed By UIPARADOX.
                </p>
              </div>
            </div>
          </footer>
          {/* FOOTER END */}
          {/* Main Wrapper End */}
        </div>
      </div>
    </>
  );
}

export default Blogs;
