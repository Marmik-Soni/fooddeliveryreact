import Footer from "../../components/customer/Footer";
import Header from "../../components/customer/Header";
import PageTitle from "../../components/customer/PageTitle";
import Product from "../../components/customer/Product";
import ProductAdd from "../../components/customer/ProductAdd";

function Products() {
  return (
    <>
      <div id="scroll-container">
        {/* HEADER MENU START */}
        <Header />
        {/* HEADER MENU END */}

        {/* PAGE TITLE START */}
        <PageTitle title="Products" />
        {/* PAGE TITLE END */}

        {/* PRODUCTS START */}
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
                    <h6 className="mb-16 color-primary">Category</h6>
                    <hr className="mb-16 light-gray" />
                    <div className="d-flex align-items-center justify-content-between mb-16">
                      <a href="menu.html" className="p category-content">
                        Burgers
                      </a>
                      <p>(4)</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-16">
                      <a href="menu.html" className="p category-content">
                        Patty Burger
                      </a>
                      <p>(1)</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-16">
                      <a href="menu.html" className="p category-content">
                        Fried Chicken
                      </a>
                      <p>(4)</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <a href="menu.html" className="p category-content">
                        Sandwiches
                      </a>
                      <p>(7)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="row row-gap-4">
                    <ProductAdd />
                    <ProductAdd />
                    <ProductAdd />
                    <ProductAdd />
                    <ProductAdd />
                    <ProductAdd />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* PRODUCTS END */}

        {/* PAGE FOOTER START */}
        <Footer />
        {/* PAGE FOOTER END */}
      </div>
    </>
  );
}

export default Products;
