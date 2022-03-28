import AboutUs from 'components/about-us/AboutUs';
import Company from 'components/company/Company';
import Experience from 'components/experience/Experience';
import Features from 'components/features/Features';
import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import InformationPartner from 'components/information-partner/InformationPartner';
import PartnerShip from 'components/partnership/PartnerShip';
import ProjectPlan from 'components/project-plan/ProjectPlan';

const homepage = () => {
  return (
    <div>
      <Header />
      <Features />
      <Company />
      <Experience />
      <ProjectPlan />
      <AboutUs />
      <PartnerShip />
      <InformationPartner />
      <Footer />
    </div>
  );
};

export default homepage;
