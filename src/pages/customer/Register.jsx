import Footer from "../../components/customer/Footer";
import Header from "../../components/customer/Header";
import PageTitle from "../../components/customer/PageTitle";

function Register() {
  return (
    <>
      {/* Main Wrapper Start */}
      <div id="scroll-container">


        {/* HEADER MENU START */}
        <Header />
        {/* HEADER MENU END */}

        {/* TITLE BANNER START */}
        <PageTitle title="Register" />
        {/* TITLE BANNER END */}

        {/* Register Start */}
        <div id="scroll-container">
          <div className="customer-container py-40">
            <div className="container-fluid">
              <div className="customer-wrapper">
                <div className="title-box ">
                  <h6 className="dark-gray">
                    Returning Customer?
                    <a
                      href="javascript:;"
                      className="color-ter text-decoration-underline signin-button"
                    >
                      Click here to login
                    </a>
                  </h6>
                </div>
                <div className="sign-form" style={{ display: "block" }}>
                  <p className="fw-500 mb-16">
                    If you’ve shopped with us before, enter your information
                    below. New customers, please continue to the Billing
                    section.
                  </p>
                  <form method="post">
                    <div className="row row-gap-3">
                      <div className="col-lg-6">
                        <div className="input-block">
                          <input
                            type="text"
                            name="name"
                            id="firstname"
                            className="form-control"
                            placeholder="First Name"
                          />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={25}
                            viewBox="0 0 24 25"
                            fill="none"
                          >
                            <path
                              d="M21.8906 4.0625H2.10938C0.943922 4.0625 0 5.01228 0 6.17188V18.8281C0 19.9946 0.950859 20.9375 2.10938 20.9375H21.8906C23.0463 20.9375 24 19.9986 24 18.8281V6.17188C24 5.01434 23.0598 4.0625 21.8906 4.0625ZM21.5952 5.46875C21.1642 5.89742 13.7476 13.275 13.4916 13.5297C13.0931 13.9281 12.5634 14.1475 12 14.1475C11.4366 14.1475 10.9069 13.9281 10.5071 13.5284C10.3349 13.3571 3.00014 6.06097 2.40478 5.46875H21.5952ZM1.40625 18.5419V6.45898L7.48303 12.5037L1.40625 18.5419ZM2.40567 19.5312L8.48006 13.4955L9.51408 14.5241C10.1781 15.1881 11.061 15.5538 12 15.5538C12.939 15.5538 13.8219 15.1881 14.4846 14.5254L15.5199 13.4955L21.5943 19.5312H2.40567ZM22.5938 18.5419L16.517 12.5037L22.5938 6.45898V18.5419Z"
                              fill="#45474F"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-block">
                          <input
                            type="text"
                            name="name"
                            id="lastname"
                            className="form-control"
                            placeholder="Last Name"
                          />
                          <i className="fa-regular fa-eye" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-block">
                          <input
                            type="text"
                            name="name"
                            id="firstname"
                            className="form-control"
                            placeholder="Email address"
                          />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={25}
                            viewBox="0 0 24 25"
                            fill="none"
                          >
                            <path
                              d="M21.8906 4.0625H2.10938C0.943922 4.0625 0 5.01228 0 6.17188V18.8281C0 19.9946 0.950859 20.9375 2.10938 20.9375H21.8906C23.0463 20.9375 24 19.9986 24 18.8281V6.17188C24 5.01434 23.0598 4.0625 21.8906 4.0625ZM21.5952 5.46875C21.1642 5.89742 13.7476 13.275 13.4916 13.5297C13.0931 13.9281 12.5634 14.1475 12 14.1475C11.4366 14.1475 10.9069 13.9281 10.5071 13.5284C10.3349 13.3571 3.00014 6.06097 2.40478 5.46875H21.5952ZM1.40625 18.5419V6.45898L7.48303 12.5037L1.40625 18.5419ZM2.40567 19.5312L8.48006 13.4955L9.51408 14.5241C10.1781 15.1881 11.061 15.5538 12 15.5538C12.939 15.5538 13.8219 15.1881 14.4846 14.5254L15.5199 13.4955L21.5943 19.5312H2.40567ZM22.5938 18.5419L16.517 12.5037L22.5938 6.45898V18.5419Z"
                              fill="#45474F"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-block">
                          <input
                            type="password"
                            name="password"
                            id="passWord"
                            className="form-control"
                            placeholder="Password"
                          />
                          <i className="fa-regular fa-eye" />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <button
                          type="submit"
                          className="cus-btn border-0 sign-submit-btn"
                        >
                          <span>Sign Up</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Register End */}

        {/* FOOTER START */}
        <Footer />
        {/* FOOTER END */}

        
      </div>
      {/* Main Wrapper End */}


      {/* Back To Top Start */}
      <button className="scrollToTopBtn">
        <i className="fa fa-arrow-up" />
      </button>
      {/* Back To Top End */}
      
    </>
  );
}

export default Register;
