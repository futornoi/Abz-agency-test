import React, { ChangeEvent, useEffect, useState } from "react";
import { useFormik } from "formik";
import DefaultInput from "../../Fields/DefaultInput";
import FileInput from "../../Fields/FileInput";
import CustomButton from "../../Button/CustomButton";
import RadioButtons, { RadioOptions } from "../../Fields/RadioButtons";
import { getPositions, setUser, UserValues } from "../../../Api/users";
import { signUpValidate } from "../../../Utils/validations";
import { goToAnchor } from "../../../Utils/goToAnchor";

const initialValues: UserValues = {
  name: '',
  email: '',
  phone: '',
  photo: '',
  position_id: -1,
}

const SighUpForm:React.FC<{setSuccess: () => void}> = ({setSuccess}) => {
  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      await setUser(values);
      setSuccess();
      goToAnchor('users');
    },
    validationSchema: signUpValidate
  })

  const [radioFields, setRadioFields] = useState<RadioOptions>({
    name: 'position_id',
    onChange: formik.handleChange,
    fields: []
  });

  const handleOnFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.files) {
      const file = e.target.files[0];
      const convertToMb = (file.size / (1024*1024)).toFixed(2);
      if(+convertToMb > 5) {
        formik.setFieldError('photo', 'must be less then 5mb')
      } else if(!['jpg', 'jpeg'].includes(file.type.split('/')[1])) {
        formik.setFieldError('photo', 'wrong type (jpg/jpeg)')
      } else {
        formik.setFieldValue('photo', e.target.files[0])
      }
    }
  }

  const getPositionFields = async () => {
   try {
     const positionsData = await getPositions();
     setRadioFields(prev => ({
       ...prev,
       fields: positionsData.positions,
     }))
     formik.setFieldValue('position_id', positionsData.positions[0].id)
   } catch (e) {
     const error = e as Error;
     console.log(error.message)
   }
  }

  useEffect(() => {
    getPositionFields()
  },[])

  return (
    <form className="signUp-form" onSubmit={formik.handleSubmit}>
      <DefaultInput
        placeholder="Your name"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        errorText={formik.errors.name}
        touched={formik.touched.name}
        style={{marginBottom: '50px'}}
      />
      <DefaultInput
        placeholder="Email"
        name="email"
        type="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        errorText={formik.errors.email}
        touched={formik.touched.email}
        style={{marginBottom: '50px'}}
      />
      <DefaultInput
        placeholder="Phone"
        name="phone"
        type="tel"
        value={formik.values.phone}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        errorText={formik.errors.phone}
        touched={formik.touched.phone}
        helperText="+38 (XXX) XXX - XX - XX"
        style={{marginBottom: '25px'}}
      />
      <RadioButtons
        title="Select your position"
        style={{marginBottom: '49px'}}
        options={radioFields}
      />
      <FileInput
        name="photo"
        value={formik.values.photo}
        onChange={handleOnFileChange}
        onBlur={formik.handleBlur}
        errorText={formik.errors.photo}
        touched={formik.touched.photo}
        style={{marginBottom: '50px'}}
      />
      <CustomButton
        onClick={() => {}}
        disabled={formik.isSubmitting}
        children="Sign up"
      />
    </form>
  );
};

export default SighUpForm;
