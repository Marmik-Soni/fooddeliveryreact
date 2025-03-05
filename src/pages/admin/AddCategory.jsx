
// Import components
import AdminFooter from "../../components/admin/AdminFooter";
import AdminHeader from "../../components/admin/AdminHeader";
import AdminSideBar from "../../components/admin/AdminSidebar";

// Import necessary libraries
import { db } from "../../firebaseconfig";
import { addDoc } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { useState } from "react";

function AddCategory() {

    let [name, setName] = useState("");
    let [description, setDescription] = useState("");

    async function AddCategory() {
        try{
            let colref = collection(db, "categories");
            await addDoc(colref, {
                name: name,
                description: description
            });
        }   
        catch(error) {
            console.log(error);
        }
    }


  return (
    <>
      <div id="wrapper">
        {/* #page */}
        <div id="page" className>
          {/* layout-wrap */}
          <div className="layout-wrap">

            {/* SideBar */}
            <AdminSideBar />

            {/* Header */}
            <AdminHeader />

            {/* section-content-right */}
            <div className="section-content-right">
              <div className="main-content">
                {/* main-content-wrap */}
                <div className="main-content-inner">
                  {/* main-content-wrap */}
                  <div className="main-content-wrap">
                    <div className="flex items-center flex-wrap justify-between gap20 mb-27">
                      <h3>Category infomation</h3>
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
                            Category Name <span className="tf-color-1">*</span>
                          </div>
                          <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="flex-grow"
                            type="text"
                            placeholder="Category name"
                            name="text"
                            tabIndex={0}
                            required
                          />
                        </fieldset>
                        <fieldset className="name">
                          <div className="body-title">
                            Category Description <span className="tf-color-1">*</span>
                          </div>
                          <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="flex-grow"
                            type="text"
                            placeholder="Category description"
                            name="text"
                            tabIndex={0}
                            required
                          />
                        </fieldset>
                        <fieldset className="category">
                          <div className="body-title">Select category icon</div>
                          <div className="select flex-grow">
                            <select className>
                              <option>Select icon</option>
                              <option>icon 1</option>
                              <option>icon 2</option>
                            </select>
                          </div>
                        </fieldset>
                        <div className="bot">
                          <div />
                          <button onChange={AddCategory} className="tf-button w208" type="submit">
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

export default AddCategory;
