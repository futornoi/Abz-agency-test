import * as yup from 'yup';

const phoneReg = /^[\+]{0,1}380([0-9]{9})$/;

const requiredText = 'required';
const smallText = 'too short';
const longText = 'too long';

export const signUpValidate = yup.object().shape({
  name: yup.string().min(2, smallText).max(60, longText).required(requiredText),
  phone: yup.string().matches(phoneReg, 'not valid phone').required(requiredText),
  email: yup.string().email('not valid email').min(2, smallText).max(100, longText).required(requiredText),
  photo: yup.string().required(requiredText),
});