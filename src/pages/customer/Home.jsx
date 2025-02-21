import Footer from "../../components/customer/Footer";
import Header from "../../components/customer/Header";
import PageTitle from "../../components/customer/PageTitle";
function Home() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Home Page Content */}
      <div id="scroll-container">
        {/* HERO BANNER START */}
        <section className="hero-banner">
          <div className="container-fluid">
            <div className="row align-items-center row-gap-4">
              <div className="col-md-6">
                <div className="row align-items-center row-gap-4 justify-content-between">
                  <div className="order-xl-1 order-2">
                    <div className="hero-text mb-32">
                      <h1 className="medium-black mb-20">
                        Delight in Every Bite at
                        <span className="color-ter">“Savory Bites”</span>
                      </h1>
                      <p className="light-gray mb-20">
                      Experience the ultimate fusion of flavor and freshness with our handcrafted burgers. Made from the finest ingredients, each bite is a perfect blend of juicy patties, melted cheese, and crisp vegetables.
                      </p>
                      <p className="fw-500 color-ter-5 mb-20">INGREDIANTS</p>
                    </div>
                    <div className="veg-icon d-flex gap-16 mb-32">
                      <img
                        className="veg-icon-1"
                        src="/savory/assets/media/hero/tomato.png"
                        alt
                      />
                      <img
                        className="veg-icon-2"
                        src="/savory/assets/media/hero/pepper.png"
                        alt
                      />
                      <img
                        className="veg-icon-3"
                        src="/savory/assets/media/hero/cabbage.png"
                        alt
                      />
                      <img
                        className="veg-icon-4"
                        src="/savory/assets/media/hero/onion.png"
                        alt
                      />
                      <div className="hero-icon">
                        <p className="fw-600 white">+3</p>
                      </div>
                    </div>
                    <a className="cus-btn" href="checkout.html">
                      <span className="text">order now</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className>
                  <img src="/savory/assets/media/hero/hero-image.png" alt />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* HERO BANNER END */}

        {/* MENU Section START */}
        <section className="menu-section mb-80">
          <div className="row g-0 align-items-center">
            <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 order-1">
              <div className="first-menu">
                <div className>
                  <h2 className="mb-32 white">
                    Sand-
                    <br />
                    wiches
                  </h2>
                  <p className="mb-32 white">
                    Enjoy our freshly made sandwiches 
                    <br /> packed with flavorful ingredients,
                    <br/>from crispy veggies to succulent meats, 
                    <br/>all served on toasted bread.
                  </p>
                  <a
                    className="cus-btn bg-medium-black white "
                    href="menu.html"
                  >
                    view menu
                  </a>
                </div>
                <div className="menu-1-img"></div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 order-2">
              <div className="first-menu-2">
                <div className>
                  <h2 className="mb-32 white">
                    Grill
                    <br />
                    house
                  </h2>
                  <p className="mb-32 white">
                    Savor the rich taste of perfectly grilled dishes,
                    <br/> from juicy steaks to smoky barbecue
                    <br/> cooked to perfection,
                    <br/> for a delightful experience.
                  </p>
                  <a
                    className="cus-btn menu-cus-btn bg-medium-black white "
                    href="menu.html"
                  >
                    view menu
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-6 col-md-6 order-3">
              <div className="first-menu-3">
                <div className>
                  <h2 className="mb-32 white">
                    Snap <br />
                    Burgers
                  </h2>
                  <p className="mb-32 white">
                    Indulge in our mouth-watering burgers,
                    <br/>Crafted with premium chicken and fresh veggies,
                    <br/>Melted cheese and toasted buns,
                    <br/>For the ultimate taste.
                  </p>
                  <a
                    className="cus-btn bg-medium-black white "
                    href="menu.html"
                  >
                    view menu
                  </a>
                </div>
                <div className="menu-1-img"></div>
              </div>
            </div>
            <div className="col-xxl-5 col-xl-8 col-md-8 order-xxl-4 order-5">
              <div className="first-menu-4 h-100">
                <div className>
                  <h2 className="mb-32 white">
                    Hot
                    <br />
                    dogs
                  </h2>
                  <p className="mb-32 white">
                  Relish our delicious hot dogs,
                  <br/> Topped with a perfect blend of sauces,
                  <br/> Caramelized onions and crunchy pickles
                  <br/> for a savory delight.
                  </p>
                  <a
                    className="cus-btn bg-medium-black white "
                    href="menu.html"
                  >
                    view menu
                  </a>
                </div>
                <div className="menu-1-img"></div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-6 col-md-6  order-xxl-5 order-4">
              <div className="first-menu-5">
                <div className>
                  <h2 className="mb-32 white">
                    Cheese <br />
                    Burger
                  </h2>
                  <p className="mb-32 white">
                  Treat yourself to our irresistible cheeseburger.
                  <br/> Fresh juicy chicken patty and melted cheese,
                  <br/> Crispy bacon and fresh toppings,
                  <br/> Served hot and delicious.
                  </p>
                  <a
                    className="cus-btn menu-cus-btn bg-medium-black white "
                    href="menu.html"
                  >
                    view menu
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-md-4 order-6">
              <div className="redirect-link">
                <div>
                  <h3 className="text-center mb-32">
                    and
                    <br />
                    much
                    <br />
                    more.
                  </h3>
                  <div className="d-flex justify-content-center">
                    <a href="/menu" className="menu-button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={19}
                        height={19}
                        viewBox="0 0 19 19"
                        fill="none"
                      >
                        <path
                          d="M17.5266 12.3423C15.0904 9.90614 14.1159 4.3841 16.7145 1.78549M16.7145 1.78549C15.2257 3.27428 11.0301 5.84582 6.15768 0.973428M16.7145 1.78549L1.28529 17.2147"
                          stroke="#FAFAFA"
                          strokeWidth="2.29687"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* MENU Section END */}


        {/* ingredients Section START */}
        <section className="ingredient-sec mb-80">
          <div className="container-fluid">
            <div className="text-center mb-48">
              <span className="eyebrow about-btn bg-ter br-12 white mb-6">
                ingredients
              </span>
              <h2 className="medium-black">
                best quality
                <br />
                ingredients
              </h2>
            </div>
            <div className="row row-gap-4 align-items-center">
              <div className="col-xl-3 offset-xl-0 offset-xl-0 col-md-3 offset-md-0">
                <div className="ingredients-content">
                  <div className="mb-64">
                    <h5 className="color-ter mb-24">
                      artisan
                      <br />
                      buns
                    </h5>
                    <div className="d-flex align-items-center light-gray gap-6">
                      <div className="ingredients-ul" />
                      <p className="mb-4p light-gray">Available Gluten-Free</p>
                    </div>
                    <div className="d-flex align-items-center light-gray gap-8">
                      <div className="ingredients-ul" />
                      <p className="light-gray">Made Cecally</p>
                    </div>
                  </div>
                  <div className="quality-text">
                    <h5 className="color-ter-5 mb-24">
                      ground
                      <br />
                      chicken
                    </h5>
                    <div className="d-flex align-items-center light-gray gap-6">
                      <div className="ingredients-ul" />
                      <p className="mb-4p light-gray">Signature Blended Chicken</p>
                    </div>
                    <div className="d-flex align-items-center light-gray gap-6">
                      <div className="ingredients-ul" />
                      <p className="light-gray">Never Frozen</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <img
                  src="/savory/assets/media/ingredients/burger-ingredients.png"
                  alt
                />
              </div>
              <div className="col-xxl-3 offset-xxl-0 col-xl-2 offset-xl-1 col-lg-3 offset-lg-0  col-md-3 offset-md-0">
                <div className="ingredients-content-2">
                  <div className="mb-64">
                    <h5 className="color-quat mb-24 text-end">
                      fresh
                      <br />
                      produce
                    </h5>
                    <div className="d-flex align-items-center justify-content-end light-gray gap-8">
                      <p className="mb-4p light-gray">Made Fresh Everyday</p>
                      <div className="ingredients-ul" />
                    </div>
                    <div className="d-flex align-items-center justify-content-end light-gray gap-8">
                      <p className="light-gray">Hand-Tossed</p>
                      <div className="ingredients-ul" />
                    </div>
                  </div>
                  <div className="quality-right-text quality-text-1">
                    <h5 className="color-primary mb-24 text-end">
                      ground
                      <br />
                      turkey
                    </h5>
                    <div className="d-flex align-items-center justify-content-end light-gray gap-8">
                      <p className="mb-4p fw-400 light-gray">Ground Fresh</p>
                      <div className="ingredients-ul" />
                    </div>
                    <div className="d-flex align-items-center justify-content-end light-gray gap-8">
                      <p className="light-gray">Never Frozen</p>
                      <div className="ingredients-ul" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ingredients Section END */}
        

        {/* BANNER SECTION START */}
        <section className="banner-1 py-80 mb-80">
          <div className="container-fluid">
            <h1 className="color-ter mb-6">family</h1>
            <h4 className="mb-16 white">
              is rich with flavor. it’s people
              <br />
              that surrounding us with gratitude,
              <br />
              <span className="color-ter-5">satisfy the soul.</span>
            </h4>
            <p className="mb-32 lightest-gray">
              Lorem ipsum dolor sit amet consectetur. Sed euismod justo
              <br /> volutpat malesuada. Purus in pellentesque a convallis morbi
              <br /> convallis.
            </p>
            <h6 className="mb-24 white">what is important for us?</h6>
            <div className="banner-elements">
              <div className="d-flex gap-24 align-items-center">
                <img
                  className="banner-icon"
                  src="/savory/assets/media/vector/meat.png"
                  alt
                />
                <h6 className="light-gray">
                  precisely selected
                  <br />
                  meat the best
                  <br />
                  breeders
                </h6>
              </div>
              <div className="d-flex gap-24 align-items-center">
                <img
                  className="banner-icon"
                  src="/savory/assets/media/vector/leave.png"
                  alt
                />
                <h6 className="light-gray">
                  only natural
                  <br />
                  products from
                  <br />
                  local farmers
                </h6>
              </div>
              <div className="d-flex gap-24 align-items-center">
                <img
                  className="banner-icon"
                  src="/savory/assets/media/vector/repeat.png"
                  alt
                />
                <h6 className="light-gray">
                  we use only
                  <br />
                  biodegradable
                  <br />
                  packing
                </h6>
              </div>
            </div>
          </div>
        </section>
        {/* BANNER SECTION END */}
        
        {/* BLOG Section START */}
        <section className="blog-sec py-80">
          <div className="container-fluid">
            <div className="text-center mb-48">
              <span className="eyebrow about-btn bg-sec br-12 white mb-6">
                blogs
              </span>
              <h2 className>See Our Latest Article</h2>
            </div>
            <div className="row row-gap-4 align-items-center">
              <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                <div className="blog-content-area">
                  <div className="blog-img">
                    <a href="blog-detail.html">
                      <img
                        className
                        src="/savory/assets/media/blog/blog-1.jpg"
                        alt
                      />
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
              <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                <div className="blog-content-area">
                  <div className="blog-img">
                    <a href="blog-detail.html">
                      <img
                        className
                        src="/savory/assets/media/blog/blog-2.jpg"
                        alt
                      />
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
                      <a href="blog-detail.html" className="cus-btn">
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
                      <img
                        className
                        src="/savory/assets/media/blog/blog-3.jpg"
                        alt
                      />
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
                      <a href="blog-detail.html" className="cus-btn">
                        learn more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 d-xl-block d-lg-none d-md-block  col-sm-6 col-12">
                <div className="blog-content-area">
                  <div className="blog-img">
                    <a href="blog-detail.html">
                      <img
                        className
                        src="/savory/assets/media/blog/blog-4.png"
                        alt
                      />
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
                      <a href="blog-detail.html" className="cus-btn">
                        learn more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* BLOG ARTICLE Section END */}
        {/* Main Wrapper End */}
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;
