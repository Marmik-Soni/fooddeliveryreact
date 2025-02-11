function ProductAdd(){
    return(
        <>
       <div className="col-lg-4">
        <div className="box-container">
          <div className="img-box">
            <img src="/savory/assets/media/cus-favorite/burger-1.png" alt />
          </div>
          <div className="content-box">
            <p className="content-text fw-600 mb-6">Special</p>
            <a href="menu.html" className="h5 content-text-1 mb-24">
              Burger with Bacon
            </a>
            <p className="content-text mb-24">
              Bread, 120g Meet, Cheese, BBQ Sauce, Bacon, Lettuce, Pinkles and
              Red Onion.
            </p>
            <hr className="content-text mb-24" />
            <h4 className="content-text mb-32">$10.99</h4>
            <a
              href="checkout.html"
              className="cus-btn bg-medium-black white w-100 mb-12"
            >
              order now
            </a>
            <a
              href="checkout.html"
              className="cus-btn bg-medium-black white w-100"
            >
              Add to Cart
            </a>
          </div>
        </div>
      </div>
        </>
    )
}

export default ProductAdd;