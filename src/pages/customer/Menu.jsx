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


            <span className= "eyebrow about-btn bg-sec br-12 white mb-6" id="sandwitches">Sandwiches</span>
            <div className="row">
                <div className="col-md-6 col-sm-11">
                    <div className="menu-wrapper">
                        <div className="mb-32">
                            <div className="name-price mb-8">
                                <a href="checkout.html" className="h5 color-primary flex-shrink-0">
                                Grilled Chicken Sandwich
                                </a>
                                <div className="center-line" />
                                <h5 className="color-quat flex-shrink-0">$36</h5>
                            </div>
                            <p className="light-gray">
                                Tender grilled chicken breast with lettuce, tomato, and mayo.
                            </p>
                        </div>
                        <div className="mb-32">
                            <div className="name-price mb-8">
                                <a href="checkout.html" className="h5 color-primary flex-shrink-0">
                                Egg n' Cheese Sandwich
                                </a>
                                <div className="center-line" />
                                <h5 className="color-quat flex-shrink-0">$38</h5>
                            </div>
                            <p className="light-gray">
                                Fluffy scrambled eggs with melted cheese on toasted bread.
                            </p>
                        </div>
                        <div className="mb-32">
                            <div className="name-price mb-8">
                                <a href="checkout.html" className="h5 color-primary flex-shrink-0">
                                    Paneer Tikka Sandwich 
                                </a>
                                <div className="center-line" />
                                <h5 className="color-quat flex-shrink-0">$32</h5>
                            </div>
                            <p className="light-gray">
                            Spicy marinated paneer with grilled veggies and mint chutney.
                            </p>
                        </div>
                        <div className="mb-32">
                            <div className="name-price mb-8">
                                <a href="checkout.html" className="h5 color-primary flex-shrink-0">
                                Spicy Chickpea Sandwich
                                </a>
                                <div className="center-line" />
                                <h5 className="color-quat flex-shrink-0">$11</h5>
                            </div>
                            <p className="light-gray">
                            Mashed chickpeas with spices and crunchy veggies in soft bread.
                            </p>
                        </div>
                        <div className="mb-32">
                            <div className="name-price mb-8">
                                <a href="checkout.html" className="h5 color-primary flex-shrink-0">
                                Tandoori Chicken Sandwich
                                </a>
                                <div className="center-line" />
                                <h5 className="color-quat flex-shrink-0">$17</h5>
                            </div>
                            <p className="light-gray">
                            Smoky, spiced tandoori chicken with yogurt sauce in a bun.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-11">
                    <div className="menu-wrapper-2">
                        <div className="mb-32">
                            <div className="name-price mb-8">
                                <a href="checkout.html" className="h5 color-primary flex-shrink-0">
                                Veggie Hummus Sandwich
                                </a>
                                <div className="center-line" />
                                <h5 className="color-quat flex-shrink-0">$32</h5>
                            </div>
                            <p className="light-gray">
                            Loaded with fresh veggies, creamy hummus, and a drizzle of olive oil.
                            </p>
                        </div>
                        <div className="mb-32">
                            <div className="name-price mb-8">
                                <a href="checkout.html" className="h5 color-primary flex-shrink-0">
                                Peri-Peri Chicken Sandwich 
                                </a>
                                <div className="center-line" />
                                <h5 className="color-quat flex-shrink-0">$29</h5>
                            </div>
                            <p className="light-gray">
                            Grilled peri-peri chicken with lettuce and spicy mayo.
                            </p>
                        </div>
                        <div className="mb-32">
                            <div className="name-price mb-8">
                                <a href="checkout.html" className="h5 color-primary flex-shrink-0">
                                Mushroom n' Cheese Sandwich 
                                </a>
                                <div className="center-line" />
                                <h5 className="color-quat flex-shrink-0">$11</h5>
                            </div>
                            <p className="light-gray">
                            Sautéed mushrooms with gooey melted cheese in toasted bread.
                            </p>
                        </div>
                        <div className="mb-32">
                            <div className="name-price mb-8">
                                <a href="checkout.html" className="h5 color-primary flex-shrink-0">
                                Falafel Pita Sandwich
                                </a>
                                <div className="center-line" />
                                <h5 className="color-quat flex-shrink-0">$13</h5>
                            </div>
                            <p className="light-gray">
                            Crispy falafel with tahini sauce in warm pita bread.
                            </p>
                        </div>
                        <div className="mb-32">
                            <div className="name-price mb-8">
                                <a href="checkout.html" className="h5 color-primary flex-shrink-0">
                                Avocado Tomato Sandwich
                                </a>
                                <div className="center-line" />
                                <h5 className="color-quat flex-shrink-0">$12</h5>
                            </div>
                            <p className="light-gray">
                            Fresh avocado slices and juicy tomatoes with a hint of lemon.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <span className= "eyebrow about-btn bg-sec br-12 white mb-6" id="grill">Grill House   </span>
            <div className="row">
                <div className="col-md-6 col-sm-11">
                    <div className="menu-wrapper">
                        <div className="mb-32">
                            <div className="name-price mb-8">
                                <a href="checkout.html" className="h5 color-primary flex-shrink-0">
                                Grilled Chicken Breast
                                </a>
                                <div className="center-line" />
                                <h5 className="color-quat flex-shrink-0">$36</h5>
                            </div>
                            <p className="light-gray">
                            Perfectly seasoned and grilled to juicy perfection.
                            </p>
                        </div>
                        <div className="mb-32">
                            <div className="name-price mb-8">
                                <a href="checkout.html" className="h5 color-primary flex-shrink-0">
                                BBQ Chicken Wings
                                </a>
                                <div className="center-line" />
                                <h5 className="color-quat flex-shrink-0">$38</h5>
                            </div>
                            <p className="light-gray">
                            Smoky and tangy BBQ-glazed chicken wings.
                            </p>
                        </div>
                        <div className="mb-32">
                            <div className="name-price mb-8">
                                <a href="checkout.html" className="h5 color-primary flex-shrink-0">
                                Grilled Fish Fillet
                                </a>
                                <div className="center-line" />
                                <h5 className="color-quat flex-shrink-0">$32</h5>
                            </div>
                            <p className="light-gray">
                            Tender and flaky fish grilled with lemon butter sauce.
                            </p>
                        </div>
                        <div className="mb-32">
                            <div className="name-price mb-8">
                                <a href="checkout.html" className="h5 color-primary flex-shrink-0">
                                    Burger with BaconGrilled Paneer Steak
                                </a>
                                <div className="center-line" />
                                <h5 className="color-quat flex-shrink-0">$11</h5>
                            </div>
                            <p className="light-gray">
                            Marinated paneer grilled to golden perfection.
                            </p>
                        </div>
                        <div className="mb-32">
                            <div className="name-price mb-8">
                                <a href="checkout.html" className="h5 color-primary flex-shrink-0">
                                Tandoori Prawns
                                </a>
                                <div className="center-line" />
                                <h5 className="color-quat flex-shrink-0">$17</h5>
                            </div>
                            <p className="light-gray">
                            Juicy prawns marinated in Indian spices and grilled.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-11">
                    <div className="menu-wrapper-2">
                        <div className="mb-32">
                            <div className="name-price mb-8">
                                <a href="checkout.html" className="h5 color-primary flex-shrink-0">
                                Peri-Peri Grilled Chicken
                                </a>
                                <div className="center-line" />
                                <h5 className="color-quat flex-shrink-0">$32</h5>
                            </div>
                            <p className="light-gray">
                            Spicy and flavorful peri-peri chicken with charred edges.
                            </p>
                        </div>
                        <div className="mb-32">
                            <div className="name-price mb-8">
                                <a href="checkout.html" className="h5 color-primary flex-shrink-0">
                                Grilled Corn on the Cob
                                </a>
                                <div className="center-line" />
                                <h5 className="color-quat flex-shrink-0">$29</h5>
                            </div>
                            <p className="light-gray">
                            Charred corn with butter, lime, and chili seasoning.
                            </p>
                        </div>
                        <div className="mb-32">
                            <div className="name-price mb-8">
                                <a href="checkout.html" className="h5 color-primary flex-shrink-0">
                                Vegetable Skewers
                                </a>
                                <div className="center-line" />
                                <h5 className="color-quat flex-shrink-0">$11</h5>
                            </div>
                            <p className="light-gray">
                            Grilled bell peppers, zucchini, mushrooms, and onions.
                            </p>
                        </div>
                        <div className="mb-32">
                            <div className="name-price mb-8">
                                <a href="checkout.html" className="h5 color-primary flex-shrink-0">
                                Teriyaki Grilled Salmon
                                </a>
                                <div className="center-line" />
                                <h5 className="color-quat flex-shrink-0">$13</h5>
                            </div>
                            <p className="light-gray">
                            Sweet and savory teriyaki-glazed salmon fillet.
                            </p>
                        </div>
                        <div className="mb-32">
                            <div className="name-price mb-8">
                                <a href="checkout.html" className="h5 color-primary flex-shrink-0">
                                Charcoal-Grilled Tofu
                                </a>
                                <div className="center-line" />
                                <h5 className="color-quat flex-shrink-0">$12</h5>
                            </div>
                            <p className="light-gray">
                            Smoky, protein-packed tofu with a hint of garlic seasoning.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <span className= "eyebrow about-btn bg-sec br-12 white mb-6" id="snap">Snap Burgers</span>
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
                                Enjo`y our classic hamburger with cheese.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            

            <span className= "eyebrow about-btn bg-sec br-12 white mb-6" id="dogs">Hot Dogs</span>
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
