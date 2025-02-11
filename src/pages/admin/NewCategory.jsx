import FooterAdmin from "../../components/admin/FooterAdmin";
import HeaderAdmin from "../../components/admin/HeaderAdmin";
import SideBar from "../../components/admin/SideBar";


function NewCategory() {
  return (
    <>
      {/* #wrapper */}
      <div id="wrapper">
        {/* #page */}
        <div id="page" className>
          {/* layout-wrap */}
          <div className="layout-wrap">







            {/* /section-menu-left */}
            <SideBar/>
            {/* /section-menu-left */}

            {/* section-content-right */}
            <div className="section-content-right">
              {/* header-dashboard */}
              <HeaderAdmin />
              {/* /header-dashboard */}
              {/* main-content */}
              <div className="main-content">
                {/* main-content-wrap */}
                <div className="main-content-inner">
                  {/* main-content-wrap */}
                  <div className="main-content-wrap">
                    <div className="flex items-center flex-wrap justify-between gap20 mb-27">
                      <h3>Add New Category</h3>
                      <ul className="breadcrumbs flex items-center flex-wrap justify-start gap10">
                        <li>
                          <a href="index.html">
                            <div className="text-tiny">Dashboard</div>
                          </a>
                        </li>
                        <li>
                          <i className="icon-chevron-right" />
                        </li>
                        <li>
                          <a href="#">
                            <div className="text-tiny">Category</div>
                          </a>
                        </li>
                        <li>
                          <i className="icon-chevron-right" />
                        </li>
                        <li>
                          <div className="text-tiny">New category</div>
                        </li>
                      </ul>
                    </div>
                    {/* new-category */}
                    <div className="wg-box">
                      <form className="form-new-product form-style-1">
                        <fieldset className="name">
                          <div className="body-title">
                            Category name <span className="tf-color-1">*</span>
                          </div>
                          <input
                            className="flex-grow"
                            type="text"
                            placeholder="Category name"
                            name="text"
                            tabIndex={0}
                          />
                        </fieldset>
                        <fieldset class="description mb-24">
                          <div class="body-title mb-10">
                            Description <span class="tf-color-1">*</span>
                          </div>
                          <textarea
                            class=""
                            name="description"
                            placeholder="Description"
                            tabindex="0"
                            aria-required="true"
                            required=""
                          ></textarea>
                        </fieldset>
                        <div className="bot">
                          <div />
                          <button className="tf-button w208" type="submit">
                            Save
                          </button>
                        </div>
                      </form>
                    </div>
                    {/* /new-category */}
                  </div>
                  {/* /main-content-wrap */}
                </div>
                {/* /main-content-wrap */}
                {/* bottom-page */}
                <FooterAdmin/>
                {/* /bottom-page */}
              </div>
              {/* /main-content */}
            </div>
            {/* /section-content-right */}
          </div>
          {/* /layout-wrap */}
        </div>
        {/* /#page */}
      </div>
      {/* /#wrapper */}
    </>
  );
}

export default NewCategory;
