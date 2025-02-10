function AdminLogin() {
  return (
    <>
      {/* #wrapper */}
      <div id="wrapper">
        {/* #page */}
        <div id="page" className>
          <div className="wrap-login-page">
            <div className="flex-grow flex flex-column justify-center gap30">
              <a href="index.html" id="site-logo-inner"></a>
              <div className="login-box">
                <div>
                  <h3>Login to account</h3>
                  <div className="body-text">
                    Enter your username &amp; password to login
                  </div>
                </div>
                <form className="form-login flex flex-column gap24">
                  <fieldset className="email">
                    <div className="body-title mb-10">
                      Username <span className="tf-color-1">*</span>
                    </div>
                    <input
                      className="flex-grow"
                      type="email"
                      placeholder="Enter your email address"
                      name="email"
                      tabIndex={0}
                      required
                    />
                  </fieldset>
                  <fieldset className="password">
                    <div className="body-title mb-10">
                      Password <span className="tf-color-1">*</span>
                    </div>
                    <input
                      className="password-input"
                      type="password"
                      placeholder="Enter your password"
                      name="password"
                      tabIndex={0}
                      required
                    />
                    <span className="show-pass">
                      <i className="icon-eye view" />
                      <i className="icon-eye-off hide" />
                    </span>
                  </fieldset>
                  <div className="flex justify-between items-center">
                    <div className="flex gap10">
                      <input className type="checkbox" id="signed" />
                      <label className="body-text" htmlFor="signed">
                        Keep me signed in
                      </label>
                    </div>
                    <a href="#" className="body-text tf-color">
                      Forgot password?
                    </a>
                  </div>
                  <a href="index.html" className="tf-button w-full">
                    Login
                  </a>
                </form>
                
                <div className="body-text text-center">
                  New Customer?
                  <a href="sign-up.html" className="body-text tf-color">
                    &nbsp; Register Now
                  </a>
                </div>
              </div>
            </div>
            <div className="text-tiny">
              Copyright © 2024, All rights reserved.
            </div>
          </div>
        </div>
        {/* /#page */}
      </div>
      {/* /#wrapper */}
      {/* Javascript */}
    </>
  );
}

export default AdminLogin;
