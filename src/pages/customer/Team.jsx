import Footer from "../../components/customer/Footer";
import Header from "../../components/customer/Header";
import PageTitle from "../../components/customer/PageTitle";
import TeamMember from "../../components/customer/TeamMember";

function Team() {
  return (
    <>
      <div id="scroll-container">
        {/* HEADER MENU START */}
        <Header />
        {/* HEADER MENU END */}

        {/* TITLE BANNER START */}
        <PageTitle title="Our Team" />
        {/* TITLE BANNER END */}

        {/* OUR TEAM Section START */}
        <section className="team-sec py-80">
          <div className="container-fluid">
            <div className="text-center mb-48">
              <span className="about-btn bg-color-quat br-12 white mb-6">
                our team
              </span>
              <h2 className>our professionals</h2>
            </div>
            <div className="team-member">
              <div className="row row-gap-4 mb-64">
                {/* OUR TEAM MEMBERS START */}
                <TeamMember />
                <TeamMember />
                <TeamMember />
                <TeamMember />
                <TeamMember />
                <TeamMember />
                <TeamMember />
                <TeamMember />
                {/* OUR TEAM MEMBERS END */}
              </div>
            </div>
          </div>
        </section>
        {/* OUR TEAM Section END */}
        {/* FOOTER START */}
        <Footer />
        {/* FOOTER END */}
        {/* Main Wrapper End */}
      </div>
    </>
  );
}

export default Team;
