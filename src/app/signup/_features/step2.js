"use client";

import Backbutton from "../components/Backbutton";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

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
const Step2 = ({ setStep }) => {
  return (
    <div className="flex gap-12 items-center justify-center">
      <div className="w-104 pl-25">
        <FieldSet>
          <FieldGroup className="gap-6">
            <Backbutton />

            <Field>
              <FieldLabel className="text-[24px] text-[#09090B] font-semibold">
                Create a strong password
              </FieldLabel>

              <FieldDescription className="text-[16px] font-400 text-[#71717A]">
                Create a strong password with letters, numbers.
              </FieldDescription>
            </Field>
            <Input
              id="email"
              name="email"
              type="text"
              placeholder="Enter your email address"
              // value={values.email}
              // onChange={handleChange}
              // onBlur={handleBlur}
            />

            {/* {errors.email && touched.email && (
              <div className="text-red-500 text-sm">{errors.email}</div>
            )} */}

            <Button type="submit">
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

export default Step2;
