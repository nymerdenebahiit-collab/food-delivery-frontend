"use client";

import { useState } from "react";

import * as Yup from "yup";

import Step1 from "./_features/step1";
import Step2 from "./_features/step2";
import { useFormik } from "formik";
import { email } from "zod";

const Register = () => {
  const [step, setStep] = useState(1);
  const increaseStep = () => {
    setStep((prev) => prev + 1);
  };

  const decreaseStep = () => {
    setStep((prev) => prev - 1);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confrimPassword: "",
    },

    validationSchema,

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      {step === 1 && <Step1 decreaseStep={decreaseStep} />}
      {step === 2 && <Step2 decreaseStep={decreaseStep} />}
    </div>
  );
};

export default Register;
