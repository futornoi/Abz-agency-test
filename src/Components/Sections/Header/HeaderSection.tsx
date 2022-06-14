import CustomButton from "../../Button/CustomButton";
import './Header.scss';
import { goToAnchor } from "../../../Utils/goToAnchor";

const logoSrc = './images/Logo.svg';

const HeaderSection = () => (
    <header id="header">
      <div className="container header__container">
        <img onClick={() => goToAnchor('intro')} className="logo-image" src={logoSrc} alt="abz-agency"/>
        <CustomButton onClick={() => goToAnchor('users')} children="Users"/>
        <CustomButton onClick={() => goToAnchor('sign-up')} children="Sign up"/>
      </div>
    </header>
  );

export default HeaderSection;
