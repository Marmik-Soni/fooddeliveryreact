import AdminFooter from "../../components/admin/AdminFooter";
import AdminHeader from "../../components/admin/AdminHeader";
import AdminSideBar from "../../components/admin/AdminSidebar";

function AdminDashboard() {
  return (
    <>
      <div id="wrapper">
        {/* #page */}
        <div id="page" className>
          {/* layout-wrap */}
          <div className="layout-wrap layout-width-boxed">

            {/* AdminSideBar */}            
           <AdminSideBar/>

            {/* section-content-right */}
            <div className="section-content-right">
              <AdminHeader/>
              {/* main-content */}
              <div className="main-content">
                {/* main-content-wrap */}
                <div className="main-content-inner">
                  {/* main-content-wrap */}
                  <div className="main-content-wrap">
                    <div className="tf-section-4 mb-30">
                      {/* wg-goal */}
                      <div className="wg-goal">
                        <div className="image">
                          <img src="/remos/images/images-section/goal.jpg" alt />
                        </div>
                        <div className="left">
                          <h5 className="mb-14">
                            Great! Your goal is almost complete
                          </h5>
                          <div className="body-text mb-14">
                            You have completed{" "}
                            <span className="body-title">61%</span> <br /> of
                            your target. You can <br /> view the work details.
                          </div>
                          <a href="#">
                            <span className="body-title">View detail</span>
                            <i className="icon-arrow-right" />
                          </a>
                        </div>
                        <div className="right">
                          <div id="line-chart-17">
                            <div className="circle_percent" data-percent={61}>
                              <div className="circle_inner">
                                <div className="round_per" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /wg-goal */}
                      {/* chart-default */}
                      <div className="wg-chart-default style-1">
                        <div className="flex flex-column gap15 flex-shrink-0">
                          <div className="flex gap14 flex-column">
                            <div className="image type-white">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={48}
                                height={52}
                                viewBox="0 0 48 52"
                                fill="none"
                              >
                                <path
                                  d="M19.1094 2.12943C22.2034 0.343099 26.0154 0.343099 29.1094 2.12943L42.4921 9.85592C45.5861 11.6423 47.4921 14.9435 47.4921 18.5162V33.9692C47.4921 37.5418 45.5861 40.8431 42.4921 42.6294L29.1094 50.3559C26.0154 52.1423 22.2034 52.1423 19.1094 50.3559L5.72669 42.6294C2.63268 40.8431 0.726688 37.5418 0.726688 33.9692V18.5162C0.726688 14.9435 2.63268 11.6423 5.72669 9.85592L19.1094 2.12943Z"
                                  fill="#22C55E"
                                />
                              </svg>
                              <i className="icon-shopping-bag" />
                            </div>
                            <div>
                              <div className="body-text mb-2">Total Sales</div>
                              <h3>34,945</h3>
                            </div>
                          </div>
                          <div className="box-icon-trending up">
                            <div className="body-title number tf-color-2">
                              1.56%
                            </div>
                            <i className="icon-trending-up" />
                          </div>
                        </div>
                        <div className="wrap-chart flex-grow">
                          <div id="line-chart-18" />
                        </div>
                      </div>
                      {/* /chart-default */}
                      {/* chart-default */}
                      <div className="wg-chart-default style-1">
                        <div className="flex flex-column gap15 flex-shrink-0">
                          <div className="flex gap14 flex-column">
                            <div className="image type-white">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={48}
                                height={52}
                                viewBox="0 0 48 52"
                                fill="none"
                              >
                                <path
                                  d="M19.1094 2.12943C22.2034 0.343099 26.0154 0.343099 29.1094 2.12943L42.4921 9.85592C45.5861 11.6423 47.4921 14.9435 47.4921 18.5162V33.9692C47.4921 37.5418 45.5861 40.8431 42.4921 42.6294L29.1094 50.3559C26.0154 52.1423 22.2034 52.1423 19.1094 50.3559L5.72669 42.6294C2.63268 40.8431 0.726688 37.5418 0.726688 33.9692V18.5162C0.726688 14.9435 2.63268 11.6423 5.72669 9.85592L19.1094 2.12943Z"
                                  fill="#FF5200"
                                />
                              </svg>
                              <i className="icon-dollar-sign" />
                            </div>
                            <div>
                              <div className="body-text mb-2">Total Income</div>
                              <h3>$37,802</h3>
                            </div>
                          </div>
                          <div className="box-icon-trending down">
                            <div className="body-title number tf-color-1">
                              1.56%
                            </div>
                            <i className="icon-trending-down" />
                          </div>
                        </div>
                        <div className="wrap-chart flex-grow">
                          <div id="line-chart-19" />
                        </div>
                      </div>
                      {/* /chart-default */}
                      {/* chart-default */}
                      <div className="wg-chart-default style-1">
                        <div className="flex flex-column gap15 flex-shrink-0">
                          <div className="flex gap14 flex-column">
                            <div className="image type-white">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={48}
                                height={52}
                                viewBox="0 0 48 52"
                                fill="none"
                              >
                                <path
                                  d="M19.1094 2.12943C22.2034 0.343099 26.0154 0.343099 29.1094 2.12943L42.4921 9.85592C45.5861 11.6423 47.4921 14.9435 47.4921 18.5162V33.9692C47.4921 37.5418 45.5861 40.8431 42.4921 42.6294L29.1094 50.3559C26.0154 52.1423 22.2034 52.1423 19.1094 50.3559L5.72669 42.6294C2.63268 40.8431 0.726688 37.5418 0.726688 33.9692V18.5162C0.726688 14.9435 2.63268 11.6423 5.72669 9.85592L19.1094 2.12943Z"
                                  fill="#2377FC"
                                />
                              </svg>
                              <i className="icon-users" />
                            </div>
                            <div>
                              <div className="body-text mb-2">
                                Total Visitor
                              </div>
                              <h3>34,945</h3>
                            </div>
                          </div>
                          <div className="box-icon-trending up">
                            <div className="body-title number tf-color-2">
                              1.56%
                            </div>
                            <i className="icon-trending-up" />
                          </div>
                        </div>
                        <div className="wrap-chart flex-grow">
                          <div id="line-chart-20" />
                        </div>
                      </div>
                      {/* /chart-default */}
                    </div>
                    <div className="tf-section-8 mb-30">
                      {/* sale */}
                      <div className="wg-box">
                        <div className="flex items-center justify-between">
                          <h5>Sale by category</h5>
                          <div className="dropdown default">
                            <button
                              className="btn btn-secondary dropdown-toggle"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <span className="icon-more">
                                <i className="icon-more-horizontal" />
                              </span>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li>
                                <a href="javascript:void(0);">This Week</a>
                              </li>
                              <li>
                                <a href="javascript:void(0);">Last Week</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="flex gap10 justify-between flex-wrap">
                          <div>
                            <div className="text-tiny mb-2">
                              Total Mar 20, 2023
                            </div>
                            <div className="flex items-center gap10">
                              <h4>$37,802</h4>
                              <div className="box-icon-trending up">
                                <i className="icon-trending-up" />
                                <div className="body-title number">0.56%</div>
                              </div>
                            </div>
                          </div>
                          <div className="dropdown default style-box">
                            <button
                              className="btn btn-secondary dropdown-toggle"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <span className="view-all">
                                Week
                                <i className="icon-chevron-down" />
                              </span>
                            </button>
                            <ul className="dropdown-menu">
                              <li>
                                <a href="javascript:void(0);">Month</a>
                              </li>
                              <li>
                                <a href="javascript:void(0);">Year</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div id="line-chart-21" />
                        <div className="flex gap20">
                          <div className="block-legend justify-center w-full">
                            <div className="dot-1 t1" />
                            <div className="text-tiny">Mens</div>
                          </div>
                          <div className="block-legend justify-center w-full">
                            <div className="dot-1 t2" />
                            <div className="text-tiny">Women’s</div>
                          </div>
                        </div>
                      </div>
                      {/* /sale */}
                      {/* order */}
                      <div className="wg-box">
                        <div className="flex items-center justify-between">
                          <h5>Recent orders</h5>
                          <div className="dropdown default">
                            <button
                              className="btn btn-secondary dropdown-toggle"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <span className="view-all">
                                View all
                                <i className="icon-chevron-down" />
                              </span>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li>
                                <a href="javascript:void(0);">3 days</a>
                              </li>
                              <li>
                                <a href="javascript:void(0);">7 days</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="wg-table table-product-overview t3">
                          <ul className="table-title flex gap20 mb-14">
                            <li>
                              <div className="body-title">Product</div>
                            </li>
                            <li>
                              <div className="body-title">Customer</div>
                            </li>
                            <li>
                              <div className="body-title">Product ID</div>
                            </li>
                            <li>
                              <div className="body-title">Quantity</div>
                            </li>
                            <li>
                              <div className="body-title">Price</div>
                            </li>
                            <li>
                              <div className="body-title">Status</div>
                            </li>
                          </ul>
                          <div className="divider mb-14" />
                          <ul className="flex flex-column gap10">
                            <li className="product-item gap14">
                              <div className="image no-bg">
                                <img src="/remos/images/products/31.png" alt />
                              </div>
                              <div className="flex items-center justify-between flex-grow gap20">
                                <div className="name">
                                  <a
                                    href="product-list.html"
                                    className="body-title-2"
                                  >
                                    Taste of the Wild Formula Finder
                                  </a>
                                </div>
                                <div className="body-text">2,672</div>
                                <div className="body-text">$28,672.36</div>
                                <div className="body-text">X1</div>
                                <div className="body-text">$28,672.36</div>
                                <div>
                                  <div className="block-available">
                                    Delivered
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="divider" />
                            <li className="product-item gap14">
                              <div className="image no-bg">
                                <img src="/remos/images/products/32.png" alt />
                              </div>
                              <div className="flex items-center justify-between flex-grow gap20">
                                <div className="name">
                                  <a
                                    href="product-list.html"
                                    className="body-title-2"
                                  >
                                    Proden Plaqueoff Dental Bites Dog, 150 G
                                  </a>
                                </div>
                                <div className="body-text">2,672</div>
                                <div className="body-text">$28,672.36</div>
                                <div className="body-text">X2</div>
                                <div className="body-text">$28,672.36</div>
                                <div>
                                  <div className="block-available">
                                    Delivered
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="divider" />
                            <li className="product-item gap14">
                              <div className="image no-bg">
                                <img src="/remos/images/products/33.png" alt />
                              </div>
                              <div className="flex items-center justify-between flex-grow gap20">
                                <div className="name">
                                  <a
                                    href="product-list.html"
                                    className="body-title-2"
                                  >
                                    Zuke's Lil' Links Healthy Little Sausage
                                    Links for Dogs...
                                  </a>
                                </div>
                                <div className="body-text">2,672</div>
                                <div className="body-text">$28,672.36</div>
                                <div className="body-text">X1</div>
                                <div className="body-text">$28,672.36</div>
                                <div>
                                  <div className="block-available">
                                    Delivered
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="divider" />
                            <li className="product-item gap14">
                              <div className="image no-bg">
                                <img src="/remos/images/products/34.png" alt />
                              </div>
                              <div className="flex items-center justify-between flex-grow gap20">
                                <div className="name">
                                  <a
                                    href="product-list.html"
                                    className="body-title-2"
                                  >
                                    Rachael Ray Nutrish Grain Free Chicken
                                    Drumstick...
                                  </a>
                                </div>
                                <div className="body-text">2,672</div>
                                <div className="body-text">$28,672.36</div>
                                <div className="body-text">X3</div>
                                <div className="body-text">$28,672.36</div>
                                <div>
                                  <div className="block-available">
                                    Delivered
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="divider" />
                            <li className="product-item gap14">
                              <div className="image no-bg">
                                <img src="/remos/images/products/35.png" alt />
                              </div>
                              <div className="flex items-center justify-between flex-grow gap20">
                                <div className="name">
                                  <a
                                    href="product-list.html"
                                    className="body-title-2"
                                  >
                                    Fruitables Dog Treats Sweet Potato &amp;
                                    Pecan Flavor
                                  </a>
                                </div>
                                <div className="body-text">2,672</div>
                                <div className="body-text">$28,672.36</div>
                                <div className="body-text">X2</div>
                                <div className="body-text">$28,672.36</div>
                                <div>
                                  <div className="block-available">
                                    Delivered
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="divider" />
                        <div className="flex items-center justify-between flex-wrap gap10">
                          <div className="text-tiny">Showing 5 entries</div>
                          <ul className="wg-pagination">
                            <li>
                              <a href="#">
                                <i className="icon-chevron-left" />
                              </a>
                            </li>
                            <li>
                              <a href="#">1</a>
                            </li>
                            <li className="active">
                              <a href="#">2</a>
                            </li>
                            <li>
                              <a href="#">3</a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="icon-chevron-right" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* /order */}
                    </div>
                    <div className="tf-section-8 mb-30">
                      {/* customers */}
                      <div className="wg-box">
                        <div className="flex items-center justify-between">
                          <h5>Top Customers</h5>
                          <div className="dropdown default">
                            <button
                              className="btn btn-secondary dropdown-toggle"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <span className="view-all">
                                View all
                                <i className="icon-chevron-down" />
                              </span>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li>
                                <a href="javascript:void(0);">3 days</a>
                              </li>
                              <li>
                                <a href="javascript:void(0);">7 days</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="wg-table">
                          <ul className="table-title flex justify-between gap20 mb-14">
                            <li>
                              <div className="body-title">Name</div>
                            </li>
                            <li>
                              <div className="body-title">Total money</div>
                            </li>
                          </ul>
                          <ul className="flex flex-column gap18">
                            <li className="shop-item">
                              <div className="image">
                                <img src="/remos/images/avatar/user-1.png" alt />
                              </div>
                              <div className="flex-grow flex items-center justify-between gap20">
                                <div>
                                  <a
                                    href="#"
                                    className="tf-color-3 body-text name"
                                  >
                                    Devon Lane
                                  </a>
                                  <div className="text-tiny mt-4">
                                    73 Purchases
                                  </div>
                                </div>
                                <div className="body-text tf-color-3">
                                  $8.99
                                </div>
                              </div>
                            </li>
                            <li className="shop-item">
                              <div className="image">
                                <img src="/remos/images/avatar/user-2.png" alt />
                              </div>
                              <div className="flex-grow flex items-center justify-between gap20">
                                <div>
                                  <a
                                    href="#"
                                    className="tf-color-3 body-text name"
                                  >
                                    Jenny Wilson
                                  </a>
                                  <div className="text-tiny mt-4">
                                    73 Purchases
                                  </div>
                                </div>
                                <div className="body-text tf-color-3">
                                  $6.48
                                </div>
                              </div>
                            </li>
                            <li className="shop-item">
                              <div className="image">
                                <img src="/remos/images/avatar/user-3.png" alt />
                              </div>
                              <div className="flex-grow flex items-center justify-between gap20">
                                <div>
                                  <a
                                    href="#"
                                    className="tf-color-3 body-text name"
                                  >
                                    Eleanor Pena
                                  </a>
                                  <div className="text-tiny mt-4">
                                    73 Purchases
                                  </div>
                                </div>
                                <div className="body-text tf-color-3">
                                  $14.81
                                </div>
                              </div>
                            </li>
                            <li className="shop-item">
                              <div className="image">
                                <img src="/remos/images/avatar/user-4.png" alt />
                              </div>
                              <div className="flex-grow flex items-center justify-between gap20">
                                <div>
                                  <a
                                    href="#"
                                    className="tf-color-3 body-text name"
                                  >
                                    Albert Flores
                                  </a>
                                  <div className="text-tiny mt-4">
                                    73 Purchases
                                  </div>
                                </div>
                                <div className="body-text tf-color-3">
                                  $5.22
                                </div>
                              </div>
                            </li>
                            <li className="shop-item">
                              <div className="image">
                                <img src="/remos/images/avatar/user-5.png" alt />
                              </div>
                              <div className="flex-grow flex items-center justify-between gap20">
                                <div>
                                  <a
                                    href="#"
                                    className="tf-color-3 body-text name"
                                  >
                                    Ronald Richards
                                  </a>
                                  <div className="text-tiny mt-4">
                                    73 Purchases
                                  </div>
                                </div>
                                <div className="body-text tf-color-3">
                                  $17.84
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* /customers */}
                      <div className="tf-section-2">
                        {/* sales */}
                        <div className="wg-box">
                          <div className="flex items-center justify-between">
                            <h5>Top Countries By Sales</h5>
                            <div className="dropdown default">
                              <button
                                className="btn btn-secondary dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <span className="view-all">
                                  View all
                                  <i className="icon-chevron-down" />
                                </span>
                              </button>
                              <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                  <a href="javascript:void(0);">3 days</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);">7 days</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="flex items-center gap10">
                            <h4>$37,802</h4>
                            <div className="box-icon-trending up">
                              <i className="icon-trending-up" />
                              <div className="body-title number">1.56%</div>
                            </div>
                            <div className="text-tiny">since last weekend</div>
                          </div>
                          <ul className="flex flex-column justify-between gap10 h-full">
                            <li className="country-item">
                              <div className="image">
                                <img src="/remos/images/country/6.png" alt />
                              </div>
                              <div className="flex-grow flex items-center justify-between">
                                <a
                                  href="countries.html"
                                  className="body-text name"
                                >
                                  Turkish Flag
                                </a>
                                <div className="box-icon-trending up">
                                  <i className="icon-trending-up" />
                                </div>
                                <div className="body-text number">6,972</div>
                              </div>
                            </li>
                            <li className="country-item">
                              <div className="image">
                                <img src="/remos/images/country/7.png" alt />
                              </div>
                              <div className="flex-grow flex items-center justify-between">
                                <a
                                  href="countries.html"
                                  className="body-text name"
                                >
                                  Belgium
                                </a>
                                <div className="box-icon-trending up">
                                  <i className="icon-trending-up" />
                                </div>
                                <div className="body-text number">6,972</div>
                              </div>
                            </li>
                            <li className="country-item">
                              <div className="image">
                                <img src="/remos/images/country/8.png" alt />
                              </div>
                              <div className="flex-grow flex items-center justify-between">
                                <a
                                  href="countries.html"
                                  className="body-text name"
                                >
                                  Sweden
                                </a>
                                <div className="box-icon-trending down">
                                  <i className="icon-trending-down" />
                                </div>
                                <div className="body-text number">6,972</div>
                              </div>
                            </li>
                            <li className="country-item">
                              <div className="image">
                                <img src="/remos/images/country/9.png" alt />
                              </div>
                              <div className="flex-grow flex items-center justify-between">
                                <a
                                  href="countries.html"
                                  className="body-text name"
                                >
                                  Vietnamese
                                </a>
                                <div className="box-icon-trending up">
                                  <i className="icon-trending-up" />
                                </div>
                                <div className="body-text number">6,972</div>
                              </div>
                            </li>
                            <li className="country-item">
                              <div className="image">
                                <img src="/remos/images/country/10.png" alt />
                              </div>
                              <div className="flex-grow flex items-center justify-between">
                                <a
                                  href="countries.html"
                                  className="body-text name"
                                >
                                  Australia
                                </a>
                                <div className="box-icon-trending down">
                                  <i className="icon-trending-down" />
                                </div>
                                <div className="body-text number">6,972</div>
                              </div>
                            </li>
                            <li className="country-item">
                              <div className="image">
                                <img src="/remos/images/country/11.png" alt />
                              </div>
                              <div className="flex-grow flex items-center justify-between">
                                <a
                                  href="countries.html"
                                  className="body-text name"
                                >
                                  Saudi Arabia
                                </a>
                                <div className="box-icon-trending down">
                                  <i className="icon-trending-down" />
                                </div>
                                <div className="body-text number">6,972</div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        {/* /sales */}
                        {/* product */}
                        <div className="wg-box">
                          <div className="flex items-center justify-between">
                            <h5>Top Products</h5>
                            <div className="dropdown default">
                              <button
                                className="btn btn-secondary dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <span className="view-all">
                                  View all
                                  <i className="icon-chevron-down" />
                                </span>
                              </button>
                              <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                  <a href="javascript:void(0);">3 days</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);">7 days</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="wg-table table-top-product">
                            <ul className="flex flex-column gap14">
                              <li className="product-item">
                                <div className="image">
                                  <img src="/remos/images/products/1.png" alt />
                                </div>
                                <div className="flex items-center justify-between flex-grow">
                                  <div className="name">
                                    <a
                                      href="product-list.html"
                                      className="body-title-2"
                                    >
                                      Patimax Fragrance Long...
                                    </a>
                                    <div className="text-tiny mt-3">
                                      100 Items
                                    </div>
                                  </div>
                                  <div>
                                    <div className="text-tiny mb-3">
                                      Coupon Code
                                    </div>
                                    <div className="body-text">Sflat</div>
                                  </div>
                                  <div className="country">
                                    <img src="/remos/images/country/2.png" alt />
                                  </div>
                                  <div>
                                    <div className="body-title-2 mb-3">
                                      -15%
                                    </div>
                                    <div className="text-tiny">$27.00</div>
                                  </div>
                                </div>
                              </li>
                              <li className="product-item">
                                <div className="image">
                                  <img src="/remos/images/products/2.png" alt />
                                </div>
                                <div className="flex items-center justify-between flex-grow">
                                  <div className="name">
                                    <a
                                      href="product-list.html"
                                      className="body-title-2"
                                    >
                                      Nulo MedalSeries Adult Cat...
                                    </a>
                                    <div className="text-tiny mt-3">
                                      100 Items
                                    </div>
                                  </div>
                                  <div>
                                    <div className="text-tiny mb-3">
                                      Coupon Code
                                    </div>
                                    <div className="body-text">Sflat</div>
                                  </div>
                                  <div className="country">
                                    <img src="/remos/images/country/3.png" alt />
                                  </div>
                                  <div>
                                    <div className="body-title-2 mb-3">
                                      -15%
                                    </div>
                                    <div className="text-tiny">$27.00</div>
                                  </div>
                                </div>
                              </li>
                              <li className="product-item">
                                <div className="image">
                                  <img src="/remos/images/products/3.png" alt />
                                </div>
                                <div className="flex items-center justify-between flex-grow">
                                  <div className="name">
                                    <a
                                      href="product-list.html"
                                      className="body-title-2"
                                    >
                                      Pedigree Puppy Dry Dog...
                                    </a>
                                    <div className="text-tiny mt-3">
                                      100 Items
                                    </div>
                                  </div>
                                  <div>
                                    <div className="text-tiny mb-3">
                                      Coupon Code
                                    </div>
                                    <div className="body-text">Sflat</div>
                                  </div>
                                  <div className="country">
                                    <img src="/remos/images/country/1.png" alt />
                                  </div>
                                  <div>
                                    <div className="body-title-2 mb-3">
                                      -15%
                                    </div>
                                    <div className="text-tiny">$27.00</div>
                                  </div>
                                </div>
                              </li>
                              <li className="product-item">
                                <div className="image">
                                  <img src="/remos/images/products/4.png" alt />
                                </div>
                                <div className="flex items-center justify-between flex-grow">
                                  <div className="name">
                                    <a
                                      href="product-list.html"
                                      className="body-title-2"
                                    >
                                      Biscoito Premier Cookie...
                                    </a>
                                    <div className="text-tiny mt-3">
                                      100 Items
                                    </div>
                                  </div>
                                  <div>
                                    <div className="text-tiny mb-3">
                                      Coupon Code
                                    </div>
                                    <div className="body-text">Sflat</div>
                                  </div>
                                  <div className="country">
                                    <img src="/remos/images/country/4.png" alt />
                                  </div>
                                  <div>
                                    <div className="body-title-2 mb-3">
                                      -15%
                                    </div>
                                    <div className="text-tiny">$27.00</div>
                                  </div>
                                </div>
                              </li>
                              <li className="product-item">
                                <div className="image">
                                  <img src="/remos/images/products/5.png" alt />
                                </div>
                                <div className="flex items-center justify-between flex-grow">
                                  <div className="name">
                                    <a
                                      href="product-list.html"
                                      className="body-title-2 mb-3"
                                    >
                                      Pedigree Adult Dry Dog...
                                    </a>
                                    <div className="text-tiny">100 Items</div>
                                  </div>
                                  <div>
                                    <div className="text-tiny mb-3">
                                      Coupon Code
                                    </div>
                                    <div className="body-text">Sflat</div>
                                  </div>
                                  <div className="country">
                                    <img src="/remos/images/country/5.png" alt />
                                  </div>
                                  <div>
                                    <div className="body-title-2 mb-3">
                                      -15%
                                    </div>
                                    <div className="text-tiny">$27.00</div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* /product */}
                      </div>
                    </div>
                    <div className="tf-section-2">
                      {/* sales */}
                      <div className="wg-box">
                        <div className="flex items-center justify-between">
                          <h5>Product overview</h5>
                          <div className="dropdown default">
                            <button
                              className="btn btn-secondary dropdown-toggle"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <span className="view-all">
                                View all
                                <i className="icon-chevron-down" />
                              </span>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li>
                                <a href="javascript:void(0);">3 days</a>
                              </li>
                              <li>
                                <a href="javascript:void(0);">7 days</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="wg-table table-product-overview t4">
                          <ul className="table-title flex gap20 mb-14">
                            <li>
                              <div className="body-title">Name</div>
                            </li>
                            <li>
                              <div className="body-title">ID</div>
                            </li>
                            <li>
                              <div className="body-title">Price</div>
                            </li>
                            <li>
                              <div className="body-title">Sale</div>
                            </li>
                            <li>
                              <div className="body-title">Revenue</div>
                            </li>
                            <li>
                              <div className="body-title">Status</div>
                            </li>
                          </ul>
                          <div className="divider mb-14" />
                          <ul className="flex flex-column gap10">
                            <li className="product-item gap14">
                              <div className="image no-bg">
                                <img src="/remos/images/products/6.png" alt />
                              </div>
                              <div className="flex items-center justify-between gap20 flex-grow">
                                <div className="name">
                                  <a
                                    href="product-list.html"
                                    className="body-text"
                                  >
                                    Dog Food, Chicken &amp; Chicken Liver
                                    Recipe...
                                  </a>
                                </div>
                                <div className="body-text">#70668</div>
                                <div className="body-text">$450</div>
                                <div className="body-text">$28,672.36</div>
                                <div className="body-text">$928.41</div>
                                <div>
                                  <div className="block-available">
                                    Available
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="divider" />
                            <li className="product-item gap14">
                              <div className="image no-bg">
                                <img src="/remos/images/products/7.png" alt />
                              </div>
                              <div className="flex items-center justify-between gap20 flex-grow">
                                <div className="name">
                                  <a
                                    href="product-list.html"
                                    className="body-text"
                                  >
                                    Grain Free Dry Dog Food | Rachael Ray®
                                    Nutrish®
                                  </a>
                                </div>
                                <div className="body-text">#70668</div>
                                <div className="body-text">$450</div>
                                <div className="body-text">$28,672.36</div>
                                <div className="body-text">$928.41</div>
                                <div>
                                  <div className="block-not-available">
                                    Not Available
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="divider" />
                            <li className="product-item gap14">
                              <div className="image no-bg">
                                <img src="/remos/images/products/8.png" alt />
                              </div>
                              <div className="flex items-center justify-between gap20 flex-grow">
                                <div className="name">
                                  <a
                                    href="product-list.html"
                                    className="body-text"
                                  >
                                    Weruva Pumpkin Patch Up! Pumpkin With
                                    Ginger...
                                  </a>
                                </div>
                                <div className="body-text">#70668</div>
                                <div className="body-text">$450</div>
                                <div className="body-text">$28,672.36</div>
                                <div className="body-text">$928.41</div>
                                <div>
                                  <div className="block-available">
                                    Available
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="divider" />
                            <li className="product-item gap14">
                              <div className="image no-bg">
                                <img src="/remos/images/products/9.png" alt />
                              </div>
                              <div className="flex items-center justify-between gap20 flex-grow">
                                <div className="name">
                                  <a
                                    href="product-list.html"
                                    className="body-text"
                                  >
                                    Milk-Bone Mini's Flavor Snacks Dog Treats,
                                    15...
                                  </a>
                                </div>
                                <div className="body-text">#70668</div>
                                <div className="body-text">$450</div>
                                <div className="body-text">$28,672.36</div>
                                <div className="body-text">$928.41</div>
                                <div>
                                  <div className="block-available">
                                    Available
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="divider" />
                            <li className="product-item gap14">
                              <div className="image no-bg">
                                <img src="/remos/images/products/10.png" alt />
                              </div>
                              <div className="flex items-center justify-between gap20 flex-grow">
                                <div className="name">
                                  <a
                                    href="product-list.html"
                                    className="body-text"
                                  >
                                    Weruva Pumpkin Patch Up! Dog &amp; Cat
                                    Food...
                                  </a>
                                </div>
                                <div className="body-text">#70668</div>
                                <div className="body-text">$450</div>
                                <div className="body-text">$28,672.36</div>
                                <div className="body-text">$928.41</div>
                                <div>
                                  <div className="block-not-available">
                                    Not Available
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="divider" />
                        <div className="flex items-center justify-between flex-wrap gap10">
                          <div className="text-tiny">Showing 5 entries</div>
                          <ul className="wg-pagination">
                            <li>
                              <a href="#">
                                <i className="icon-chevron-left" />
                              </a>
                            </li>
                            <li>
                              <a href="#">1</a>
                            </li>
                            <li className="active">
                              <a href="#">2</a>
                            </li>
                            <li>
                              <a href="#">3</a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="icon-chevron-right" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* /sales */}
                      {/* revenue */}
                      <div className="wg-box">
                        <div className="flex items-center justify-between">
                          <h5>Revenue</h5>
                          <div className="dropdown default">
                            <button
                              className="btn btn-secondary dropdown-toggle"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <span className="icon-more">
                                <i className="icon-more-horizontal" />
                              </span>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li>
                                <a href="javascript:void(0);">This Week</a>
                              </li>
                              <li>
                                <a href="javascript:void(0);">Last Week</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap40">
                          <div>
                            <div className="mb-3">
                              <div className="block-legend">
                                <div className="dot t1" />
                                <div className="text-tiny">Website</div>
                              </div>
                            </div>
                            <div className="flex items-center gap10">
                              <h4>$37,802</h4>
                              <div className="box-icon-trending up">
                                <i className="icon-trending-up" />
                                <div className="body-title number">0.56%</div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="mb-3">
                              <div className="block-legend">
                                <div className="dot t4" />
                                <div className="text-tiny">Store</div>
                              </div>
                            </div>
                            <div className="flex items-center gap10">
                              <h4>$28,305</h4>
                              <div className="box-icon-trending up">
                                <i className="icon-trending-up" />
                                <div className="body-title number">0.56%</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="line-chart-22" />
                      </div>
                      {/* /revenue */}
                    </div>
                  </div>
                  {/* /main-content-wrap */}
                </div>
                {/* /main-content-wrap */}
                <AdminFooter/>
              </div>
              {/* /main-content */}
            </div>
            {/* /section-content-right */}
          </div>
          {/* /layout-wrap */}
        </div>
        {/* /#page */}
      </div>
    </>
  );
}

export default AdminDashboard;
