import Footer from "../../components/customer/Footer";
import Header from "../../components/customer/Header";
import PageTitle from "../../components/customer/PageTitle";

function About() {
  return (
    <>
      <div>
        {/* Main Wrapper Start */}
        <div id="scroll-container">


          {/* HEADER MENU START */}
          <Header />
          {/* HEADER MENU END */}


          {/* TITLE BANNER START */}
          <PageTitle />
          {/* TITLE BANNER END */}


          {/* About Section START */}
          <section className="about-us py-80">
            <div className="container-fluid">
              <div className="row align-items-center row-gap-4">
                <div className="col-xl-5 offset-xl-1 col-lg-6 offset-lg-0 order-lg-0 order-2">
                  <img className src="/savory/assets/media/about/about-img-1.png" alt />
                </div>
                <div className="col-xl-5 col-lg-6">
                  <span className="eyebrow about-btn bg-primary br-12 white mb-6">
                    about us
                  </span>
                  <h2 className="medium-black mb-24">
                    Juicy Burgers,
                    <br /> Unmatched Flavor
                  </h2>
                  <p className="light-gray mb-24">
                    Lorem ipsum dolor sit amet consectetur. Sed euismod justo
                    <br /> volutpat malesuada. Purus in pellentesque a convallis
                    morbi <br />
                    convallis.
                  </p>
                  <ul className="dark-gray fw-600 d-flex gap-64 mb-16">
                    <li>Locally-Sourced Beef</li>
                    <li>Organic Ingredients</li>
                  </ul>
                  <ul className="dark-gray fw-600 d-flex gap-64 mb-24">
                    <li>Sustainable Practices</li>
                    <li>Custom Blend</li>
                  </ul>
                  <hr className="mb-24" />
                  <div className="user-icon">
                    <img
                      className
                      src="/savory/assets/media/about/about-user.jpg"
                      alt
                    />
                    <div>
                      <h6 className="medium-black mb-8">Ethan Rodriguez</h6>
                      <p className="color-ter">CEO - Owner</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* About Section END */}


          {/* FOOTER START */}
          <Footer />
          {/* FOOTER END */}

          
          {/* Main Wrapper End */}
        </div>
        {/* Back To Top Start */}
        <button className="scrollToTopBtn">
          <i className="fa fa-arrow-up" />
        </button>
        {/* Mobile Menu Start */}
        <div className="mobile-nav__wrapper">
          <div className="mobile-nav__overlay mobile-nav__toggler" />
          <div className="mobile-nav__content">
            <span className="mobile-nav__close mobile-nav__toggler">
              <i className="fa fa-times" />
            </span>
            <div className="logo-box">
              <a href="index-2.html" aria-label="logo image">
                <img src="/savory/assets/media/logo.png" alt />
              </a>
            </div>
            <div className="mobile-nav__container" />
            <ul className="mobile-nav__contact list-unstyled">
              <li>
                <i className="fas fa-envelope" />
                <a href="mailto:example@company.com">example@company.com</a>
              </li>
              <li>
                <i className="fa-solid fa-phone" />
                <a href="tel:+12345678">+123 (4567) -890</a>
              </li>
            </ul>
            <div className="mobile-nav__social">
              <a href="#">
                <i className="fa-brands fa-x-twitter" />
              </a>
              <a href="#">
                <i className="fa-brands fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
        </div>
        {/* Mobile Menu End */}
      </div>
    </>
  );
}

export default About
