"use client";

import { Button } from "@/components/ui/button";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import Backbutton from "../components/Backbutton";

const Step1 = ({ formik, step, setStep }) => {
  const handleNext = (e) => {
    e.preventDefault();
    formik.setFieldTouched("email", true);
    formik.validateField("email").then((error) => {
      if (!error && formik.values.email) {
        increaseStep();
      }
    });
  };

  const { values, errors, touched, handleChange, handleBlur } = formik;

  return (
    <div className="flex gap-12 items-center justify-center">
      <div className="w-104 pl-25">
        <FieldSet>
          <FieldGroup className="gap-6">
            <Field>
              <FieldLabel className="text-[24px] text-[#09090B] font-semibold">
                Create your account
              </FieldLabel>

              <FieldDescription className="text-[16px] font-400 text-[#71717A]">
                Sign up to explore your favorite dishes.
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

            <Button type="submit" onClick={() => setStep(2)}>
              <div>Lets Go</div>
            </Button>

            <div
              aria-label="Section to login"
              className="flex items-center justify-center text-[16px] gap-3"
            >
              Already have an account?{" "}
              <a href="http://localhost:3000/login" className="text-[#2563EB]">
                Log in
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

export default Step1;
