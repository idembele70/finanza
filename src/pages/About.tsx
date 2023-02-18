import AboutComponent from "../components/About";
import Facts from "../components/Facts";
import PageHeader from "../components/PageHeader";
import Team from "../components/Team";

const About = () => {
  return (
    <>
      <PageHeader title="About" />
      <AboutComponent />
      <Facts />
      <Team />
    </>
  );
};

export default About;
