import AdminFooter from "../../components/admin/AdminFooter";
import AdminHeader from "../../components/admin/AdminHeader";
import AdminSideBar from "../../components/admin/AdminSidebar";

function AddProducts() {
  return (
    <>
      <div id="wrapper">
        {/* #page */}
        <div id="page" className>
          {/* layout-wrap */}
          <div className="layout-wrap">

            {/* Header */}
            <AdminHeader />

            {/* SideBar */}
            <AdminSideBar />

            {/* section-content-right */}
            <div className="section-content-right">
              {/* main-content */}
              <div className="main-content">
                {/* main-content-wrap */}
                <div className="main-content-inner">
                  {/* main-content-wrap */}
                  <div className="main-content-wrap">
                    <div className="flex items-center flex-wrap justify-between gap20 mb-27">
                      <h3>Add Product</h3>
                    </div>
                    {/* form-add-product */}
                    <form className="tf-section-2 form-add-product">
                      <div className="wg-box">
                        <fieldset className="name">
                          <div className="body-title mb-10">
                            Product name <span className="tf-color-1">*</span>
                          </div>
                          <input
                            className="mb-10"
                            type="text"
                            placeholder="Enter product name"
                            name="text"
                            tabIndex={0}
                            required
                          />
                          <div className="text-tiny mb-20">
                            Do not exceed 20 characters when entering the
                            product name.
                          </div>

                        {/* Divider */}
                        <div className="divider" />

                        </fieldset>
                        <div className="gap22 cols">
                          <fieldset className="category">
                            <div className="body-title mb-10">
                              Category <span className="tf-color-1">*</span>
                            </div>
                            <div className="select">
                              <select className>
                                <option>Choose category</option>
                                <option>Shop</option>
                                <option>Product</option>
                              </select>
                            </div>
                          </fieldset>
                          <fieldset className="male">
                            <div className="body-title mb-10">
                              <fieldset className="name">
                                <div className="body-title mb-10">
                                  Product add date{" "}
                                  <span className="tf-color-1">*</span>
                                </div>
                                <div className="select">
                                  <input
                                    type="date"
                                    name="date"
                                    defaultValue="dd-mm-yyyy"
                                  />
                                </div>
                              </fieldset>
                            </div>
                          </fieldset>
                        </div>

                        {/* Divider */}
                        <div className="divider" />

                        <fieldset className="description">
                          <div className="body-title mb-10">
                            Description <span className="tf-color-1">*</span>
                          </div>
                          <textarea
                            className="mb-10"
                            name="description"
                            placeholder="Description"
                            tabIndex={0}
                            required
                          />
                          <div className="text-tiny">
                            Do not exceed 100 characters when entering the
                            product name.
                          </div>
                        </fieldset>
                      </div>
                      <div className="wg-box">
                        <fieldset>
                          <div className="body-title mb-10">Upload images</div>
                          <div className="upload-image mb-16">
                            <div className="item up-load">
                              <label className="uploadfile" htmlFor="myFile">
                                <span className="icon">
                                  <i className="icon-upload-cloud" />
                                </span>
                                <span className="text-tiny">
                                  Drop your images here or select{" "}
                                  <span className="tf-color">
                                    click to browse
                                  </span>
                                </span>
                                <input
                                  type="file"
                                  id="myFile"
                                  name="filename"
                                />
                              </label>
                            </div>
                          </div>
                          <div className="body-text">
                            Image size: 398p x 366p, maximum 2MB
                          </div>
                        </fieldset>
                        <div className="cols gap10">
                          <button className="tf-button w-full" type="button">
                            Add product
                          </button>
                          <button
                            className="tf-button style-1 w-full"
                            type="button"
                          >
                            Cancle Add
                          </button>
                          {/* <a href="#" className="tf-button style-2 w-full">
                            Schedule
                          </a> */}
                        </div>
                      </div>
                    </form>
                    {/* /form-add-product */}
                  </div>
                  {/* /main-content-wrap */}
                </div>
                {/* /main-content-wrap */}

                {/* Footer */}
                <AdminFooter />

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
export default AddProducts;
