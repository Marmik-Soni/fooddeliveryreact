import Footer from "../../components/customer/Footer";
import Header from "../../components/customer/Header";
import PageTitle from "../../components/customer/PageTitle";

function Menu() {
  return (
    <div>
      {/* HEADER MENU START */}
      <Header />
      {/* HEADER MENU END */}

      {/* TITLE BANNER START */}
      <PageTitle title="Menu" />
      {/* TITLE BANNER END */}

    {/* Menu Start */}
    <br />
    <section className="our-menu mb-80">
        <div className="container-fluid">
            <div className="text-center mb-48">
                <span className="eyebrow about-btn bg-sec br-12 white mb-6">MENU</span>
                <h2 className="mb-24">from our menu</h2>
                <p>
                    Explore our delicious menu options. From sandwiches to burgers, we have
                    something for everyone. Enjoy our freshly prepared meals made with the
                    finest ingredients.
                </p>
            </div>
            <div className="row">
                <div className="col-md-6 col-sm-11">
                    <div className="menu-wrapper">
                        <div className="mb-32">
                            <div className="name-price mb-8">
                                <a href="checkout.html" className="h5 color-primary flex-shrink-0">
                                    Sandwiches
                                </a>
                                <div className="center-line" />
                                <h5 className="color-quat flex-shrink-0">$36</h5>
                            </div>
                            <p className="light-gray">
                                Enjoy our variety of sandwiches made with fresh ingredients.
                            </p>
                        </div>
                        <div className="mb-32">
                            <div className="name-price mb-8">
                                <a href="checkout.html" className="h5 color-primary flex-shrink-0">
                                    Snap Burgers
                                </a>
                                <div className="center-line" />
                                <h5 className="color-quat flex-shrink-0">$38</h5>
                            </div>
                            <p className="light-gray">
                                Try our snap burgers, a perfect blend of flavors.
                            </p>
                        </div>
                        <div className="mb-32">
                            <div className="name-price mb-8">
                                <a href="checkout.html" className="h5 color-primary flex-shrink-0">
                                    Cheese Burger
                                </a>
                                <div className="center-line" />
                                <h5 className="color-quat flex-shrink-0">$32</h5>
                            </div>
                            <p className="light-gray">
                                Our cheese burgers are a classic favorite.
                            </p>
                        </div>
                        <div className="mb-32">
                            <div className="name-price mb-8">
                                <a href="checkout.html" className="h5 color-primary flex-shrink-0">
                                    Burger with Bacon
                                </a>
                                <div className="center-line" />
                                <h5 className="color-quat flex-shrink-0">$11</h5>
                            </div>
                            <p className="light-gray">
                                Savor the taste of our burger with crispy bacon.
                            </p>
                        </div>
                        <div className="mb-32">
                            <div className="name-price mb-8">
                                <a href="checkout.html" className="h5 color-primary flex-shrink-0">
                                    Sizzle Snap Burgers
                                </a>
                                <div className="center-line" />
                                <h5 className="color-quat flex-shrink-0">$17</h5>
                            </div>
                            <p className="light-gray">
                                Experience the sizzle with our snap burgers.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-11">
                    <div className="menu-wrapper-2">
                        <div className="mb-32">
                            <div className="name-price mb-8">
                                <a href="checkout.html" className="h5 color-primary flex-shrink-0">
                                    Grill House
                                </a>
                                <div className="center-line" />
                                <h5 className="color-quat flex-shrink-0">$32</h5>
                            </div>
                            <p className="light-gray">
                                Enjoy our grill house specialties, cooked to perfection.
                            </p>
                        </div>
                        <div className="mb-32">
                            <div className="name-price mb-8">
                                <a href="checkout.html" className="h5 color-primary flex-shrink-0">
                                    Hot Dogs
                                </a>
                                <div className="center-line" />
                                <h5 className="color-quat flex-shrink-0">$29</h5>
                            </div>
                            <p className="light-gray">
                                Our hot dogs are a must-try, packed with flavor.
                            </p>
                        </div>
                        <div className="mb-32">
                            <div className="name-price mb-8">
                                <a href="checkout.html" className="h5 color-primary flex-shrink-0">
                                    Petti Burger
                                </a>
                                <div className="center-line" />
                                <h5 className="color-quat flex-shrink-0">$11</h5>
                            </div>
                            <p className="light-gray">
                                Try our petti burger, a delightful treat.
                            </p>
                        </div>
                        <div className="mb-32">
                            <div className="name-price mb-8">
                                <a href="checkout.html" className="h5 color-primary flex-shrink-0">
                                    Crunch Grillhouse
                                </a>
                                <div className="center-line" />
                                <h5 className="color-quat flex-shrink-0">$13</h5>
                            </div>
                            <p className="light-gray">
                                Our crunch grillhouse burger is a crunchy delight.
                            </p>
                        </div>
                        <div className="mb-32">
                            <div className="name-price mb-8">
                                <a href="checkout.html" className="h5 color-primary flex-shrink-0">
                                    Hamburger Cheese
                                </a>
                                <div className="center-line" />
                                <h5 className="color-quat flex-shrink-0">$12</h5>
                            </div>
                            <p className="light-gray">
                                Enjoy our classic hamburger with cheese.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* Menu End */}

      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
    </div>
  );
}

export default Menu;
