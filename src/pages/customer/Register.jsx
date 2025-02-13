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
            <div className="container-fluid mb-32">
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
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-block">
                          <input
                            type="text"
                            name="username"
                            id="username"
                            className="form-control"
                            placeholder="Username"
                          />
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
