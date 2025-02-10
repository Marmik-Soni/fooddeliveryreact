import Footer from "../../components/customer/Footer";
import Header from "../../components/customer/Header";
import PageTitle from "../../components/customer/PageTitle";

function Contact() {
  return (
    <>
      
        {/* HEADER MENU START */}
        <Header />
        {/* HEADER MENU END */}
        {/* TITLE BANNER START */}
        <PageTitle title="Contact Us"/>
        {/* TITLE BANNER END */}


        {/* Contact Us Section start */}
        <section className="contact-us mb-80 pt-120">
                    <div className="container-fluid">
                        <div className="row row-gap-4">
                        
                            
                            <div className="col-xl-6">
                                <div className="table-booking">
                                    <form method="post" className="contact-form mb-16">
                                        <h4 className="color-primary mb-24">Customer Support</h4>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="input-block mb-16">
                                                    <input type="text" name="name" id="name" className="form-control form-control-2" required placeholder="First Name" />
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={21} height={20} viewBox="0 0 21 20" fill="none">
                                                        <path d="M10.5 0C7.59223 0 5.22656 2.36566 5.22656 5.27344C5.22656 8.18121 7.59223 10.5469 10.5 10.5469C13.4078 10.5469 15.7734 8.18121 15.7734 5.27344C15.7734 2.36566 13.4078 0 10.5 0ZM10.5 9.375C8.2384 9.375 6.39844 7.53504 6.39844 5.27344C6.39844 3.01184 8.2384 1.17188 10.5 1.17188C12.7616 1.17188 14.6016 3.01184 14.6016 5.27344C14.6016 7.53504 12.7616 9.375 10.5 9.375Z" fill="#141516" />
                                                        <path d="M17.0612  13.992C15.6174 12.5261 13.7035 11.7188 11.6719 11.7188H9.32812C7.29656 11.7188 5.38258 12.5261 3.93883 13.992C2.50215 15.4507 1.71094 17.3763 1.71094 19.4141C1.71094 19.7377 1.97328 20 2.29688 20H18.7031C19.0267 20 19.2891 19.7377 19.2891 19.4141C19.2891 17.3763 18.4979 15.4507 17.0612 13.992ZM2.90859 18.8281C3.20215 15.5045 5.96918 12.8906 9.32812 12.8906H11.6719C15.0308 12.8906 17.7979 15.5045 18.0914 18.8281H2.90859Z" fill="#141516" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="input-block mb-16">
                                                    <input type="email" name="email" id="email" className="form-control form-control-2" required placeholder="Your email" />
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={21} height={20} viewBox="0 0 21 20" fill="none">
                                                        <path d="M18.7422 2.96875H2.25781C1.2866 2.96875 0.5 3.76023 0.5 4.72656V15.2734C0.5 16.2455 1.29238 17.0312 2.25781 17.0312H18.7422C19.7053 17.0312 20.5 16.2488 20.5 15.2734V4.72656C20.5 3.76195 19.7165 2.96875 18.7422 2.96875ZM18.496 4.14062C18.1369 4.49785 11.9564 10.6458 11.743 10.8581C11.4109 11.1901 10.9695 11.3729 10.5 11.3729C10.0305 11.3729 9.58906 11.1901 9.25594 10.857C9.11242 10.7142 3.00012 4.63414 2.50398 4.14062H18.496ZM1.67188 15.0349V4.96582L6.73586 10.0031L1.67188 15.0349ZM2.50473 15.8594L7.56672 10.8296L8.4284 11.6867C8.98176 12.2401 9.71746 12.5448 10.5 12.5448C11.2825 12.5448 12.0182 12.2401 12.5705 11.6878L13.4333 10.8296L18.4953 15.8594H2.50473ZM19.3281 15.0349L14.2641 10.0031L19.3281 4.96582V15.0349Z" fill="#141516" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="mb-24">
                                                    <textarea name="message" id="comments" required placeholder="Write your message..." className="form-control form-control-2 " defaultValue={""} />
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" className="border-0 cus-btn">submit</button>
                                        {/* Alert Message */}
                                        <div id="message" className="alert-msg" />
                                    </form>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="table-booking h-100">
                                    <h4 className="color-quat mb-12">Get In Touch&nbsp;With Us</h4>
                                    <p className="mb-24">Give us a call or drop by anytime, we endeavour to answer all enquiries
                                        within 24 hours on business days. We will be happy to answer your questions.</p>
                                    <div className="get-in-touch-2 d-flex gap-12 align-items-center mb-24">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40" fill="none">
                                            <path d="M19.0249 39.4781C19.2423 39.8041 19.6082 40 20 40C20.3918 40 20.7577 39.8042 20.9751 39.4781C23.7484 35.3182 27.8334 30.1806 30.6799 24.9555C32.956 20.7777 34.0625 17.2145 34.0625 14.0625C34.0625 6.30844 27.7541 0 20 0C12.2459 0 5.9375 6.30844 5.9375 14.0625C5.9375 17.2145 7.04398 20.7777 9.32008 24.9555C12.1645 30.1766 16.2573 35.3268 19.0249 39.4781ZM20 2.34375C26.4617 2.34375 31.7188 7.60078 31.7188 14.0625C31.7188 16.8128 30.7057 20.0092 28.6218 23.8343C26.1681 28.3381 22.6667 32.9068 20 36.7476C17.3337 32.9073 13.832 28.3384 11.3782 23.8343C9.2943 20.0092 8.28125 16.8128 8.28125 14.0625C8.28125 7.60078 13.5383 2.34375 20 2.34375Z" fill="#FF782C" />
                                            <path d="M20 21.0938C23.877 21.0938 27.0312 17.9395 27.0312 14.0625C27.0312 10.1855 23.877 7.03125 20 7.03125C16.123 7.03125 12.9688 10.1855 12.9688 14.0625C12.9688 17.9395 16.123 21.0938 20 21.0938ZM20 9.375C22.5847 9.375 24.6875 11.4778 24.6875 14.0625C24.6875 16.6472 22.5847 18.75 20 18.75C17.4153 18.75 15.3125 16.6472 15.3125 14.0625C15.3125 11.4778 17.4153 9.375 20 9.375Z" fill="#FF782C" />
                                        </svg>
                                        <div>
                                            <p className="fw-600 medium-black mb-6">Shop Location:</p>
                                            <p>808 Vale Street Bay Magna ac placerat vestibulum lectus mauris ultrices eros
                                                in.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="get-in-touch d-flex gap-12 align-items-center mb-24">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40" fill="none">
                                            <path d="M32.4979 31.0608L31.6637 29.6678C30.1634 27.1942 28.0928 24.3552 25.377 24.3552C24.8738 24.3552 24.3755 24.4564 23.8823 24.6613L22.4246 25.2864C22.2914 25.3416 22.1621 25.4044 22.0251 25.471C21.6521 25.6525 21.229 25.858 20.7939 25.858C19.7204 25.858 18.4767 24.4611 17.2923 21.9247C16.1299 19.4352 16.2041 18.1302 16.4709 17.4735C16.7653 16.7489 17.45 16.4392 18.1855 16.1608C18.2878 16.122 18.3802 16.0868 18.47 16.0499L19.9461 15.4284C23.7917 13.8202 22.3611 8.20029 21.892 6.35778L21.4942 4.77361C21.1541 3.46799 20.2525 0 17.2616 0C16.708 0 16.1173 0.128992 15.5066 0.383549C15.1059 0.542669 9.59193 2.79345 7.59427 6.74764C5.20674 11.4543 5.6482 17.7659 8.90511 25.5031C12.1377 33.25 16.3295 37.9884 21.3641 39.5865C22.2277 39.8609 23.2038 39.9998 24.2653 39.9998H24.2658C27.7403 39.9998 31.1701 38.5216 31.4484 38.3989C32.6463 37.8914 33.4207 37.1201 33.7497 36.1064C34.3075 34.3873 33.3718 32.5038 32.4979 31.0608ZM31.1755 35.2711C31.099 35.5067 30.833 35.7218 30.3856 35.9101C30.3782 35.9134 30.3692 35.9172 30.3616 35.9206C30.3306 35.9343 27.2261 37.2941 24.2651 37.2939C23.4818 37.2939 22.7812 37.1975 22.183 37.0074C17.9414 35.661 14.3145 31.44 11.4007 24.4573C8.46528 17.4832 7.99622 11.9367 10.0085 7.96991C11.571 4.87716 16.4628 2.91522 16.5108 2.89646C16.5205 2.89249 16.5301 2.8887 16.5396 2.88473C16.8182 2.76783 17.0679 2.70613 17.2616 2.70613C17.8579 2.70613 18.4006 3.6309 18.8721 5.44347L19.2681 7.02096C20.1226 10.3766 19.9925 12.4754 18.8987 12.9329L17.4296 13.5517C17.3711 13.5759 17.3028 13.6014 17.2274 13.63C16.4159 13.9373 14.7273 14.5763 13.9636 16.4547C13.2706 18.1592 13.5575 20.323 14.8397 23.0699C16.5665 26.767 18.514 28.5643 20.7935 28.5643C21.8514 28.5643 22.7006 28.1515 23.2079 27.9051C23.3014 27.8596 23.3849 27.8179 23.4747 27.7808L24.9346 27.1547C25.0852 27.092 25.2299 27.0615 25.3768 27.0615C26.0795 27.0615 27.3394 27.7573 29.3459 31.0649L30.1796 32.4569C31.207 34.1533 31.2882 34.9237 31.1755 35.2711Z" fill="#FF782C" />
                                        </svg>
                                        <div>
                                            <p className="fw-600 medium-black mb-6">Phone Number</p>
                                            <p>+001 123 456 789, +002 321 654 987</p>
                                        </div>
                                    </div>
                                    <div className="get-in-touch d-flex gap-12 align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40" fill="none">
                                            <path d="M36.4844 5.9375H3.51562C1.5732 5.9375 0 7.52047 0 9.45312V30.5469C0 32.491 1.58477 34.0625 3.51562 34.0625H36.4844C38.4105 34.0625 40 32.4977 40 30.5469V9.45312C40 7.52391 38.433 5.9375 36.4844 5.9375ZM35.992 8.28125C35.2738 8.9957 22.9127 21.2916 22.4859 21.7162C21.8219 22.3802 20.9391 22.7459 20 22.7459C19.0609 22.7459 18.1781 22.3802 17.5119 21.714C17.2248 21.4284 5.00023 9.26828 4.00797 8.28125H35.992ZM2.34375 30.0698V9.93164L12.4717 20.0062L2.34375 30.0698ZM4.00945 31.7188L14.1334 21.6591L15.8568 23.3734C16.9635 24.4802 18.4349 25.0896 20 25.0896C21.5651 25.0896 23.0365 24.4802 24.141 23.3756L25.8666 21.6591L35.9905 31.7188H4.00945ZM37.6562 30.0698L27.5283 20.0062L37.6562 9.93164V30.0698Z" fill="#FF782C" />
                                        </svg>
                                        <div>
                                            <p className="fw-600 medium-black mb-6">Email Address:</p>
                                            <p>exampleinfo@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-12">
                                {/* Location Map */}
                                <div className="map">
                                    <div className="map-wrapper">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d443088.05176831636!2d-95.73093531411777!3d29.81736469329602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20TX%2C%20USA!5e0!3m2!1sen!2s!4v1716960714220!5m2!1sen!2s" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                                        </iframe>
                                    </div>
                                </div>
                                {/* Location Map */}
                            </div>
                        </div>
                    </div>
                </section>
        {/* Contact Us Section END */}


        {/* FOOTER START */}
        <Footer />
        {/* FOOTER END */}
        
    </>
  );
}

export default Contact
