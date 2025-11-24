"use client";

import { useState } from "react";
import * as Yup from "yup";
import Step1 from "./_features/step1";
import Step2 from "./_features/step2";
import { useFormik } from "formik";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[a-zA-Z]/, "Password must contain letters")
    .matches(/[0-9]/, "Password must contain numbers")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
});

const Register = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      setError("");

      try {
        //The local host's port number must be the same as one inside your backend folder
        const response = await fetch("http://localhost:999/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: values.email,
            password: values.password,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data || "Failed to register");
        }

        setSuccess(true);
        alert("Registration successful! Welcome aboard!");
        window.location.href = "http://localhost:3000/login";
      } catch (err) {
        setError(err.message);
        alert(`Registration failed: ${err.message}`);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div>
      {step === 1 && (
        <Step1 formik={formik} error={error} step={step} setStep={setStep} />
      )}
      {step === 2 && (
        <Step2
          formik={formik}
          loading={loading}
          error={error}
          set={step}
          setStep={setStep}
        />
      )}
    </div>
  );
};

export default Register;
