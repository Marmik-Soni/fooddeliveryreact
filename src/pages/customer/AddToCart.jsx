import Footer from "../../components/customer/Footer";
import Header from "../../components/customer/Header";
import PageTitle from "../../components/customer/PageTitle";
import Product from "../../components/customer/Product";

function AddToCart() {
  return (
    <>
      {/* HEADER MENU START */}
      <Header />
      {/* HEADER MENU END */}

      {/* TITLE BANNER START */}
      <PageTitle title="Add To Cart" />
      {/* TITLE BANNER END */}

      {/* Add To Cart Start */}
      <section className="shop-list">
        <div className="container-fluid mb-32">
          <div className="row row-gap-4">
            <div className="col-lg-3">
              <div>
                <form
                  action="https://uiparadox.co.uk/templates/savory-bites/shop-list.html"
                  method="get"
                  className=" mb-64"
                ></form>

                <div className="side-bar-part-1 mb-32">
                  <h6 className="mb-16 color-primary">Checkout</h6>
                  <hr className="mb-16 light-gray" />
                  <div className="d-flex align-items-center justify-content-between mb-16">
                    <a href="menu.html" className="p category-content">
                      Total Items
                    </a>
                    <p>(4)</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-16">
                    <a href="menu.html" className="p category-content">
                      Total Amount
                    </a>
                    <p>(1)</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-16">
                    <a href="menu.html" className="p category-content">
                      Payment Method
                    </a>
                  </div>
                  <a
              href="checkout.html"
              className="cus-btn bg-medium-black white w-100"
            >
              Checkout
            </a>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="row row-gap-4">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Add To Cart End */}

      {/* FOOTER START */}
      <Footer />
      {/* FOOTER END */}
    </>
  );
}

export default AddToCart;