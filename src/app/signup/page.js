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
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch("http://localhost:3001/user", {
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
        // Redirect to login page
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
        <Step1
          decreaseStep={decreaseStep}
          increaseStep={increaseStep}
          formik={formik}
          error={error}
        />
      )}
      {step === 2 && (
        <Step2
          decreaseStep={decreaseStep}
          formik={formik}
          loading={loading}
          error={error}
        />
      )}
    </div>
  );
};

export default Register;