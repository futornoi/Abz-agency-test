import CustomTitle from "../../Title/CustomTitle";
import SignUpForm from "./SignUpForm";
import './SignUp.scss';
import React from "react";

interface SignUp {
  isSuccess: boolean,
  setSuccess: () => void,
}

const SignUpSection:React.FC<SignUp> = ({setSuccess, isSuccess}) => {

  const successImage = './images/success-image.svg'
  const SectionTitle = isSuccess
    ? 'User successfully registered'
    : 'Working with POST request'

  return (
    <section id="sign-up">
      <div className="container">
        <CustomTitle
          variant="h1"
          center
          style={{marginBottom: '50px'}}
          children={SectionTitle}
        />
        {isSuccess
          ? <img className="success-image" src={successImage} alt="Success"/>
          : <SignUpForm setSuccess={setSuccess}/>
        }
      </div>
    </section>
  );
};

export default SignUpSection;
