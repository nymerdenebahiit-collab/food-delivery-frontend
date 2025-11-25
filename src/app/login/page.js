"use client";

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      setError("");

      try {
        // Adjust the port number to match your backend
        const response = await fetch(
          "http://localhost:999/authentication/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: values.email,
              password: values.password,
            }),
          }
        );

        // Check if response is JSON
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error(
            "Server error: Invalid response format. Please check your backend endpoint."
          );
        }

        const data = await response.json();
        console.log(data, "LOGIN RESPONSE DATA");

        if (!response.ok) {
          throw new Error(data.message || "Failed to login");
        }

        // Store authentication token if provided
        if (data.token) {
          localStorage.setItem("authToken", data.token);
        }

        alert("Login successful! Welcome back!");
        // Redirect to dashboard or home page
        window.location.href = "http://localhost:3000/dashboard";
      } catch (err) {
        console.error("Login error:", err);
        setError(err.message);
        alert(`Login failed: ${err.message}`);
      } finally {
        setLoading(false);
      }
    },
  });

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    formik;

  return (
    <div className="flex gap-12 items-center justify-center">
      <div className="w-104 pl-25">
        <FieldSet>
          <FieldGroup className="gap-6">
            <Field>
              <FieldLabel className="text-[24px] text-[#09090B] font-semibold">
                Welcome back
              </FieldLabel>

              <FieldDescription className="text-[16px] font-400 text-[#71717A]">
                Log in to access your account and explore your favorite dishes.
              </FieldDescription>
            </Field>

            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {errors.email && touched.email && (
              <div className="text-red-500 text-sm">{errors.email}</div>
            )}

            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {errors.password && touched.password && (
              <div className="text-red-500 text-sm">{errors.password}</div>
            )}

            {error && (
              <div className="text-red-500 text-sm font-medium">{error}</div>
            )}

            <div className="flex items-center justify-end">
              <a
                href="http://localhost:3000/forgot-password"
                className="text-[14px] text-[#2563EB] hover:underline"
              >
                Forgot password?
              </a>
            </div>

            <Button type="submit" onClick={handleSubmit} disabled={loading}>
              <div>{loading ? "Logging in..." : "Log in"}</div>
            </Button>

            <div
              aria-label="Section to register"
              className="flex items-center justify-center text-[16px] gap-3"
            >
              Dont have an account?{" "}
              <a
                href="http://localhost:3000/register"
                className="text-[#2563EB]"
              >
                Sign up
              </a>
            </div>
          </FieldGroup>
        </FieldSet>
      </div>

      <div
        aria-label="Image for user form"
        className="bg-[url(./Components/Images/UserFormImage.png)] bg-center bg-no-repeat w-[856px] h-[904px] rounded-md pr-5"
      ></div>
    </div>
  );
};

export default Login;
