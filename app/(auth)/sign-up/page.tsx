"use client";

import AuthForm from "@/components/AuthForm";
import { signUpSchema } from "@/lib/validations";


const page = () => (
  <AuthForm
    type="SIGN_UP"
    schema={signUpSchema}
    defaultValues={{
      email: "",
      password: "",
      fullName: "",
      universityId: 0,
      universitycard: "",
    }}
    onSubmit ={() => {}}
  />
);

export default page;