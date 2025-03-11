// Import Components
import AdminFooter from "../../components/admin/AdminFooter";
import AdminHeader from "../../components/admin/AdminHeader";
import AdminSideBar from "../../components/admin/AdminSidebar";

// Import Package
import { useEffect, useState } from "react";
import { db } from "../../firebaseconfig";
import { collection, onSnapshot } from "firebase/firestore";

function CategoryList() {
  let [categories, setCategories] = useState();

  useEffect(() => {
    getCategories();
  }, []);

  function getCategories() {
    let colref = collection(db, "categories");
    onSnapshot(colref, (snapshot) => {
      let result = [];
      snapshot.docs.forEach((doc) => {
        result.push({ id: doc.id, ...doc.data() });
      });
      setCategories(result);
    });
  }

  return (
    <>
      <div id="wrapper">
        {/* #page */}
        <div id="page" className>
          {/* layout-wrap */}
          <div className="layout-wrap">
            {/* Admin SideBar */}
            <AdminSideBar />

            {/* Admin Header */}
            <AdminHeader />

            {/* section-content-right */}
            <div className="section-content-right">
              {/* header-dashboard */}
              <div className="header-dashboard">
                <div className="wrap">
                  <div className="header-left">
                    <a href="index.html">
                      <img
                        className
                        id="logo_header_mobile"
                        alt
                        src="images/logo/logo.png"
                        data-light="images/logo/logo.png"
                        data-dark="images/logo/logo-dark.png"
                        data-width="154px"
                        data-height="52px"
                        data-retina="images/logo/logo@2x.png"
                      />
                    </a>
                    <div className="button-show-hide">
                      <i className="icon-menu-left" />
                    </div>
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
                          <i className="icon-search" />
                        </button>
                      </div>
                      <div
                        className="box-content-search"
                        id="box-content-search"
                      >
                        <ul className="mb-24">
                          <li className="mb-14">
                            <div className="body-title">
                              Top selling product
                            </div>
                          </li>
                          <li className="mb-14">
                            <div className="divider" />
                          </li>
                          <li>
                            <ul>
                              <li className="product-item gap14 mb-10">
                                <div className="image no-bg">
                                  <img src="images/products/17.png" alt />
                                </div>
                              </li>
                              <li className="mb-10">
                                <div className="divider" />
                              </li>
                              <li className="product-item gap14 mb-10">
                                <div className="image no-bg">
                                  <img src="images/products/18.png" alt />
                                </div>
                                <div className="flex items-center justify-between gap20 flex-grow">
                                  <div className="name">
                                    <a
                                      href="product-list.html"
                                      className="body-text"
                                    >
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
                                  <img src="images/products/19.png" alt />
                                </div>
                                <div className="flex items-center justify-between gap20 flex-grow">
                                  <div className="name">
                                    <a
                                      href="product-list.html"
                                      className="body-text"
                                    >
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
                                  <img src="images/products/20.png" alt />
                                </div>
                                <div className="flex items-center justify-between gap20 flex-grow">
                                  <div className="name">
                                    <a
                                      href="product-list.html"
                                      className="body-text"
                                    >
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
                                  <img src="images/products/21.png" alt />
                                </div>
                                <div className="flex items-center justify-between gap20 flex-grow">
                                  <div className="name">
                                    <a
                                      href="product-list.html"
                                      className="body-text"
                                    >
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
                                  <img src="images/products/22.png" alt />
                                </div>
                                <div className="flex items-center justify-between gap20 flex-grow">
                                  <div className="name">
                                    <a
                                      href="product-list.html"
                                      className="body-text"
                                    >
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
                                  <img src="images/products/23.png" alt />
                                </div>
                                <div className="flex items-center justify-between gap20 flex-grow">
                                  <div className="name">
                                    <a
                                      href="product-list.html"
                                      className="body-text"
                                    >
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
                    <div className="header-item country">
                      <select className="image-select no-text">
                        <option data-thumbnail="images/country/1.png">
                          ENG
                        </option>
                        <option data-thumbnail="images/country/9.png">
                          VIE
                        </option>
                      </select>
                    </div>
                    <div className="header-item button-dark-light">
                      <i className="icon-moon" />
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
                            <i className="icon-bell" />
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
                                <img src="images/avatar/user-11.png" alt />
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
                                <img src="images/avatar/user-12.png" alt />
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
                                <img src="images/avatar/user-13.png" alt />
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
                                <img src="images/avatar/user-11.png" alt />
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
                            <i className="icon-message-square" />
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
                                <div className="body-title-2">
                                  Discount available
                                </div>
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
                                  Integer aliquam eros nec sollicitudin
                                  sollicitudin
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
                    <div className="header-item button-zoom-maximize">
                      <div className>
                        <i className="icon-maximize" />
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
                        <ul
                          className="dropdown-menu dropdown-menu-end has-content"
                          aria-labelledby="dropdownMenuButton4"
                        >
                          <li>
                            <h6>Related apps</h6>
                          </li>
                          <li>
                            <ul className="list-apps">
                              <li className="item">
                                <div className="image">
                                  <img src="images/apps/item-1.png" alt />
                                </div>
                                <a href="#">
                                  <div className="text-tiny">Photoshop</div>
                                </a>
                              </li>
                              <li className="item">
                                <div className="image">
                                  <img src="images/apps/item-2.png" alt />
                                </div>
                                <a href="#">
                                  <div className="text-tiny">illustrator</div>
                                </a>
                              </li>
                              <li className="item">
                                <div className="image">
                                  <img src="images/apps/item-3.png" alt />
                                </div>
                                <a href="#">
                                  <div className="text-tiny">Sheets</div>
                                </a>
                              </li>
                              <li className="item">
                                <div className="image">
                                  <img src="images/apps/item-4.png" alt />
                                </div>
                                <a href="#">
                                  <div className="text-tiny">Gmail</div>
                                </a>
                              </li>
                              <li className="item">
                                <div className="image">
                                  <img src="images/apps/item-5.png" alt />
                                </div>
                                <a href="#">
                                  <div className="text-tiny">Messenger</div>
                                </a>
                              </li>
                              <li className="item">
                                <div className="image">
                                  <img src="images/apps/item-6.png" alt />
                                </div>
                                <a href="#">
                                  <div className="text-tiny">Youtube</div>
                                </a>
                              </li>
                              <li className="item">
                                <div className="image">
                                  <img src="images/apps/item-7.png" alt />
                                </div>
                                <a href="#">
                                  <div className="text-tiny">Flaticon</div>
                                </a>
                              </li>
                              <li className="item">
                                <div className="image">
                                  <img src="images/apps/item-8.png" alt />
                                </div>
                                <a href="#">
                                  <div className="text-tiny">Instagram</div>
                                </a>
                              </li>
                              <li className="item">
                                <div className="image">
                                  <img src="images/apps/item-9.png" alt />
                                </div>
                                <a href="#">
                                  <div className="text-tiny">PDF</div>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#" className="tf-button w-full">
                              View all app
                            </a>
                          </li>
                        </ul>
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
                              <img src="images/avatar/user-1.png" alt />
                            </span>
                            <span className="flex flex-column">
                              <span className="body-title mb-2">
                                Kristin Watson
                              </span>
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
                            <a href="setting.html" className="user-item">
                              <div className="icon">
                                <i className="icon-settings" />
                              </div>
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
              {/* main-content */}
              <div className="main-content">
                {/* main-content-wrap */}
                <div className="main-content-inner">
                  {/* main-content-wrap */}
                  <div className="main-content-wrap">
                    <div className="flex items-center flex-wrap justify-between gap20 mb-27">
                      <h3>All Categories </h3>
                    </div>
                    {/* all-attribute */}
                    <div className="wg-box">
                      <div className="flex items-center justify-between gap10 flex-wrap">
                        <div className="wg-filter flex-grow">
                          <form className="form-search">
                            <fieldset className="name">
                              <input
                                type="text"
                                placeholder="Search here..."
                                className
                                name="name"
                                tabIndex={2}
                                required
                              />
                            </fieldset>
                            <div className="button-submit">
                              <button className type="submit">
                                <i className="icon-search" />
                              </button>
                            </div>
                          </form>
                        </div>
                        <a
                          className="tf-button style-1 w208"
                          href="/addCategory"
                        >
                          <i className="icon-plus" />
                          Add new
                        </a>
                      </div>
                      <div className="divider" />
                      <div className="wg-table table-all-attribute">
                        <ul className="table-title flex gap20 mb-14">
                          <li>
                            <div className="body-title">Category</div>
                          </li>
                          <li>
                            <div className="body-title">Description</div>
                          </li>
                          <li>
                            <div className="body-title">Action</div>
                          </li>
                        </ul>
                        <div className="divider" />
                        {categories &&
                          categories.map((category) => (
                            <ul className="flex flex-column">
                              <li className="attribute-item flex items-center justify-between gap20">
                                <div className="name">
                                  <a
                                    href="add-attributes.html"
                                    className="body-title-2"
                                  >
                                    {category.name}
                                  </a>
                                </div>
                                <div className="body-text">
                                  {category.description}
                                </div>
                                <div className="list-icon-function">
                                  <div className="item eye">
                                  {/* Edit Icon */}
                                  <div class="icons8-edit"></div>
                                  </div>
                                  <div className="item edit">
                                  {/* Delete Icon */}
                                  <div class="icons8-delete"></div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          ))}
                      </div>
                      <div className="divider" />
                    </div>
                    {/* /all-attribute */}
                  </div>
                  {/* /main-content-wrap */}
                </div>
                {/* /main-content-wrap */}
              </div>
              {/* /main-content */}
            </div>
            {/* /section-content-right */}

            {/* Admin Footer */}
            <AdminFooter />
          </div>
          {/* /layout-wrap */}
        </div>
        {/* /#page */}
      </div>
    </>
  );
}

export default CategoryList;
