import CustomTitle from "../../Title/CustomTitle";
import CustomButton from "../../Button/CustomButton";
import './Intro.scss';
import { goToAnchor } from "../../../Utils/goToAnchor";

const IntroSection = () => {

  const bgImage = {
    background: "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./images/intro_bg.jpeg') no-repeat",
    backgroundSize: 'cover',
  }

  return (
    <section id="intro">
      <div className="container-fluid" style={bgImage}>
        <div className="intro__content">
          <CustomTitle variant="h1">
            Test assignment for front-end developer
          </CustomTitle>
          <p className="intro-desc">
            What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast
            understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They
            should also be excited to learn, as the world of Front-End Development keeps evolving.
          </p>
          <CustomButton onClick={() => goToAnchor('sign-up')} children="Sign up"/>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
