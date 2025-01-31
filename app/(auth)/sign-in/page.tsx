import AuthForm from '@/components/AuthForm'
import React from 'react'
import { signInSchema} from "@/lib/validations"

const page = () => {
  <AuthForm 
    type= "SIGN_IN"
    schema = {signInSchema}
    defaultValues ={{
      email: "",
      password: "",
    }}
    onSubmit ={() => {}}
  />
}

export default page
//1hrs.20mins 