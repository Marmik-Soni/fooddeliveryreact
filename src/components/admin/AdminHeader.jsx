function AdminHeader() {
  return (
    <>
      {/* header-dashboard */}
      <div className="header-dashboard">
        <div className="wrap">
          <div className="header-left">
            <form className="form-search flex-grow">
              <fieldset className="name">
                <input
                  type="text"
                  placeholder="Search here..."
                  className="show-search"
                  name="name"
                  tabIndex={2}
                  required
                />
              </fieldset>
              <div className="button-submit">
                <button className type="submit">
                  <div class="icons8-search"></div>
                </button>
              </div>
              <div className="box-content-search" id="box-content-search">
                <ul className="mb-24">
                  <li className="mb-14">
                    <div className="body-title">Top selling product</div>
                  </li>
                  <li className="mb-14">
                    <div className="divider" />
                  </li>
                  <li>
                    <ul>
                      <li className="product-item gap14 mb-10">
                        <div className="image no-bg">
                          <img src="/remos/images/products/17.png" alt />
                        </div>
                        <div className="flex items-center justify-between gap20 flex-grow">
                          <div className="name">
                            <a href="product-list.html" className="body-text">
                              Dog Food Rachael Ray Nutrish®
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="mb-10">
                        <div className="divider" />
                      </li>
                      <li className="product-item gap14 mb-10">
                        <div className="image no-bg">
                          <img src="/remos/images/products/18.png" alt />
                        </div>
                        <div className="flex items-center justify-between gap20 flex-grow">
                          <div className="name">
                            <a href="product-list.html" className="body-text">
                              Natural Dog Food Healthy Dog Food
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="mb-10">
                        <div className="divider" />
                      </li>
                      <li className="product-item gap14">
                        <div className="image no-bg">
                          <img src="/remos/images/products/19.png" alt />
                        </div>
                        <div className="flex items-center justify-between gap20 flex-grow">
                          <div className="name">
                            <a href="product-list.html" className="body-text">
                              Freshpet Healthy Dog Food and Cat
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul className>
                  <li className="mb-14">
                    <div className="body-title">Order product</div>
                  </li>
                  <li className="mb-14">
                    <div className="divider" />
                  </li>
                  <li>
                    <ul>
                      <li className="product-item gap14 mb-10">
                        <div className="image no-bg">
                          <img src="/remos/images/products/20.png" alt />
                        </div>
                        <div className="flex items-center justify-between gap20 flex-grow">
                          <div className="name">
                            <a href="product-list.html" className="body-text">
                              Sojos Crunchy Natural Grain Free...
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="mb-10">
                        <div className="divider" />
                      </li>
                      <li className="product-item gap14 mb-10">
                        <div className="image no-bg">
                          <img src="/remos/images/products/21.png" alt />
                        </div>
                        <div className="flex items-center justify-between gap20 flex-grow">
                          <div className="name">
                            <a href="product-list.html" className="body-text">
                              Kristin Watson
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="mb-10">
                        <div className="divider" />
                      </li>
                      <li className="product-item gap14 mb-10">
                        <div className="image no-bg">
                          <img src="/remos/images/products/22.png" alt />
                        </div>
                        <div className="flex items-center justify-between gap20 flex-grow">
                          <div className="name">
                            <a href="product-list.html" className="body-text">
                              Mega Pumpkin Bone
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="mb-10">
                        <div className="divider" />
                      </li>
                      <li className="product-item gap14">
                        <div className="image no-bg">
                          <img src="/remos/images/products/23.png" alt />
                        </div>
                        <div className="flex items-center justify-between gap20 flex-grow">
                          <div className="name">
                            <a href="product-list.html" className="body-text">
                              Mega Pumpkin Bone
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </form>
          </div>
          <div className="header-grid">
            <div className="header-item button-dark-light">
              <svg
                width="69px"
                height="69px"
                viewBox="-4.32 -4.32 32.64 32.64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <circle
                    cx="12"
                    cy="12"
                    r="5"
                    stroke="#1C274C"
                    stroke-width="1.6320000000000001"
                  ></circle>{" "}
                  <path
                    d="M12 2V4"
                    stroke="#1C274C"
                    stroke-width="1.6320000000000001"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M12 20V22"
                    stroke="#1C274C"
                    stroke-width="1.6320000000000001"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M4 12L2 12"
                    stroke="#1C274C"
                    stroke-width="1.6320000000000001"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M22 12L20 12"
                    stroke="#1C274C"
                    stroke-width="1.6320000000000001"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M19.7778 4.22266L17.5558 6.25424"
                    stroke="#1C274C"
                    stroke-width="1.6320000000000001"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M4.22217 4.22266L6.44418 6.25424"
                    stroke="#1C274C"
                    stroke-width="1.6320000000000001"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M6.44434 17.5557L4.22211 19.7779"
                    stroke="#1C274C"
                    stroke-width="1.6320000000000001"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M19.7778 19.7773L17.5558 17.5551"
                    stroke="#1C274C"
                    stroke-width="1.6320000000000001"
                    stroke-linecap="round"
                  ></path>{" "}
                </g>
              </svg>
              {/* Below commented is moon icon */}
              {/* <svg width="64px" height="64px" viewBox="-5.28 -5.28 34.56 34.56" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0174 2.80157C6.37072 3.29221 2.75 7.22328 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C16.7767 21.25 20.7078 17.6293 21.1984 12.9826C19.8717 14.6669 17.8126 15.75 15.5 15.75C11.4959 15.75 8.25 12.5041 8.25 8.5C8.25 6.18738 9.33315 4.1283 11.0174 2.80157ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C12.7166 1.25 13.0754 1.82126 13.1368 2.27627C13.196 2.71398 13.0342 3.27065 12.531 3.57467C10.8627 4.5828 9.75 6.41182 9.75 8.5C9.75 11.6756 12.3244 14.25 15.5 14.25C17.5882 14.25 19.4172 13.1373 20.4253 11.469C20.7293 10.9658 21.286 10.804 21.7237 10.8632C22.1787 10.9246 22.75 11.2834 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z" fill="#1C274C"></path> </g></svg> */}
            </div>
            <div className="popup-wrap noti type-header">
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="header-item">
                    <span className="text-tiny">1</span>
                    {/* Bell Icon */}
                    <svg
                      width="64px"
                      height="64px"
                      viewBox="-2.16 -2.16 28.32 28.32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M9.00195 17H5.60636C4.34793 17 3.71872 17 3.58633 16.9023C3.4376 16.7925 3.40126 16.7277 3.38515 16.5436C3.37082 16.3797 3.75646 15.7486 4.52776 14.4866C5.32411 13.1835 6.00031 11.2862 6.00031 8.6C6.00031 7.11479 6.63245 5.69041 7.75766 4.6402C8.88288 3.59 10.409 3 12.0003 3C13.5916 3 15.1177 3.59 16.2429 4.6402C17.3682 5.69041 18.0003 7.11479 18.0003 8.6C18.0003 11.2862 18.6765 13.1835 19.4729 14.4866C20.2441 15.7486 20.6298 16.3797 20.6155 16.5436C20.5994 16.7277 20.563 16.7925 20.4143 16.9023C20.2819 17 19.6527 17 18.3943 17H15.0003M9.00195 17L9.00031 18C9.00031 19.6569 10.3435 21 12.0003 21C13.6572 21 15.0003 19.6569 15.0003 18V17M9.00195 17H15.0003"
                          stroke="#1C274C"
                          stroke-width="1.44"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                  </span>
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-end has-content"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <h6>Message</h6>
                  </li>
                  <li>
                    <div className="noti-item w-full wg-user active">
                      <div className="image">
                        <img src="/remos/images/avatar/user-11.png" alt />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between">
                          <a href="#" className="body-title">
                            Cameron Williamson
                          </a>
                          <div className="time">10:13 PM</div>
                        </div>
                        <div className="text-tiny">Hello?</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="noti-item w-full wg-user active">
                      <div className="image">
                        <img src="/remos/images/avatar/user-12.png" alt />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between">
                          <a href="#" className="body-title">
                            Ralph Edwards
                          </a>
                          <div className="time">10:13 PM</div>
                        </div>
                        <div className="text-tiny">
                          Are you there? interested i this...
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="noti-item w-full wg-user active">
                      <div className="image">
                        <img src="/remos/images/avatar/user-13.png" alt />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between">
                          <a href="#" className="body-title">
                            Eleanor Pena
                          </a>
                          <div className="time">10:13 PM</div>
                        </div>
                        <div className="text-tiny">
                          Interested in this loads?
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="noti-item w-full wg-user active">
                      <div className="image">
                        <img src="/remos/images/avatar/user-11.png" alt />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between">
                          <a href="#" className="body-title">
                            Jane Cooper
                          </a>
                          <div className="time">10:13 PM</div>
                        </div>
                        <div className="text-tiny">
                          Okay...Do we have a deal?
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="#" className="tf-button w-full">
                      View all
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="popup-wrap message type-header">
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="header-item">
                    <span className="text-tiny">1</span>
                    {/* Message icon */}
                    <svg
                      width="64px"
                      height="64px"
                      viewBox="-4.32 -4.32 32.64 32.64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M7 7H17"
                          stroke="#1C274C"
                          stroke-width="1.512"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                        <path
                          d="M7 11H11"
                          stroke="#1C274C"
                          stroke-width="1.512"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                        <path
                          d="M3 5V20.7929C3 21.2383 3.53857 21.4614 3.85355 21.1464L7.70711 17.2929C7.89464 17.1054 8.149 17 8.41421 17H19C20.1046 17 21 16.1046 21 15V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5Z"
                          stroke="#1C274C"
                          stroke-width="1.512"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                  </span>
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-end has-content"
                  aria-labelledby="dropdownMenuButton2"
                >
                  <li>
                    <h6>Notifications</h6>
                  </li>
                  <li>
                    <div className="message-item item-1">
                      <div className="image">
                        <i className="icon-noti-1" />
                      </div>
                      <div>
                        <div className="body-title-2">Discount available</div>
                        <div className="text-tiny">
                          Morbi sapien massa, ultricies at rhoncus at,
                          ullamcorper nec diam
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="message-item item-2">
                      <div className="image">
                        <i className="icon-noti-2" />
                      </div>
                      <div>
                        <div className="body-title-2">
                          Account has been verified
                        </div>
                        <div className="text-tiny">
                          Mauris libero ex, iaculis vitae rhoncus et
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="message-item item-3">
                      <div className="image">
                        <i className="icon-noti-3" />
                      </div>
                      <div>
                        <div className="body-title-2">
                          Order shipped successfully
                        </div>
                        <div className="text-tiny">
                          Integer aliquam eros nec sollicitudin sollicitudin
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="message-item item-4">
                      <div className="image">
                        <i className="icon-noti-4" />
                      </div>
                      <div>
                        <div className="body-title-2">
                          Order pending: <span>ID 305830</span>
                        </div>
                        <div className="text-tiny">
                          Ultricies at rhoncus at ullamcorper
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="#" className="tf-button w-full">
                      View all
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="popup-wrap apps type-header">
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton4"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="header-item">
                    <i className="icon-grid" />
                  </span>
                </button>
              </div>
            </div>
            <div className="popup-wrap user type-header">
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton3"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="header-user wg-user">
                    <span className="image">
                      <img src="/remos/images/avatar/user-1.png" alt />
                    </span>
                    <span className="flex flex-column">
                      <span className="body-title mb-2">Kristin Watson</span>
                      <span className="text-tiny">Admin</span>
                    </span>
                  </span>
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-end has-content"
                  aria-labelledby="dropdownMenuButton3"
                >
                  <li>
                    <a href="#" className="user-item">
                      <div className="icon">
                        <i className="icon-user" />
                      </div>
                      <div className="body-title-2">Account</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="user-item">
                      <div className="icon">
                        <i className="icon-mail" />
                      </div>
                      <div className="body-title-2">Inbox</div>
                      <div className="number">27</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="user-item">
                      <div className="icon">
                        <i className="icon-file-text" />
                      </div>
                      <div className="body-title-2">Taskboard</div>
                    </a>
                  </li>
                  <li>
                    <a href="" className="user-item">
                      <div className="icon"></div>
                      <div className="body-title-2">Setting</div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="user-item">
                      <div className="icon">
                        <i className="icon-headphones" />
                      </div>
                      <div className="body-title-2">Support</div>
                    </a>
                  </li>
                  <li>
                    <a href="login.html" className="user-item">
                      <div className="icon">
                        <i className="icon-log-out" />
                      </div>
                      <div className="body-title-2">Log out</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /header-dashboard */}
    </>
  );
}

export default AdminHeader;
