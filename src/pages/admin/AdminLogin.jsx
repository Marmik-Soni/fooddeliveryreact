import "/src/css/style.css";

function AdminLogin() {
  return (
    <>
      <div id="page" className="login-page">
        <div className="wrap-login-page">
          <div className="flex-grow flex flex-column justify-center gap30">
            <a href="index.html" id="site-logo-inner"></a>
            <div className="login-box">
              <div>
                <h3>Admin Login</h3>
                <div className="body-text">
                  Enter your email &amp; password to login
                </div>
              </div>
              <form className="form-login flex flex-column gap24">
                <fieldset className="email">
                  <div className="body-title mb-10">
                    Email address <span className="tf-color-1">*</span>
                  </div>
                  <input
                    className="flex-grow"
                    type="email"
                    placeholder="Enter your email address"
                    name="email"
                    tabIndex={0}
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
                Are you a customer?&nbsp;
                <a href="sign-up.html" className="body-text tf-color">
                  Login Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminLogin;
